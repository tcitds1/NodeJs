var fs = require('fs');

fs.readdir(process.cwd(),function (err,files) {
    var stats = [];// 记录stat对象
    console.log(" ");
    if(!files.length){
        return console.log(' \033[31m no files to show! \033[39m\n');
    }
    console.log('   select which file or directory you want to see \n');
    function file(i) {
        var filename = files[i];
        fs.stat(__dirname+'/'+filename,function (err, stat) {
            stats[i] = stat;
            if(stat.isDirectory()){
                console.log(i +'  '+ '\033[36m '+ filename + '\033[39m\n');
            }
            else {
                console.log(i +'  '+ ' \033[90m'+ filename+ '\033[39m\n');
            }
        })
        i++;
        if(i==files.length){
            console.log("");
            process.stdout.write(' \033[33mEnter your choice: \033[39m\n');
            process.stdin.resume();
        }
        else{
            file(i);
            read();
        }
    }
    function read() {
        process.stdin.setEncoding('utf8');
        process.stdin.on("data",option)
    }
    function option(data) {
        if(!files[Number(data)]){
            process.stdout.write(' \033[33mEnter your choice: \033[39m\n');
            process.stdin.resume();
        }
        else {
            var filename = files[Number(data)];
            process.stdin.pause();
            fs.readFile(__dirname+"/"+filename,'utf-8',function (err, data) {
                console.log(" ");
                console.log('\033[90m' + data.replace(/(.*)/g, '          $1') +  '\033[39m');
            });
        }
    }
    file(0);
});