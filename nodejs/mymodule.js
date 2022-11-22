function mylog(message){
    console.log(message);
}
function myerror(message){
    console.error(message);
}
function mywarn(message){
    console.warn(message);
}
module.exports.log=mylog;
module.exports.error=myerror;
module.exports.warn=mywarn;