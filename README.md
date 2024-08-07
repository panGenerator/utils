[![Version](http://img.shields.io/npm/v/@pangenerator/utils.svg)](https://www.npmjs.org/package/@pangenerator/utils)
[![Tests](https://img.shields.io/github/actions/workflow/status/panGenerator/utils/tests.yml?label=tests)](https://github.com/panGenerator/utils)

## Modules

<dl>
<dt><a href="#module_PID">PID</a></dt>
<dd><p>PID controller</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#copyArray">copyArray</a> ⇒ <code>Array</code></dt>
<dd><p>Copy array</p>
</dd>
<dt><a href="#shuffleArray">shuffleArray</a> ⇒ <code>Array</code></dt>
<dd><p>Shuffle array</p>
</dd>
<dt><a href="#filterUnique">filterUnique</a> ⇒ <code>Array</code></dt>
<dd><p>Filter array unique</p>
</dd>
<dt><a href="#fuzzySearch">fuzzySearch</a> ⇒ <code>Array</code></dt>
<dd><p>Fuzzy search element in list</p>
</dd>
<dt><a href="#contains">contains</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if array contains</p>
</dd>
<dt><a href="#lerpColor">lerpColor</a> ⇒ <code>String</code></dt>
<dd><p>Linear color interpolation</p>
</dd>
<dt><a href="#getQuarter">getQuarter</a> ⇒ <code>Array</code></dt>
<dd><p>Get quarter from date</p>
</dd>
<dt><a href="#quarterExtent">quarterExtent</a> ⇒ <code>Array</code></dt>
<dd><p>Get quarter extent</p>
</dd>
<dt><a href="#datesBetween">datesBetween</a> ⇒ <code>Array</code></dt>
<dd><p>Get all dates between two dates</p>
</dd>
<dt><a href="#lerp3">lerp3</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Linear interpolation in 3D</p>
</dd>
<dt><a href="#lerpStops">lerpStops</a> ⇒ <code><a href="#Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Linear interpolation in 3D array</p>
</dd>
<dt><a href="#dist">dist</a> ⇒ <code>Number</code></dt>
<dd><p>Distance between two points (2D and 3D)</p>
</dd>
<dt><a href="#intersectLines">intersectLines</a> ⇒ <code><a href="#Point">Point</a></code> | <code>Boolean</code></dt>
<dd><p>Find intersection point between two lines</p>
</dd>
<dt><a href="#intersectCircles">intersectCircles</a> ⇒ <code>Array</code> | <code>Boolean</code></dt>
<dd><p>Find intersection points between two circles</p>
</dd>
<dt><a href="#polarToCartesian">polarToCartesian</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Convert coordinates from polar to cartesian</p>
</dd>
<dt><a href="#cartesianToPolar">cartesianToPolar</a> ⇒ <code>Object</code></dt>
<dd><p>Convert coordinates from cartesian to polar</p>
</dd>
<dt><a href="#dist2">dist2</a> ⇒ <code>Number</code></dt>
<dd><p>Distance between two points (2D and 3D) squared</p>
</dd>
<dt><a href="#distToSegment2">distToSegment2</a> ⇒ <code>Number</code></dt>
<dd><p>Distance between point and segment squared</p>
</dd>
<dt><a href="#distToSegment">distToSegment</a> ⇒ <code>Number</code></dt>
<dd><p>Distance between point and segment</p>
</dd>
<dt><a href="#map">map</a> ⇒ <code>Number</code></dt>
<dd><p>Map a number from one range to another</p>
</dd>
<dt><a href="#clamp">clamp</a> ⇒ <code>Number</code></dt>
<dd><p>Clamp a number to range</p>
</dd>
<dt><a href="#norm">norm</a> ⇒ <code>Number</code></dt>
<dd><p>Normalize a number</p>
</dd>
<dt><a href="#lerp">lerp</a> ⇒ <code>Number</code></dt>
<dd><p>Linear interpolation</p>
</dd>
<dt><a href="#square">square</a> ⇒ <code>Number</code></dt>
<dd><p>Square</p>
</dd>
<dt><a href="#degrees">degrees</a> ⇒ <code>Number</code></dt>
<dd><p>Convert angle in radians to degrees</p>
</dd>
<dt><a href="#radians">radians</a> ⇒ <code>Number</code></dt>
<dd><p>Convert angle in degrees to radians</p>
</dd>
<dt><a href="#precision">precision</a> ⇒ <code>Number</code></dt>
<dd><p>Round number to precision</p>
</dd>
<dt><a href="#shallowCopyExcluding">shallowCopyExcluding</a> ⇒ <code>Object</code></dt>
<dd><p>Copy object excluding property</p>
</dd>
<dt><a href="#random">random</a> ⇒ <code>Number</code></dt>
<dd><p>Generate random number from range</p>
</dd>
<dt><a href="#randomDir">randomDir</a> ⇒ <code>Number</code></dt>
<dd><p>Generate random direction (-1 or 1)</p>
</dd>
<dt><a href="#randomIndex">randomIndex</a> ⇒ <code>Number</code></dt>
<dd><p>Generate random index</p>
</dd>
<dt><a href="#randomName">randomName</a> ⇒ <code>String</code></dt>
<dd><p>Generate random name</p>
</dd>
<dt><a href="#timestampName">timestampName</a> ⇒ <code>String</code></dt>
<dd><p>Generate timestamp name</p>
</dd>
<dt><a href="#removeDiacritics">removeDiacritics</a> ⇒ <code>String</code></dt>
<dd><p>Remove polish diacritics</p>
</dd>
<dt><a href="#removeNonAlphaNumeric">removeNonAlphaNumeric</a> ⇒ <code>String</code></dt>
<dd><p>Remove all non alphanumeric characters</p>
</dd>
<dt><a href="#splitChunks">splitChunks</a> ⇒ <code>Array</code></dt>
<dd><p>Split string to N sized chunks</p>
</dd>
<dt><a href="#sepCase">sepCase</a> ⇒ <code>string</code></dt>
<dd><p>Convert string to custom separator case</p>
</dd>
<dt><a href="#snakeCase">snakeCase</a> ⇒ <code>string</code></dt>
<dd><p>Convert string to snake case</p>
</dd>
<dt><a href="#kebabCase">kebabCase</a> ⇒ <code>string</code></dt>
<dd><p>Convert string to kebab case</p>
</dd>
<dt><a href="#camelCase">camelCase</a> ⇒ <code>string</code></dt>
<dd><p>Convert string to camel case</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Point">Point</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Circle">Circle</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="module_PID"></a>

## PID
PID controller


* [PID](#module_PID)
    * [.set(P, I, D)](#module_PID+set)
    * [.update(current, target)](#module_PID+update) ⇒ <code>number</code>


* * *

<a name="module_PID+set"></a>

### piD.set(P, I, D)
Set PID gains

**Kind**: instance method of [<code>PID</code>](#module_PID)  
**Params**

- P <code>number</code> <code> = 0</code> - Proportional Gain
- I <code>number</code> <code> = 0</code> - Integral Gain
- D <code>number</code> <code> = 0</code> - Derivative Gain


* * *

<a name="module_PID+update"></a>

### piD.update(current, target) ⇒ <code>number</code>
Update PID controller

**Kind**: instance method of [<code>PID</code>](#module_PID)  
**Returns**: <code>number</code> - Output value  
**Params**

- current <code>number</code> - Current value
- target <code>number</code> - Target value


* * *

<a name="copyArray"></a>

## copyArray ⇒ <code>Array</code>
Copy array

**Kind**: global constant  
**Returns**: <code>Array</code> - copy of the array  
**Params**

- source <code>Array</code> - source array


* * *

<a name="shuffleArray"></a>

## shuffleArray ⇒ <code>Array</code>
Shuffle array

**Kind**: global constant  
**Returns**: <code>Array</code> - shuffled array copy  
**Params**

- source <code>Array</code> - source array


* * *

<a name="filterUnique"></a>

## filterUnique ⇒ <code>Array</code>
Filter array unique

**Kind**: global constant  
**Returns**: <code>Array</code> - array with unique elements only  
**Params**

- source <code>Array</code> - source array


* * *

<a name="fuzzySearch"></a>

## fuzzySearch ⇒ <code>Array</code>
Fuzzy search element in list

**Kind**: global constant  
**Returns**: <code>Array</code> - elements matching search value  
**Params**

- list <code>Array</code> - Array of terms
- searchValue <code>String</code> - search value to find


* * *

<a name="contains"></a>

## contains ⇒ <code>boolean</code>
Check if array contains

**Kind**: global constant  
**Returns**: <code>boolean</code> - - true when element is in array  
**Params**

- elem <code>any</code> - element to find in array
- arr <code>Array</code> - array to look in


* * *

<a name="lerpColor"></a>

## lerpColor ⇒ <code>String</code>
Linear color interpolation

**Kind**: global constant  
**Returns**: <code>String</code> - Interpolated color  
**Params**

- a <code>String</code> - First color
- b <code>String</code> - Second color
- amt <code>Number</code> - amount to interpolate


* * *

<a name="getQuarter"></a>

## getQuarter ⇒ <code>Array</code>
Get quarter from date

**Kind**: global constant  
**Returns**: <code>Array</code> - year and quarter (1-4)  
**Params**

- d <code>Date</code> - Date to get quarter from


* * *

<a name="quarterExtent"></a>

## quarterExtent ⇒ <code>Array</code>
Get quarter extent

**Kind**: global constant  
**Returns**: <code>Array</code> - start and end date of quarter  
**Params**

- quarter <code>Number</code> - quarter (1-4)
- year <code>Number</code> - full year


* * *

<a name="datesBetween"></a>

## datesBetween ⇒ <code>Array</code>
Get all dates between two dates

**Kind**: global constant  
**Returns**: <code>Array</code> - all dates between start and end  
**Params**

- start <code>Date</code> - start date
- end <code>Date</code> - end date


* * *

<a name="lerp3"></a>

## lerp3 ⇒ [<code>Point</code>](#Point)
Linear interpolation in 3D

**Kind**: global constant  
**Returns**: [<code>Point</code>](#Point) - Interpolated point  
**Params**

- A [<code>Point</code>](#Point) - First point
- B [<code>Point</code>](#Point) - Second point
- amt <code>Number</code> - amount to interpolate


* * *

<a name="lerpStops"></a>

## lerpStops ⇒ [<code>Array.&lt;Point&gt;</code>](#Point)
Linear interpolation in 3D array

**Kind**: global constant  
**Returns**: [<code>Array.&lt;Point&gt;</code>](#Point) - Interpolated points  
**Params**

- A [<code>Point</code>](#Point) - First point
- B [<code>Point</code>](#Point) - Second point
- count <code>Number</code> - Point count


* * *

<a name="dist"></a>

## dist ⇒ <code>Number</code>
Distance between two points (2D and 3D)

**Kind**: global constant  
**Returns**: <code>Number</code> - distance between the points  
**Params**

- A [<code>Point</code>](#Point) - First point
- B [<code>Point</code>](#Point) - Second point


* * *

<a name="intersectLines"></a>

## intersectLines ⇒ [<code>Point</code>](#Point) \| <code>Boolean</code>
Find intersection point between two lines

**Kind**: global constant  
**Returns**: [<code>Point</code>](#Point) \| <code>Boolean</code> - intersection or false (if no intersection)  
**Params**

- p1 [<code>Point</code>](#Point) - first point of first line
- p2 [<code>Point</code>](#Point) - second point of first line
- p3 [<code>Point</code>](#Point) - first point of second line
- p4 [<code>Point</code>](#Point) - second point of second line


* * *

<a name="intersectCircles"></a>

## intersectCircles ⇒ <code>Array</code> \| <code>Boolean</code>
Find intersection points between two circles

**Kind**: global constant  
**Returns**: <code>Array</code> \| <code>Boolean</code> - intersection or false (if no intersection)  
**Params**

- c1 [<code>Circle</code>](#Circle) - first circle
- c2 [<code>Circle</code>](#Circle) - second circle


* * *

<a name="polarToCartesian"></a>

## polarToCartesian ⇒ [<code>Point</code>](#Point)
Convert coordinates from polar to cartesian

**Kind**: global constant  
**Returns**: [<code>Point</code>](#Point) - cartesian coordinates  
**Params**

- r <code>Number</code> - radius
- angle <code>Number</code> - angle


* * *

<a name="cartesianToPolar"></a>

## cartesianToPolar ⇒ <code>Object</code>
Convert coordinates from cartesian to polar

**Kind**: global constant  
**Returns**: <code>Object</code> - polar coordinates  
**Params**

- P [<code>Point</code>](#Point) - cartesian coordinates


* * *

<a name="dist2"></a>

## dist2 ⇒ <code>Number</code>
Distance between two points (2D and 3D) squared

**Kind**: global constant  
**Returns**: <code>Number</code> - squared distance between the points  
**Params**

- A [<code>Point</code>](#Point) - First point
- B [<code>Point</code>](#Point) - Second point


* * *

<a name="distToSegment2"></a>

## distToSegment2 ⇒ <code>Number</code>
Distance between point and segment squared

**Kind**: global constant  
**Returns**: <code>Number</code> - squared distance between the point and the segment  
**Params**

- A [<code>Point</code>](#Point) - First point
- S [<code>Point</code>](#Point) - Segment start
- E [<code>Point</code>](#Point) - Segment end


* * *

<a name="distToSegment"></a>

## distToSegment ⇒ <code>Number</code>
Distance between point and segment

**Kind**: global constant  
**Returns**: <code>Number</code> - distance between the point and the segment  
**Params**

- A [<code>Point</code>](#Point) - First point
- S [<code>Point</code>](#Point) - Segment start
- E [<code>Point</code>](#Point) - Segment end


* * *

<a name="map"></a>

## map ⇒ <code>Number</code>
Map a number from one range to another

**Kind**: global constant  
**Returns**: <code>Number</code> - Mapped number  
**Params**

- value <code>Number</code> - Number to map
- low1 <code>Number</code> - Source range lower bound
- high1 <code>Number</code> - Source range upper bound
- low2 <code>Number</code> - Target range lower bound
- high2 <code>Number</code> - Target range upper bound


* * *

<a name="clamp"></a>

## clamp ⇒ <code>Number</code>
Clamp a number to range

**Kind**: global constant  
**Returns**: <code>Number</code> - Clamped number  
**Params**

- value <code>Number</code> - Number to clamp
- min <code>Number</code> - Range lower bound
- max <code>Number</code> - Range upper bound


* * *

<a name="norm"></a>

## norm ⇒ <code>Number</code>
Normalize a number

**Kind**: global constant  
**Returns**: <code>Number</code> - normalized number (0.0 - 1.0)  
**Params**

- value <code>Number</code> - value to normalize
- start <code>Number</code> - Source range lower bound
- stop <code>Number</code> - Source range upper bound


* * *

<a name="lerp"></a>

## lerp ⇒ <code>Number</code>
Linear interpolation

**Kind**: global constant  
**Returns**: <code>Number</code> - Interpolated value  
**Params**

- start <code>Number</code> - First value
- stop <code>Number</code> - Second value
- amt <code>Number</code> - amount to interpolate


* * *

<a name="square"></a>

## square ⇒ <code>Number</code>
Square

**Kind**: global constant  
**Returns**: <code>Number</code> - squared number  
**Params**

- a <code>Number</code> - Number to square


* * *

<a name="degrees"></a>

## degrees ⇒ <code>Number</code>
Convert angle in radians to degrees

**Kind**: global constant  
**Returns**: <code>Number</code> - angle in degrees  
**Params**

- radians <code>Number</code> - angle in radians


* * *

<a name="radians"></a>

## radians ⇒ <code>Number</code>
Convert angle in degrees to radians

**Kind**: global constant  
**Returns**: <code>Number</code> - angle in radians  
**Params**

- degrees <code>Number</code> - angle in degrees


* * *

<a name="precision"></a>

## precision ⇒ <code>Number</code>
Round number to precision

**Kind**: global constant  
**Returns**: <code>Number</code> - rounded number  
**Params**

- value <code>Number</code> - value to round
- precision <code>Number</code> - decimal places


* * *

<a name="shallowCopyExcluding"></a>

## shallowCopyExcluding ⇒ <code>Object</code>
Copy object excluding property

**Kind**: global constant  
**Returns**: <code>Object</code> - - copied object  
**Params**

- obj <code>Object</code> - Object to copy
- prop <code>string</code> - property name


* * *

<a name="random"></a>

## random ⇒ <code>Number</code>
Generate random number from range

**Kind**: global constant  
**Returns**: <code>Number</code> - Random number  
**Params**

- [low] <code>Number</code> - Range lower bound
- high <code>Number</code> - Range upper bound


* * *

<a name="randomDir"></a>

## randomDir ⇒ <code>Number</code>
Generate random direction (-1 or 1)

**Kind**: global constant  
**Returns**: <code>Number</code> - Random direction  

* * *

<a name="randomIndex"></a>

## randomIndex ⇒ <code>Number</code>
Generate random index

**Kind**: global constant  
**Returns**: <code>Number</code> - random index  
**Params**

- N <code>Number</code> - max index


* * *

<a name="randomName"></a>

## randomName ⇒ <code>String</code>
Generate random name

**Kind**: global constant  
**Returns**: <code>String</code> - random name  
**Params**

- N <code>Number</code> - length of the name


* * *

<a name="timestampName"></a>

## timestampName ⇒ <code>String</code>
Generate timestamp name

**Kind**: global constant  
**Returns**: <code>String</code> - timestamp name  

* * *

<a name="removeDiacritics"></a>

## removeDiacritics ⇒ <code>String</code>
Remove polish diacritics

**Kind**: global constant  
**Returns**: <code>String</code> - string without diacritics  
**Params**

- str <code>String</code> - string with diacritics


* * *

<a name="removeNonAlphaNumeric"></a>

## removeNonAlphaNumeric ⇒ <code>String</code>
Remove all non alphanumeric characters

**Kind**: global constant  
**Returns**: <code>String</code> - string without non alphanumeric characters  
**Params**

- str <code>String</code> - string with non alphanumeric characters


* * *

<a name="splitChunks"></a>

## splitChunks ⇒ <code>Array</code>
Split string to N sized chunks

**Kind**: global constant  
**Returns**: <code>Array</code> - array of string chunks  
**Params**

- str <code>String</code> - string to split
- n <code>Number</code> - chunk length
- discard <code>Boolean</code> - discard chunks shorter than N


* * *

<a name="sepCase"></a>

## sepCase ⇒ <code>string</code>
Convert string to custom separator case

**Kind**: global constant  
**Returns**: <code>string</code> - custom cased string  
**Params**

- str <code>string</code> - string to convert


* * *

<a name="snakeCase"></a>

## snakeCase ⇒ <code>string</code>
Convert string to snake case

**Kind**: global constant  
**Returns**: <code>string</code> - snake cased string  
**Params**

- str <code>string</code> - string to convert


* * *

<a name="kebabCase"></a>

## kebabCase ⇒ <code>string</code>
Convert string to kebab case

**Kind**: global constant  
**Returns**: <code>string</code> - kebab cased string  
**Params**

- str <code>string</code> - string to convert


* * *

<a name="camelCase"></a>

## camelCase ⇒ <code>string</code>
Convert string to camel case

**Kind**: global constant  
**Returns**: <code>string</code> - camel cased string  
**Params**

- str <code>string</code> - string to convert


* * *

<a name="Point"></a>

## Point : <code>Object</code>
**Kind**: global typedef  
**Properties**

- x <code>Number</code> - x coordinate  
- y <code>Number</code> - y coordinate  
- z <code>Number</code> - z coordinate  


* * *

<a name="Circle"></a>

## Circle : <code>Object</code>
**Kind**: global typedef  
**Properties**

- x <code>Number</code> - x coordinate of the center point  
- y <code>Number</code> - y coordinate of the center point  
- r <code>Number</code> - radius  


* * *


Copyright &copy; 2024 [panGenerator](https://pangenerator.com)
