import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ManagerHeader from './ManagerHeader'

const AddNewInfluencer = () => {

  const [profilecard, setprofilecard] = useState([{
    fname: "", lname: "", phone: "", email: "", city: "", state: "", country: "", password: "",
    age: "", instagram: "", instagramURL: "", instagramFollowers: "", instagramEngagementRate: "",
    facebook: "", facebookURL: "", facebookFollowers: "", facebookEngagementRate: "",
    twitter: "", twitterURL: "", twitterFollowers: "", twitterEngagementRate: "",
    photo: "", cat1: "fation", cat2: "study", cat3: "dance", discription: "hello i am there"
    // ,name:this.fname + " " + this.lname,
  }])
  const navigate = useNavigate();
  const sleep = ms => new Promise(r => setTimeout(r, ms));


  const callgetInfluencerPage = async () => {

    try {
      const res = await fetch("manager/getunverifiendInfluencer", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
        , credentials: "include"
      });

      const data = await res.json();
      // console.log(data.data)
      setprofilecard(data.data);
      console.log(profilecard)
    } catch (err) {
      //navigate("/BrandLogin");
      console.log(err)
    }
    // console.log(profilecard)
  }

  useEffect(() => {
    callgetInfluencerPage();
  }, [])

  return (
    <div>
      <ManagerHeader />

      {profilecard.length > 0 &&
      profilecard.map((item, index) => (
        <div>
          {item.fname + " " + item.lname}
          {/* <div type="text" className="" onClick={addinfluencer(item.email)} value="submit">

          </div> */}
          <button onClick={async (e) => {
            e.preventDefault()
            console.log("hello")
            try {
              const res = await fetch("manager/validateinfluencer", {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: item.email,
                }),
              });
              const data = await res.json();
              console.log( data)
              if(data.success == true){
                window.location.reload();
               }

            } catch (err) {
              navigate("/AddNewInfluencer");
              console.log(err)
            }
          }} className="text-3xl bg-white m-4">Add </button>
        </div>
      ))}


    </div>
  )
}

export default AddNewInfluencer