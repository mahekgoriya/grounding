var http=require('http');
var server=http.createServer(function(request,response){
    console.log('Request Accepted');
});
server.listen(5000);
console.log('Server Started');