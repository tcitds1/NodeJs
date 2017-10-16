var fs = require('fs');

fs.readdir(process.cwd(),function (err,files) {
    console.log(" ");
    if(!files.length){
        return console.log(' \033[31m no files to show! \033[39m\n');
    }
    console.log('   select which file or directory you want to see \n');
    function file(i) {
        var filename = files[i];
        fs.stat(__dirname+'/'+filename,function (err, stat) {
            if(stat.isDirectory()){
                console.log('\033[36m '+ filename + '\033[39m\n');
            }
            else {
                console.log(' \033[90m'+ filename+ '\033[39m\n');
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
        }
    }
    file(0);
});