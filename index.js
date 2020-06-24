const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')
const parser = require('csv.parser.js')

var wr = (p,content)=>{
    fs.writeFile(p, content, { encoding:"utf8" }, function(err) {
        if (err) {
            console.error("LiSA.sync fileAdapter : " + err)
        }
    })
}

exports.getId= D=>{
    return D.replace(/\\/g,'/')
}

exports.syncReader= (D,options)=>{
    var content = fs.readFileSync(D,{encoding:"utf8"})
    return parser.toJson(content,options)
}
exports.reader =async (D,options)=>{
    return exports.syncReader(D,options)
}
exports.writer = (D,data ,options)=>{
    var content = null
    parser.toCsv(data,options).then(csv=>{
        content = csv
        if(!fs.existsSync(path.dirname(D))){
        mkdirp(path.dirname(D), function (err) {
            if (err) 
                console.error("LiSA.sync csvAdapter : " + err)
            else 
                wr(D,content)
        })
        }
        else{
            wr(D,content)
        }
    })

    
}