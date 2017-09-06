fs.readdir(process.cwd(),function (err, files) {
    console.log('');
    if(!files.length) {
        return console.log('no files to show\n')
    }
    console.log('select whitch file or drectory you want to see')
    function file(i) {
        var filename = files[i];
        fs.stat(__dirname + '/' + filename, function (err, stat) {
            if (stat.isDirectory()) {
                console.log('' + i + filename + '/n');
            }
            else {
                console.log('' + i + filename + '/n');
            }
            i++;
            if(i == files.length) {
                console.log('')
                process.stdout.write(' enter your choice:');
                process.stdin.resume();
            }
            else {
                file(i);
            }
        })
    }
})