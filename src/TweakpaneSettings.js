import { snakeCase, shallowCopyExcluding } from "./utils.js"

export default class TweakpaneSettings {

  constructor(ctrl, controllables, settingsName = null) {

    this.settingsName = settingsName ?? ctrl.title + "-settings"
    this.ctrl = ctrl
    this.presets = controllables[0].settings.presets
    if(this.presets){
      Object.keys(this.presets).forEach((p) => {
        this.presets[p] = JSON.parse(this.presets[p])
      })
    }
    else {
      this.presets = {}
    }
    controllables.forEach((g, i) => {

      const folder = (g.settings.name) ? ctrl.addFolder({ title: g.settings.name }) : ctrl

      if ('controls' in g.settings) {

        Object.keys(g.settings.controls).forEach((s) => {

          const options = shallowCopyExcluding(g.settings.controls[s], 'val')
          options.presetKey = (g.settings.name) ? snakeCase(g.settings.name) + "_$" + s : null
          options.label = (options.label) ? options.label : s

          // shortcut props
          Object.defineProperty(g, '$' + s, {
            get: () => {
              return g.settings.controls[s].val
            },
            set: (v) => {
              g.settings.controls[s].val = v
            }
          })

          const input = folder.addInput(g, '$' + s, options) //g.settings.controls[s].val

          if (options.callback) {
            input.on('change', (ev) => { options.callback(ev) })
          }
        })
      }

      if ('buttons' in g.settings) {
        Object.keys(g.settings.buttons).forEach((b) => {
          folder.addButton({ title: g.settings.buttons[b].label }).on('click', () => {
            g.settings.buttons[b].callback()
          })
        })
      }

      if ('buttons_grid' in g.settings) {
        g.settings.buttons_grid.grids.forEach((bg) => {
          folder.addBlade({
            view: 'buttongrid',
            size: bg.size,
            label: bg.label,
            cells: bg.cells
          }).on('click', (ev) => {
            bg.callbacks[ev.index[1]][ev.index[0]]()
          })
        })
      }

      if ('monitors' in g.settings) {
        Object.keys(g.settings.monitors).forEach((m) => {
          const options = g.settings.monitors_options[m]
          folder.addMonitor(g.settings.monitors, m, options)

          // shortcut props
          Object.defineProperty(g, '$' + m, {
            get: () => {
              return g.settings.monitors[m]
            },
            set: (v) => {
              g.settings.monitors[m] = v
            }
          })
        })
      }
    })

    const presets = ctrl.addFolder({ title: "Presets", expanded: false })

    if(Object.keys(this.presets).length>0){
      presets.addBlade({
        view: 'list',
        label: 'preset',
        options:
          Object.keys(this.presets).map((p) => { return { text: p, value: p } }),
        value: Object.keys(this.presets)[0],

      }).on('change', (ev) => {
        this.loadSettings(this.presets[ev.value])
      })

      presets.addSeparator()
    }

    presets.addButton({ title: 'Store settings' }).on('click', () => {
      console.log("save settings")
      const preset = ctrl.exportPreset()
      localStorage.setItem(settingsName, JSON.stringify(preset))
      console.log(preset)
      console.log("json:\n", JSON.stringify(preset))
    })

    presets.addButton({ title: 'Restore settings' }).on('click', () => { this.loadSettings() })

    presets.addButton({ title: 'Download settings' }).on('click', () => {
      console.log("download settings")

      const fileName = settingsName + "_" + new Date().toLocaleString().replace(/[^0-9]+/g, '-') + ".json"
      const url = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(ctrl.exportPreset(), null, 2));
      console.log(JSON.stringify(ctrl.exportPreset()))
      const link = document.createElement("a")
      link.download = fileName
      link.href = url
      link.click()
      link.remove()
    })

    presets.addButton({ title: 'Upload settings' }).on('click', () => {
      console.log("upload settings")
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'application/json');
      input.style.opacity = '0';
      input.style.position = 'fixed';
      document.body.appendChild(input);
      input.addEventListener('input', (ev) => {

        if (input.files && input.files[0]) {
          const file = input.files[0];
          let reader = new FileReader()
          reader.readAsText(file)

          reader.onload = () => {
            console.log("settings loaded...")
            console.log(reader.result)
            ctrl.importPreset(JSON.parse(reader.result))
          }

          reader.onerror = () => {
            console.log("error loading file!")
            console.log(reader.error)
          }
        }

        document.body.removeChild(input)
      }, { once: true })
      input.click()
    })

    presets.addButton({ title: 'Default settings' }).on('click', () => {
      if (this.presets.default) {
        this.loadSettings(this.presets.default)
      }
    })
  }

  loadSettings (settings = null) {
    console.log("restore settings")
    console.log('presets', this.presets)
    if (settings) {
      this.ctrl.importPreset(settings)
      console.log("loaded settings:", settings)
    } else {
      if (this.presets.default) {
        this.ctrl.importPreset(this.presets.default)
        console.log("loaded default settings:", this.presets.default)
      }
      else {
        const localPreset = localStorage.getItem(this.settingsName)
        if (localPreset) {
          this.ctrl.importPreset(JSON.parse(localPreset))
          console.log("loaded settings from local storage:", preset)
        }
      }
    }
  }
}