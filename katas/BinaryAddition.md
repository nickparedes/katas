``` js
export function addBinary(a = 71, b = 7) {

    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('error');
    return ((a+b) >>> 0).toString(2);
}
 
```