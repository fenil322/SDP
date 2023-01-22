

exports.dummy=(req,res,next)=>{
res.send("<h1>hello from admin</h1>");
};

exports.get_user=async(req,res,next)=>{
res.send("<h1>hello from user</h1>");


}