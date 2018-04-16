const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    console.log('http start')
}).listen(1121)
let i = 0

setInterval(() => {
    i++;
    const url = `http://7xkmtv.com1.z0.glb.clouddn.com/${i}.jpg`
    http.get(url, res => {
        let imgData
        res.setEncoding('binary') //一定要设置response的编码为binary否则会下载下来的图片打不开
        res.on('data', chunk => {
            imgData += chunk
        });
        res.on('end', () => {
            fs.writeFile(`./public/${i}.jpg`, imgData, 'binary', err => {
                if (err) {
                    console.log('down fail')
                    return
                }
                console.log(`down ${i}.jpg success`)
            })
        })
    })
}, 1000)
