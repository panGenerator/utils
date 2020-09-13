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

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Number to map |
| low1 | <code>Number</code> | Source range lower bound |
| high1 | <code>Number</code> | Source range upper bound |
| low2 | <code>Number</code> | Target range lower bound |
| high2 | <code>Number</code> | Target range upper bound |

<a name="module_utils.clamp"></a>

### utils.clamp(value, min, max) ⇒ <code>Number</code>
Clamp a number in range

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - Clamped number  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Number to clamp |
| min | <code>Number</code> | Range lower bound |
| max | <code>Number</code> | Range upper bound |

<a name="module_utils.random"></a>

### utils.random([low], high) ⇒ <code>Number</code>
Generate random number from range

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - Random number  

| Param | Type | Description |
| --- | --- | --- |
| [low] | <code>Number</code> | Range lower bound |
| high | <code>Number</code> | Range upper bound |

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

| Param | Type | Description |
| --- | --- | --- |
| start | <code>Number</code> | First value |
| stop | <code>Number</code> | Second value |
| amt | <code>Number</code> | amount to interpolate |

<a name="module_utils.lerp3"></a>

### utils.lerp3(A, B, amt) ⇒ <code>Object</code>
Linear interpolation in 3D

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Object</code> - Interpolated point  

| Param | Type | Description |
| --- | --- | --- |
| A | <code>Object</code> | First point |
| B | <code>Object</code> | Second point |
| amt | <code>Number</code> | amount to interpolate |

<a name="module_utils.lerpedPoints"></a>

### utils.lerpedPoints(A, B, count) ⇒ <code>Array.&lt;Object&gt;</code>
Linear interpolation in 3D array

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Array.&lt;Object&gt;</code> - Interpolated points  

| Param | Type | Description |
| --- | --- | --- |
| A | <code>Object</code> | First point |
| B | <code>Object</code> | Second point |
| count | <code>Number</code> | Point count |

<a name="module_utils.square"></a>

### utils.square(a) ⇒ <code>Number</code>
Square

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - squared number  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | Number to square |

<a name="module_utils.dist"></a>

### utils.dist(A, B) ⇒ <code>Number</code>
Distance between two points (2D and 3D)

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - distance between the points  

| Param | Type | Description |
| --- | --- | --- |
| A | <code>Object</code> | First point |
| B | <code>Object</code> | Second point |

<a name="module_utils.norm"></a>

### utils.norm(value, start, stop) ⇒ <code>Number</code>
Normalize

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - normalized number (0.0 - 1.0)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | value to normalize |
| start | <code>Number</code> | Source range lower bound |
| stop | <code>Number</code> | Source range upper bound |

<a name="module_utils.degrees"></a>

### utils.degrees(radians) ⇒ <code>Number</code>
Convert angle in radians to degrees

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - angle in degrees  

| Param | Type | Description |
| --- | --- | --- |
| radians | <code>Number</code> | angle in radians |

<a name="module_utils.radians"></a>

### utils.radians(degrees) ⇒ <code>Number</code>
Convert angle in degrees to radians

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - angle in radians  

| Param | Type | Description |
| --- | --- | --- |
| degrees | <code>Number</code> | angle in degrees |

<a name="module_utils.randomName"></a>

### utils.randomName(N) ⇒ <code>String</code>
Generate random name

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>String</code> - random name  

| Param | Type | Description |
| --- | --- | --- |
| N | <code>Number</code> | length of the name |

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

| Param | Type | Description |
| --- | --- | --- |
| N | <code>Number</code> | max index |

<a name="module_utils.copyArray"></a>

### utils.copyArray(source) ⇒ <code>Array</code>
Copy array

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Array</code> - array copy  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array</code> | source array |

<a name="module_utils.shuffleArray"></a>

### utils.shuffleArray(source) ⇒ <code>Array</code>
Shuffle array

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Array</code> - shuffled array copy  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array</code> | source array |

<a name="module_utils.lerpColor"></a>

### utils.lerpColor(a, b, amt) ⇒ <code>String</code>
Linear color interpolation

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>String</code> - Interpolated color  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>String</code> | First color |
| b | <code>String</code> | Second color |
| amt | <code>Number</code> | amount to interpolate |

<a name="module_utils.precision"></a>

### utils.precision(value, precision) ⇒ <code>Number</code>
Round number to precision

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>Number</code> - rounded number  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | value to round |
| precision | <code>Number</code> | decimal places |

<a name="module_utils.loadJSON"></a>

### utils.loadJSON(address, callback)
Load JSON

**Kind**: static method of [<code>utils</code>](#module_utils)  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>String</code> | address of JSON to loads |
| callback | <code>function</code> | callback on result |

<a name="module_utils.removeDiacritics"></a>

### utils.removeDiacritics(str) ⇒ <code>String</code>
Remove polish diacritics

**Kind**: static method of [<code>utils</code>](#module_utils)  
**Returns**: <code>String</code> - string without diacritics  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | string with diacritics |


---
&copy; 2020 panGenerator
