var fileA = require('./index')

var D = __dirname + '/test.csv'

console.log(fileA.getId(D))

fileA.writer(D, [{
    hello : 'world',
    name : 'lily'
}])

// console.log(fileA.syncReader(D))

setTimeout(() => {
    fileA.reader(D).then(data=>{
    console.log(data)
    })
}, 500);


