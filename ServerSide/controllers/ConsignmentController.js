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
    const newconsignment = new Consignment({ brandId, influencerId, influencerrequest: 1 });
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
exports.createConsignmentInf = async (req, res, next) => {

    const influencerId = req.userId;
    const brandId = req.body.brandId;

    const consignment = await Consignment.findOne({ brandId: brandId, influencerId: influencerId })
    if (consignment) {
        return res.status(400).json({ success: false, error: 'Consignment already exists with this influencer...' })
    }
    const newconsignment = new Consignment({ brandId, influencerId, shoprequest: 1 },);
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
    // console.log(influencerId);

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

    }, 100)
}
exports.getInfluenerPendingRequest = async (req, res, next) => {
    const influencerId = req.userId;
    console.log(influencerId);
    const data = await Consignment.find({ influencerId, influencerrequest: 0 });
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

    }, 100)
}

exports.acceptBrandReq = async (req, res) => {
    const influencerId = req.userId;
    const brandId = req.body._id;
    console.log(req.body.email);
    console.log(req.body._id);

    const data = await Consignment.findOneAndUpdate(
        { influencerId, brandId },
        { $set: { shoprequest: 1 } },
        { new: true });
    if (!data) {
        return res.status(400).json({ success: false, error: "Something went wrong" })
    }
    // console.log(data);
    return res.status(200).json({ success: true, message: "Request accepted" })

}
exports.deleteBrandReq = async (req, res) => {
    const influencerId = req.userId;
    const brandId = req.body._id;
    // console.log("delete");
    // console.log(req.body.email);
    // console.log(req.body);

    const data = await Consignment.findOneAndDelete({ influencerId, brandId })
    // console.log(data);
    if (!data) {
        return res.status(400).json({ success: false, error: "Something went wrong" })
    }

    return res.status(200).json({ success: true, message: "Deleted request" })

}

exports.acceptInfluencerReq = async (req, res) => {
    const brandId = req.userId;
    const influencerId = req.body._id;
    console.log(req.body.email);
    console.log(req.body._id);

    const data = await Consignment.findOneAndUpdate(
        { influencerId, brandId },
        { $set: { influencerrequest: 1 } },
        { new: true });
    if (!data) {
        return res.status(400).json({ success: false, error: "Something went wrong" })
    }
    // console.log(data);
    return res.status(200).json({ success: true, message: "Request accepted" })

}
exports.deleteInfluencerReq = async (req, res) => {
    const brandId = req.userId;
    const influencerId = req.body._id;
    // console.log("delete");
    // console.log(req.body.email);
    // console.log(req.body);

    const data = await Consignment.findOneAndDelete({ influencerId, brandId })
    // console.log(data);
    if (!data) {
        return res.status(400).json({ success: false, error: "Something went wrong" })
    }

    return res.status(200).json({ success: true, message: "Deleted request" })

}
exports.getInfConsignment = async (req, res) => {
    const influencerId = req.userId;
    // console.log("get");
    // console.log(req.body);

    const data = await Consignment.find({ influencerId, shoprequest: 1, influencerrequest: 1, acceptstatus: false })
    // console.log(data);
    if (!data) {
        return res.status(400).json({ success: false, error: "Something went wrong" })
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
        return res.status(200).json({ success: true, message: "data sent...", data: array, data1: array2 })
    }, 100)

}

exports.getBrandPendingRequest = async (req, res) => {
    const brandId = req.userId;
    console.log(brandId);

    const data = await Consignment.find({ brandId, shoprequest: 0 });
    console.log(data);
    // array.push({ data: "hello world" })


    let array = new Array();
    data.map(async (element) => {
        const id = element.influencerId.toString();
        var data2 = await Influencer.findById(id).select("-tokens")
        // console.log(data2);
        array.push(data2)
    })
    // console.log("array data");
    setTimeout(() => {
        // console.log(array);
        return res.status(200).json({ success: true, data: array })

    },100)

}

exports.getInfluencerRequest = async (req, res) => {
    const brandId = req.userId;
    // console.log(brandId);

    const data = await Consignment.find({ brandId, influencerrequest: 0 });
// console.log(data);

    let array = new Array();
    data.map(async (element) => {
        const id = element.influencerId.toString();
        var data2 = await Influencer.findById(id).select("-tokens")
        // console.log(data2);
        array.push(data2)
    })
    // console.log("array data");
    setTimeout(() => {
        // console.log(array);
        return res.status(200).json({ success: true, data: array })

    }, 100)

}

exports.deleteBrandPendingRequest = async (req, res) => {
    const brandId = req.userId;
    const influencerId = req.body._id;
    // console.log("delete");
    // console.log(req.body.email);
    // console.log(req.body);

    const data = await Consignment.findOneAndDelete({ influencerId, brandId })
    console.log(data);
    if (!data) {
        return res.status(400).json({ success: false, error: "Something went wrong" })
    }

    return res.status(200).json({ success: true, message: "Deleted request" })

}

const handleData = async (data, array, array2) => {
    data.map(async (element) => {
        const id = element.influencerId.toString();
        var data2 = await Influencer.findById(id).select("-tokens")
        array2.push(element.Amount);
        array.push(data2);
    })

    let result = { array, array2 }
    return result;

}

exports.getBrandConsignment = async (req, res) => {
    const brandId = req.userId;
    // console.log("get");
    // console.log(req.body);

    const data = await Consignment.find({ brandId, shoprequest: 1, acceptstatus: false, influencerrequest: 1 })
    // console.log(data);
    if (!data) {
        return res.status(400).json({ success: false, error: "Something went wrong" })
    }
    let array = new Array();
    let array2 = new Array();


    data.map(async (element) => {
        const id = element.influencerId.toString();
        var data2 = await Influencer.findById(id).select("-tokens")
        // console.log(data2);
        array2.push(element.Amount);
        array.push(data2);
    })

    // let result =await handleData(data, array, array2);
    // console.log("array data");
    setTimeout(() => {
        return res.status(200).json({ success: true, message: "data sent...", data: array, data1: array2 })
    }, 100)

}

exports.paymentupdate = async (req, res) => {
    const brandId = req.userId;
    const influencerId = req.body.id;
    console.log(brandId);
    console.log(influencerId);

    const data = await Consignment.findOneAndUpdate(
        { influencerId, brandId },
        { $set: { paymentstatus: 1, acceptstatus: true } },
        { new: true });
    // console.log(data);
    if (!data) {
        return res.status(400).json({ success: false, error: "Something went wrong" })
    }
    return res.status(200).json({ success: true, message: "Request accepted" })

}

exports.getBrandCurrentConsignments = async (req, res) => {
    const brandId = req.userId;

    const data = await Consignment.find({ brandId, shoprequest: 1, acceptstatus: true })
    // console.log(data);
    if (!data) {
        return res.status(400).json({ success: false, error: "Something went wrong" })
    }
    let array = new Array();
    let array1 = new Array();
    let array2 = new Array();
    let array3 = new Array();
    let array4 = new Array();

    data.map(async (element) => {
        const id = element.influencerId.toString();
        var data2 = await Influencer.findById(id).select("-tokens")
        // console.log(data2);
        array1.push(element.Amount, element.paymentstatus);
        array2.push(element.startDate);
        array3.push(element.endDate);
        array4.push(element.paymentstatus);
        array.push(data2);
    })
    // console.log("array data");
    setTimeout(() => {
        return res.status(200).json({ success: true, message: "data sent...", data: array, data1: array1, data2: array2, data3: array3, data4: array4 })


    }, 100)

}

exports.withoutPayment = async (req, res) => {
    const brandId = req.userId;
    const influencerId = req.body.id;
    console.log(brandId);
    console.log(influencerId);

    const data = await Consignment.findOneAndUpdate(
        { influencerId, brandId },
        { $set: { acceptstatus: true } },
        { new: true });
    // console.log(data);
    if (!data) {
        return res.status(400).json({ success: false, error: "Something went wrong" })
    }
    return res.status(200).json({ success: true, message: "Proceed Without Payment" })

}

exports.getInfluencerCurrentConsignments = async (req, res) => {
    const influencerId = req.userId;

    const data = await Consignment.find({ influencerId, shoprequest: 1, acceptstatus: true })
    if (!data) {
        return res.status(400).json({ success: false, error: "Something went wrong" })
    }
    let array = new Array();
    let array1 = new Array();
    let array2 = new Array();
    let array3 = new Array();
    let array4 = new Array();

    data.map(async (element) => {
        const id = element.brandId.toString();
        var data2 = await Brand.findById(id).select("-tokens")
        // console.log(data2);
        array1.push(element.Amount, element.paymentstatus);
        array2.push(element.startDate);
        array3.push(element.endDate);
        array4.push(element.paymentstatus);
        array.push(data2);
    })
    // console.log("array data");
    setTimeout(() => {
        return res.status(200).json({ success: true, message: "data sent...", data: array, data1: array1, data2: array2, data3: array3, data4: array4 })
    }, 100)
}