import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ManagerHeader from './ManagerHeader'

const AddNewBrand = () => {

  const [profilecard, setprofilecard] = useState([{
    uname: "", shopName: "", brandType: "", phone: "", email: "", city: "", state: "", country: "",
    address: "", location: "", password: "", photo: ""
  }])
  const navigate = useNavigate();
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const callgetInfluencerPage = async () => {

    try {
      const res = await fetch("manager/getunverifiedbrand", {
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
          {item.uname}
          <button onClick={async (e) => {
            e.preventDefault()
            console.log("hello")
            try {
              const res = await fetch("manager/validatebrand", {
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
              navigate("/AddNewBrand");
              console.log(err)
            }
          }} className="text-3xl bg-white m-4">Add </button>
      

        </div>
      ))}
    </div>
  )
}

export default AddNewBrand