/**
 * Browser functions
 */

/**
 * Load JSON
 * @param {String} address - address of JSON to load
 * @param {Function} callback - function to call on result
 */
export const loadJSON = (address, callback) => {
  const xObj = new XMLHttpRequest()
  xObj.overrideMimeType('application/json')
  xObj.open('GET', address, true)
  xObj.onreadystatechange = () => {
    if (xObj.readyState === 4 && xObj.status === 200) {
      callback(JSON.parse(xObj.responseText))
    }
  }
  xObj.send(null)
}

/**
 * Download file from base64 data uri
 * @param {Object} options - options for the downloaded file
 * @param {String} options.data - contents of the file
 * @param {String} options.filename - name of the file
 */
export const downloadDataUri = (options) => {
  var element = document.createElement('a')
  element.setAttribute('href', options.data)
  element.setAttribute('download', options.filename)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

/**
 * Get element page offset
 * @param {Object} elem - HTML element
 * @returns {Object} top and left page offset
 */
export const pageOffset = (elem) => {
  const rect = elem.getBoundingClientRect()
  const win = elem.ownerDocument.defaultView
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset,
  }
}

/**
 * Get CSS Styles from element
 * @param {HTMLElement} parentElement - Element to get styles from
 * @returns {string} - extracted CSS
 */
export const getCSS = (parentElement) => {
  const selectorTextArr = []

  // Add Parent element Id and Classes to the list
  selectorTextArr.push('#' + parentElement.id)
  for (let c = 0; c < parentElement.classList.length; c++) {
    if (!contains('.' + parentElement.classList[c], selectorTextArr)) {
      selectorTextArr.push('.' + parentElement.classList[c])
    }
  }

  // Add Children element Ids and Classes to the list
  const nodes = parentElement.getElementsByTagName('*')
  for (let i = 0; i < nodes.length; i++) {
    const id = nodes[i].id
    if (!contains('#' + id, selectorTextArr)) {
      selectorTextArr.push('#' + id)
    }

    const classes = nodes[i].classList
    for (let c = 0; c < classes.length; c++) {
      if (!contains('.' + classes[c], selectorTextArr)) {
        selectorTextArr.push('.' + classes[c])
      }
    }
  }
  // Extract CSS Rules
  let extractedCSSText = ''
  for (let i = 0; i < document.styleSheets.length; i++) {
    var s = document.styleSheets[i]
    try {
      if (!s.cssRules) continue
    } catch (e) {
      if (e.name !== 'SecurityError') throw e // for Firefox
      continue
    }

    var cssRules = s.cssRules
    for (var r = 0; r < cssRules.length; r++) {
      if (contains(cssRules[r].selectorText, selectorTextArr)) {
        extractedCSSText += cssRules[r].cssText
      }
    }
  }
  return extractedCSSText
}

/**
 * Append CSS to element
 * @param {string} cssText - CSS text to append
 * @param {HTMLElement} element - element to append CSS to
 */
export const appendCSS = (cssText, element) => {
  var styleElement = document.createElement('style')
  styleElement.setAttribute('type', 'text/css')
  styleElement.innerHTML = cssText
  var refNode = element.hasChildNodes() ? element.children[0] : null
  element.insertBefore(styleElement, refNode)
}

/**
 * Get SVG string from node
 * @param {HTMLElement} svgNode - svg node to get text from
 * @returns {string} - svg as string
 */
export const getSVGString = (svgNode) => {
  svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink')
  var cssStyleText = getCSS(svgNode)
  appendCSS(cssStyleText, svgNode)

  var serializer = new XMLSerializer()
  var svgString = serializer.serializeToString(svgNode)
  svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink=') // Fix root xlink without namespace
  svgString = svgString.replace(/NS\d+:href/g, 'xlink:href') // Safari NS namespace fix

  return svgString
}

/**
 * Convert SVG string to image and call the callback
 * @param {string} svgString - SVG string to convert
 * @param {Number} width - width of output image
 * @param {Number} height - height of output image
 * @param {string} format - format of output image
 * @param {boolean} transparent - transparency flag
 * @param {Function} callback - function to call when ready
 */
export const svgStringToImage = (
  svgString,
  width,
  height,
  format,
  transparent,
  callback
) => {
  format = format || 'png'

  var imgsrc =
    'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString))) // Convert SVG string to data URL

  var canvas = document.createElement('canvas')
  var context = canvas.getContext('2d')

  canvas.width = width
  canvas.height = height

  var image = new Image()
  image.onload = () => {
    context.clearRect(0, 0, width, height)
    if (!transparent) {
      context.beginPath()
      context.fillStyle = '#fff'
      context.fillRect(0, 0, canvas.width, canvas.height)
    }
    context.drawImage(image, 0, 0, width, height)
    if (callback) callback(canvas.toDataURL())
  }
  image.src = imgsrc
}

/**
 * Convert SVG to data uri
 * @param {HTMLElement} svgNode - SVG element to get uri from
 * @returns {string} - uri data scheme string
 */
export const svgToUri = (svgNode) => {
  const serializer = new XMLSerializer()
  let source = serializer.serializeToString(svgNode)
  if (!source.match(/^<svg[^>]+xmlns="http:\/\/www\.w3\.org\/2000\/svg"/)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"')
  }
  if (!source.match(/^<svg[^>]+"http:\/\/www\.w3\.org\/1999\/xlink"/)) {
    source = source.replace(
      /^<svg/,
      '<svg xmlns:xlink="http://www.w3.org/1999/xlink"'
    )
  }
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source

  // convert svg source to URI data scheme.
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source)
}
