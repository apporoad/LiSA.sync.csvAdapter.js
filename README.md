# LiSA.sync.csvAdapter.js
sync adapter for csv


## just do it

```bash
npm i --save lisa.sync
npm i --save lisa.sync.csvadapter
```

```js

var LiSASync = require('lisa.sync')
var adapter = require('lisa.sync.csvadapter')

//csv序列化效率不高，采用间隔 5000
var LiSA = LiSASync(__dirname + '/test.csv',{internal : 5000},adapter)

console.log(LiSA.getSync())

LiSA.set([{ name : "LiSA1" , gender : "girl"}])

console.log(LiSA.getSync())

var index =0

//or new data
LiSA.sync(()=>{
    return [{
        name : "LiSA2"
    }]
})

console.log(LiSA.getSync())

//you can call sync 
LiSA.sync(data=>{
    data.push({ name : "testNode"})
})

LiSA.get().then(d=>{
    console.log(d)
})

//stop sync
LiSA.stop()

```