const _exec = require('child_process').exec;
let i = 0

setInterval(() => {
    i++;
    try {
        // _exec(`wget -P ./public/ http://7xkmtv.com1.z0.glb.clouddn.com/${i}.jpg`);
        _exec(`wget -P ./qq_product_operations/ https://sqimg.qq.com/qq_product_operations/tiqq/signin/pic2/v2/nd${i}.jpg`);
    } catch (e) {
        console.log(e);
    }
}, 100)
