[![Version](http://img.shields.io/npm/v/@pangenerator/utils.svg)](https://www.npmjs.org/package/@pangenerator/utils) [![Tests](https://img.shields.io/github/workflow/status/panGenerator/utils/Tests)](https://github.com/panGenerator/utils)
![Dependencies](https://img.shields.io/david/panGenerator/utils) ![Dev Dependencies](https://img.shields.io/david/dev/panGenerator/utils)

<a name="module_utils"></a>

## utils
Various functions used in javascript tools


* [utils](#module_utils)
    * [.map(value, low1, high1, low2, high2)](#module_utils.map) ⇒ <code>Number</code>
    * [.clamp(value, min, max)](#module_utils.clamp) ⇒ <code>Number</code>
    * [.random([low], high)](#module_utils.random) ⇒ <code>Number</code>
    * [.randomDir()](#module_utils.randomDir) ⇒ <code>Number</code>
    * [.lerp(start, stop, amt)](#module_utils.lerp) ⇒ <code>Number</code>
    * [.lerp3(A, B, amt)](#module_utils.lerp3) ⇒ <code>Object</code>
    * [.lerpedPoints(A, B, count)](#module_utils.lerpedPoints) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.square(a)](#module_utils.square) ⇒ <code>Number</code>
    * [.dist(A, B)](#module_utils.dist) ⇒ <code>Number</code>
    * [.norm(value, start, stop)](#module_utils.norm) ⇒ <code>Number</code>
    * [.degrees(radians)](#module_utils.degrees) ⇒ <code>Number</code>
    * [.radians(degrees)](#module_utils.radians) ⇒ <code>Number</code>
    * [.randomName(N)](#module_utils.randomName) ⇒ <code>String</code>
    * [.timestampName()](#module_utils.timestampName) ⇒ <code>String</code>
    * [.randomIndex(N)](#module_utils.randomIndex) ⇒ <code>Number</code>
    * [.copyArray(source)](#module_utils.copyArray) ⇒ <code>Array</code>
    * [.shuffleArray(source)](#module_utils.shuffleArray) ⇒ <code>Array</code>
    * [.lerpColor(a, b, amt)](#module_utils.lerpColor) ⇒ <code>String</code>
    * [.precision(value, precision)](#module_utils.precision) ⇒ <code>Number</code>
    * [.loadJSON(address, callback)](#module_utils.loadJSON)
    * [.removeDiacritics(str)](#module_utils.removeDiacritics) ⇒ <code>String</code>

<a name="module_utils.map"></a>

### utils.map(value, low1, high1, low2, high2) ⇒ <code>Number</code>
Map a number from one range to another

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - Mapped number  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>value</td><td><code>Number</code></td><td><p>Number to map</p>
</td>
    </tr><tr>
    <td>low1</td><td><code>Number</code></td><td><p>Source range lower bound</p>
</td>
    </tr><tr>
    <td>high1</td><td><code>Number</code></td><td><p>Source range upper bound</p>
</td>
    </tr><tr>
    <td>low2</td><td><code>Number</code></td><td><p>Target range lower bound</p>
</td>
    </tr><tr>
    <td>high2</td><td><code>Number</code></td><td><p>Target range upper bound</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.clamp"></a>

### utils.clamp(value, min, max) ⇒ <code>Number</code>
Clamp a number in range

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - Clamped number  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>value</td><td><code>Number</code></td><td><p>Number to clamp</p>
</td>
    </tr><tr>
    <td>min</td><td><code>Number</code></td><td><p>Range lower bound</p>
</td>
    </tr><tr>
    <td>max</td><td><code>Number</code></td><td><p>Range upper bound</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.random"></a>

### utils.random([low], high) ⇒ <code>Number</code>
Generate random number from range

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - Random number  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>[low]</td><td><code>Number</code></td><td><p>Range lower bound</p>
</td>
    </tr><tr>
    <td>high</td><td><code>Number</code></td><td><p>Range upper bound</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.randomDir"></a>

### utils.randomDir() ⇒ <code>Number</code>
Generate random direction (-1 or 1)

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - Random direction  
<a name="module_utils.lerp"></a>

### utils.lerp(start, stop, amt) ⇒ <code>Number</code>
Linear interpolation

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - Interpolated value  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>start</td><td><code>Number</code></td><td><p>First value</p>
</td>
    </tr><tr>
    <td>stop</td><td><code>Number</code></td><td><p>Second value</p>
</td>
    </tr><tr>
    <td>amt</td><td><code>Number</code></td><td><p>amount to interpolate</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.lerp3"></a>

### utils.lerp3(A, B, amt) ⇒ <code>Object</code>
Linear interpolation in 3D

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Object</code> - Interpolated point  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>A</td><td><code>Object</code></td><td><p>First point</p>
</td>
    </tr><tr>
    <td>B</td><td><code>Object</code></td><td><p>Second point</p>
</td>
    </tr><tr>
    <td>amt</td><td><code>Number</code></td><td><p>amount to interpolate</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.lerpedPoints"></a>

### utils.lerpedPoints(A, B, count) ⇒ <code>Array.&lt;Object&gt;</code>
Linear interpolation in 3D array

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Array.&lt;Object&gt;</code> - Interpolated points  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>A</td><td><code>Object</code></td><td><p>First point</p>
</td>
    </tr><tr>
    <td>B</td><td><code>Object</code></td><td><p>Second point</p>
</td>
    </tr><tr>
    <td>count</td><td><code>Number</code></td><td><p>Point count</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.square"></a>

### utils.square(a) ⇒ <code>Number</code>
Square

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - squared number  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>a</td><td><code>Number</code></td><td><p>Number to square</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.dist"></a>

### utils.dist(A, B) ⇒ <code>Number</code>
Distance between two points (2D and 3D)

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - distance between the points  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>A</td><td><code>Object</code></td><td><p>First point</p>
</td>
    </tr><tr>
    <td>B</td><td><code>Object</code></td><td><p>Second point</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.norm"></a>

### utils.norm(value, start, stop) ⇒ <code>Number</code>
Normalize

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - normalized number (0.0 - 1.0)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>value</td><td><code>Number</code></td><td><p>value to normalize</p>
</td>
    </tr><tr>
    <td>start</td><td><code>Number</code></td><td><p>Source range lower bound</p>
</td>
    </tr><tr>
    <td>stop</td><td><code>Number</code></td><td><p>Source range upper bound</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.degrees"></a>

### utils.degrees(radians) ⇒ <code>Number</code>
Convert angle in radians to degrees

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - angle in degrees  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>radians</td><td><code>Number</code></td><td><p>angle in radians</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.radians"></a>

### utils.radians(degrees) ⇒ <code>Number</code>
Convert angle in degrees to radians

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - angle in radians  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>degrees</td><td><code>Number</code></td><td><p>angle in degrees</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.randomName"></a>

### utils.randomName(N) ⇒ <code>String</code>
Generate random name

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>String</code> - random name  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>N</td><td><code>Number</code></td><td><p>length of the name</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.timestampName"></a>

### utils.timestampName() ⇒ <code>String</code>
Generate timestamp name

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>String</code> - timestamp name  
<a name="module_utils.randomIndex"></a>

### utils.randomIndex(N) ⇒ <code>Number</code>
Generate random name

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - random index  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>N</td><td><code>Number</code></td><td><p>max index</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.copyArray"></a>

### utils.copyArray(source) ⇒ <code>Array</code>
Copy array

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Array</code> - array copy  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>source</td><td><code>Array</code></td><td><p>source array</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.shuffleArray"></a>

### utils.shuffleArray(source) ⇒ <code>Array</code>
Shuffle array

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Array</code> - shuffled array copy  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>source</td><td><code>Array</code></td><td><p>source array</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.lerpColor"></a>

### utils.lerpColor(a, b, amt) ⇒ <code>String</code>
Linear color interpolation

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>String</code> - Interpolated color  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>a</td><td><code>String</code></td><td><p>First color</p>
</td>
    </tr><tr>
    <td>b</td><td><code>String</code></td><td><p>Second color</p>
</td>
    </tr><tr>
    <td>amt</td><td><code>Number</code></td><td><p>amount to interpolate</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.precision"></a>

### utils.precision(value, precision) ⇒ <code>Number</code>
Round number to precision

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - rounded number  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>value</td><td><code>Number</code></td><td><p>value to round</p>
</td>
    </tr><tr>
    <td>precision</td><td><code>Number</code></td><td><p>decimal places</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.loadJSON"></a>

### utils.loadJSON(address, callback)
Load JSON

**Kind**: static method of [<code>utils</code>](#module_utils)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>address</td><td><code>String</code></td><td><p>address of JSON to loads</p>
</td>
    </tr><tr>
    <td>callback</td><td><code>function</code></td><td><p>callback on result</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_utils.removeDiacritics"></a>

### utils.removeDiacritics(str) ⇒ <code>String</code>
Remove polish diacritics

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>String</code> - string without diacritics  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>str</td><td><code>String</code></td><td><p>string with diacritics</p>
</td>
    </tr>  </tbody>
</table>


---
&copy; 2020 panGenerator
