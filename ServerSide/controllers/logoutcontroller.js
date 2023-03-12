exports.logout=async(req,res)=>{
    res.clearCookie("jwtoken");
    try{

        res.status(200).json({success:true,message:"Logged out successfully"});
    } catch (error) {
       
        res.status(400).json({success:false,message:"somthing went wronge"});
    }


}