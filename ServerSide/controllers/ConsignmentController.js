const Brand = require("../models/brand");
const Influencer = require("../models/influencers");
const Consignment = require("../models/consignment");
const mongoose = require("mongoose");
const { response } = require("express");
const { ObjectId } = mongoose.Schema.Types;

exports.createConsignment = async (req, res, next) => {
  const brandId = req.userId;
  const influencerId = req.body.influencerId;

  const consignment = await Consignment.findOne({
    brandId: brandId,
    influencerId: influencerId,
  });
  if (consignment) {
    return res.status(400).json({
      success: false,
      error: "Consignment already exists with this influencer...",
    });
  }
  const newconsignment = new Consignment({
    brandId,
    influencerId,
    influencerrequest: 1,
    Date: new Date().toLocaleDateString(),
  });
  try {
    newconsignment.save();
    return res.status(200).json({
      success: true,
      data: { brandId, influencerId },
      message: "Request sent to influencer",
    });
  } catch (e) {
    return res.status(422).json({
      success: false,
      error: "Somthing went wrong",
    });
  }
};

exports.createConsignmentInf = async (req, res, next) => {
  const influencerId = req.userId;
  const brandId = req.body.brandId;

  const consignment = await Consignment.findOne({
    brandId: brandId,
    influencerId: influencerId,
  });
  if (consignment) {
    return res.status(400).json({
      success: false,
      error: "Consignment already exists with this Brand...",
    });
  }
  const newconsignment = new Consignment({
    brandId,
    influencerId,
    shoprequest: 1,
    Date: new Date().toLocaleDateString(),
  });
  try {
    newconsignment.save();
    return res.status(200).json({
      success: true,
      data: { brandId, influencerId },
      message: "Request sent to Brand",
    });
  } catch (e) {
    return res.status(422).json({
      success: false,
      error: "Somthing went wrong",
    });
  }
};

exports.getBrandRequest = async (req, res, next) => {
  const influencerId = req.userId;
  // console.log(influencerId);

  const data = await Consignment.find({ influencerId, shoprequest: 0 });

  // array.push({ data: "hello world" })

  let array = new Array();
  const promises = data.map(async (element) => {
    const id = element.brandId.toString();
    var data2 = await Brand.findById(id).select("-tokens");
    // console.log(data2);
    array.push(data2);
  });
  // console.log("array data");
  Promise.all(promises).then(() => {
    return res.status(200).json({ success: true, data: array });
  })
};

exports.getInfluenerPendingRequest = async (req, res, next) => {
  const influencerId = req.userId;
  // console.log(influencerId);
  // const data = await Consignment.find({ influencerId, influencerrequest: 0 });
  // // array.push({ data: "hello world" })
  let array = new Array();

  const cons = await Consignment.find({ influencerId, influencerrequest: 0 }).select("-tokens");

  const promises = cons.map(async (element) => {
    const id = element.brandId.toString()
    const data = await Brand.findById(id).select("-tokens");
    array.push(data);
  })
  Promise.all(promises).then(() => {

    // console.log(array);
    return res
      .status(200)
      .json({ success: true, message: "data sent...", data: array });
  })
};

exports.acceptBrandReq = async (req, res) => {
  const influencerId = req.userId;
  const brandId = req.body._id;
  // console.log(req.body.email);
  // console.log(req.body._id);

  const data = await Consignment.findOneAndUpdate(
    { influencerId, brandId },
    { $set: { shoprequest: 1 } },
    { new: true }
  );
  if (!data) {
    return res
      .status(400)
      .json({ success: false, error: "Something went wrong" });
  }
  // console.log(data);
  return res.status(200).json({ success: true, message: "Request accepted" });
};
exports.deleteBrandReq = async (req, res) => {
  const influencerId = req.userId;
  const brandId = req.body._id;
  // console.log("delete");
  // console.log(req.body.email);
  // console.log(req.body);

  const data = await Consignment.findOneAndDelete({ influencerId, brandId });
  // console.log(data);
  if (!data) {
    return res
      .status(400)
      .json({ success: false, error: "Something went wrong" });
  }

  return res.status(200).json({ success: true, message: "Request  Removed successfully!!" });
};

exports.acceptInfluencerReq = async (req, res) => {
  const brandId = req.userId;
  const influencerId = req.body._id;
  // console.log(req.body.email);
  // console.log(req.body._id);

  const data = await Consignment.findOneAndUpdate(
    { influencerId, brandId },
    { $set: { influencerrequest: 1 } },
    { new: true }
  );
  if (!data) {
    return res
      .status(400)
      .json({ success: false, error: "Something went wrong" });
  }
  // console.log(data);
  return res.status(200).json({ success: true, message: "Request accepted successfully!!" });
};
exports.deleteInfluencerReq = async (req, res) => {
  const brandId = req.userId;
  const influencerId = req.body._id;
  // console.log("delete");
  // console.log(req.body.email);
  // console.log(req.body);

  const data = await Consignment.findOneAndDelete({ influencerId, brandId });
  // console.log(data);
  if (!data) {
    return res
      .status(400)
      .json({ success: false, error: "Something went wrong" });
  }

  return res.status(200).json({ success: true, message: "Request Deleted successfully!!!" });
};


exports.getInfConsignment = async (req, res) => {
  const influencerId = req.userId;

  // console.log(req.body);
  try {
    let array = new Array();
    let array2 = new Array();
    const data = await Consignment.find({
      influencerId,
      shoprequest: 1,
      influencerrequest: 1,
      acceptstatus: false,
    })
    // console.log("getInfConsignmentdata",data);
    const promises = data.map(async (element) => {
      const id = element.brandId;
      const data1 = await Brand.findById(id).select("-tokens");
      // console.log(data1);
      array2.push(element)
      array.push(data1)
    })
    Promise.all(promises).then(() => {
      // console.log(array2);
      return res
        .status(200)
        .json({ success: true, message: "data sent...", data: array, cons: array2 });
    })

  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }

};

exports.getBrandPendingRequest = async (req, res) => {
  const brandId = req.userId;
  // console.log(brandId);

  const data = await Consignment.find({ brandId, shoprequest: 0 });
  // console.log(data);
  // array.push({ data: "hello world" })

  let array = new Array();
  const promises = data.map(async (element) => {
    const id = element.influencerId.toString();
    var data2 = await Influencer.findById(id).select("-tokens");
    // console.log(data2);
    array.push(data2);
  });
  // console.log("array data");
  Promise.all(promises).then(() => {

    // console.log(array);
    return res.status(200).json({ success: true, data: array });
  })
  // setTimeout(() => {
  // }, 1000);
};

exports.getInfluencerRequest = async (req, res) => {
  const brandId = req.userId;
  // console.log(brandId);

  const data = await Consignment.find({ brandId, influencerrequest: 0 });
  // console.log(data);

  let array = new Array();
  const promises = data.map(async (element) => {
    const id = element.influencerId.toString();
    var data2 = await Influencer.findById(id).select("-tokens");
    // console.log(data2);
    array.push(data2);
  });
  // console.log("array data");
  Promise.all(promises).then(() => {
    // console.log(array);
    return res.status(200).json({ success: true, data: array });
  })
  // setTimeout(() => {
  // }, 1000);
};

exports.deleteBrandPendingRequest = async (req, res) => {
  const brandId = req.userId;
  const influencerId = req.body._id;
  // console.log("delete");
  // console.log(req.body.email);
  // console.log(req.body);

  const data = await Consignment.findOneAndDelete({ influencerId, brandId });
  // console.log(data);
  if (!data) {
    return res
      .status(400)
      .json({ success: false, error: "Something went wrong" });
  }

  return res.status(200).json({ success: true, message: "Request Removed successfully!!" });
};

// const handleData = async (data, array, array2) => {
//   data.map(async (element) => {
//     const id = element.influencerId.toString();
//     var data2 = await Influencer.findById(id).select("-tokens");
//     array2.push(element.Amount);
//     array.push(data2);
//   });

//   let result = { array, array2 };
//   return result;
// };

exports.getBrandConsignment = async (req, res) => {
  const brandId = req.userId;
  // console.log("get");
  // console.log(req.body);

  const data = await Consignment.find({
    brandId,
    shoprequest: 1,
    acceptstatus: false,
    influencerrequest: 1,
  });
  // console.log(data);
  if (!data) {
    return res
      .status(400)
      .json({ success: false, error: "Something went wrong" });
  }
  let array = new Array();
  let array2 = new Array();

  const promises = data.map(async (element) => {
    const id = element.influencerId.toString();
    var data2 = await Influencer.findById(id).select("-tokens");
    // console.log(data2);
    array2.push(element);
    array.push(data2);
  });

  // let result =await handleData(data, array, array2);
  // console.log("array data");
  // setTimeout(() => {
  Promise.all(promises).then(() => {


    return res.status(200).json({
      success: true,
      message: "data sent",
      data: array,
      cons: array2,
    });
  })
  // }, 1000);
};

exports.paymentupdate = async (req, res) => {
  const brandId = req.userId;
  const influencerId = req.body.id;
  // console.log(brandId);
  // console.log(influencerId);

  const data = await Consignment.findOneAndUpdate(
    { influencerId, brandId },
    { $set: { paymentstatus: 1, acceptstatus: true } },
    { new: true }
  );
  // console.log(data);
  if (!data) {
    return res
      .status(400)
      .json({ success: false, error: "Something went wrong" });
  }
  return res.status(200).json({ success: true, message: "Request accepted" });
};

exports.getBrandCurrentConsignments = async (req, res) => {
  const brandId = req.userId;

  const data = await Consignment.find({
    brandId,
    shoprequest: 1,
    acceptstatus: true,
  });
  // console.log(data);
  if (!data) {
    return res
      .status(400)
      .json({ success: false, error: "Something went wrong" });
  }
  let array = new Array();

  const promises = data.map(async (element) => {
    const id = element.influencerId.toString();
    var data2 = await Influencer.findById(id).select("-tokens");
    // console.log(data2);
    array.push(data2);
  });
  // console.log("array data");
  Promise.all(promises).then(() => {
    return res.status(200).json({
      success: true,
      message: "data sent...",
      data: array,
      brandId: brandId
    });

  })
};

exports.acceptAgreement = async (req, res) => {
  const brandId = req.userId;
  const influencerId = req.body.inflencerId;
  // console.log(brandId);
  // console.log(influencerId);

  const data = await Consignment.findOneAndUpdate(
    { influencerId, brandId },
    { $set: { acceptstatus: true, detailRequest: 1, detailSend: 1 } },
    { new: true }
  );
  // console.log(data);
  if (!data) {
    return res
      .status(400)
      .json({ success: false, error: "Something went wrong" });
  }
  return res
    .status(200)
    .json({ success: true, message: "Agreement Accepted!!!" });
};

exports.AskAgreementDetails = async (req, res) => {
  const brandId = req.userId;
  const influencerId = req.body.inflencerId;
  // console.log(req.body\);
  // console.log(influencerId);

  const data = await Consignment.findOneAndUpdate(
    { influencerId, brandId },
    { $set: { AgreementDetail: req.body.formData, detailRequest: 1, } },
    { new: true }
  );

  // console.log(data);
  if (!data) {
    return res
      .status(400)
      .json({ success: false, error: "Something went wrong" });
  }
  return res
    .status(200)
    .json({ success: true, message: "Requested for agreement details..." });
};
exports.AgreementDetails = async (req, res) => {
  const influencerId = req.userId;
  const brandId = req.body.brandId;
  // console.log(brandId);
  // console.log(influencerId);

  const data = await Consignment.findOneAndUpdate(
    { influencerId, brandId },
    { $set: { AgreementDetail: req.body.formData, detailSend: 1 } },
    { new: true }
  );

  if (!data) {
    return res
      .status(400)
      .json({ success: false, error: "Something went wrong" });
  }
  return res
    .status(200)
    .json({ success: true, message: "Agreement details sent..." });
};

exports.getInfluencerCurrentConsignments = async (req, res) => {
  const influencerId = req.userId;

  const data = await Consignment.find({
    influencerId,
    shoprequest: 1,
    acceptstatus: true,
  });
  if (!data) {
    return res
      .status(400)
      .json({ success: false, error: "Something went wrong" });
  }
  let array = new Array();
  let array2 = new Array();
  const promises = data.map(async (element) => {
    const id = element.brandId.toString();
    var data2 = await Brand.findById(id).select("-tokens");
    // console.log(data2);
    array2.push(element)
    array.push(data2);
  });
  // console.log("array data");

  Promise.all(promises).then(() => {

    return res.status(200).json({
      success: true,
      message: "data sent",
      data: array,
      cons: array2
    });
  })

};

exports.feedBack = async (req, res) => {

  const { influencerId, review, rating } = req.body;
  const brandId = req.userId
  // console.log(req.body);
  try {

    const cons = await Consignment
      .findOneAndUpdate({ brandId, influencerId },
        { $set: { review: review, rating: rating } },
        { new: true }
      )
    await Influencer.findById(influencerId).select("-tokens").then(async (doc1) => {
      doc1.rating = doc1.rating + rating;
      doc1.count = doc1.count + 1;
      doc1.feedbacks.push({ brandId: brandId, review: review, rating: rating })
      await doc1.save();
      // console.log(doc1);
    });

    return res.status(200).json({ success: true, message: "feedback saved successfully", data: cons })
  } catch (err) {
    return res.status(422).json({ success: false, error: "somthing went wronge while giving feedback" })
  }
  // Promise.all(promises).then(()=>{
  // })
  // console.log(cons);

}