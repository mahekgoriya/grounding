var log={
    info:function(msg)
    {
        console.log('info '+msg);
    },
    warn:function(msg)
    {
        console.warn('warning '+msg);
    },
    error:function(msg)
    {
        console.error('error '+msg)
    }
}
module.exports=log;