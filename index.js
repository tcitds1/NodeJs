// // console.log(require('fs').readdirSync('.'));
//
// //异步的版本
// function async(err,files) {
//     console.log(files);
// }
// require('fs').readdirSync('.',async);

function async(err, files) {
    console.log(files)
}
require('fs').readdir('.', async);