# index-map
A bi-directional map that allow to create a link between index and object, so that you can retrieve either one if you know the other element.

### How to use
```javascript
const map = new IndexMap();
const index = "myIndex";
const object = {"test": true};

map.set(index, object);

map.has(index); // true
map.has(object); // true

map.get(index).test // true
map.get(object); // "myIndex"

map.delete(index);
// or
map.delete(object);
```
