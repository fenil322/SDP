const Brand = require('../models/brand')
const Influencer = require('../models/influencers')
const Consignment = require('../models/consignment')
const mongoose = require('mongoose');
const { response } = require('express');
const { ObjectId } = mongoose.Schema.Types;

exports.createConsignment = async (req, res, next) => {

    const brandId = req.userId;
    const influencerId = req.body.influencerId;

    const consignment = await Consignment.findOne({ brandId: brandId, influencerId: influencerId })
    if (consignment) {
        return res.status(400).json({ success: false, error: 'Consignment already exists with this influencer...' })
    }
    const newconsignment = new Consignment({ brandId, influencerId });
    try {
        newconsignment.save();
        return res.status(200).json({
            success: true, data: { brandId, influencerId }, message: "Request sent to influencer"
        });
    } catch (e) {
        return res.status(422).json({
            success: false, error: "Somthing went wrong"
        })
    }
}

exports.getBrandRequest = async (req, res, next) => {
    const influencerId = req.userId;
    console.log(influencerId);

    const data = await Consignment.find({ influencerId, shoprequest: 0 });

    // array.push({ data: "hello world" })


    let array = new Array();
    data.map(async (element) => {
        const id = element.brandId.toString();
        var data2 = await Brand.findById(id).select("-tokens")
        // console.log(data2);
        array.push(data2)
    })
    // console.log("array data");
    setTimeout(() => {
        // console.log(array);
        return res.status(200).json({ success: true, data: array })

    }, 1000)




}

exports.acceptBrandReq=async(req,res)=>{
    const influencerId=req.userId;
    const brandId=req.body._id;
    console.log(req.body.email);
    console.log(req.body._id);

    const data=await Consignment.findOneAndUpdate(
        {influencerId,brandId},
        { $set: { shoprequest: 1} },
        { new: true });
        if(!data){
            return  res.status(400).json({success:false,error:"Something went wrong"})
        }
        console.log(data);
    return res.status(200).json({success:true,message:"Request accepted"})

}
exports.deleteBrandReq=async(req,res)=>{
    const influencerId=req.userId;
    const brandId=req.body._id;
    console.log("delete");
    // console.log(req.body.email);
    console.log(req.body);

    const data=await Consignment.findOneAndDelete({influencerId,brandId})
        console.log(data);
        if(!data){
            return  res.status(400).json({success:false,error:"Something went wrong"})
        }
        
    return res.status(200).json({success:true,message:"Deleted request"})

}
exports.getInfConsignment=async(req,res)=>{
    const influencerId=req.userId;
    // console.log("get");
    // console.log(req.body);

    const data=await Consignment.find({influencerId,shoprequest:1})
        console.log(data);
        if(!data){
            return  res.status(400).json({success:false,error:"Something went wrong"})
        }
    let array = new Array();
    let array2 = new Array();
    
    data.map(async (element) => {
        const id = element.brandId.toString();
        var data2 = await Brand.findById(id).select("-tokens")
        // console.log(data2);
        array2.push(element.Amount);
        array.push(data2);
    })
    // console.log("array data");
    setTimeout(() => {
        // console.log(array);
        // return res.status(200).json({ success: true, data: array })
        return res.status(200).json({success:true,message:"data sent...",data:array,data1:array2})


    }, 1000)

}
