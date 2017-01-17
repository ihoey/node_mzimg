var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {}).listen(1121);
console.log("http start");


    var i = 0;
setInterval(function(){

    i ++;
    // console.log(i);
    var url = "http://7xkmtv.com1.z0.glb.clouddn.com/" + i + ".jpg";
    http.get(url, function(res) {
        var imgData = "";

        res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开


        res.on("data", function(chunk) {
            imgData += chunk;
        });

        res.on("end", function() {
            console.log(i);
            fs.writeFile("./public/" + i + ".jpg", imgData, "binary", function(err) {
                if (err) {
                    console.log("down fail");
                }
                console.log("down success");
            });
        });
    });
},1000)

