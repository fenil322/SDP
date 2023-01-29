import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const BrandDetails = () => {

    const [brandData, setbrandData] = useState({
        uname: "", shopName: "", brandType: "",
        phone: "", email: "", city: "", state: "", country: "",
        address: "", location: "", password: "", photo1: "", photo2: ""
    });

    const location = useLocation();
    const consollog = () => {
        console.log(location);
        setbrandData(location.state);
        // console.log(brandData);
    }
    useEffect(() => {
        consollog()
    }, [])

    return (
        <div>
            <div>
                <h3>user:- {brandData.uname} </h3>
                <h3>shopname:- {brandData.shopName} </h3>
                <h3>brandType:- {brandData.brandType}</h3>
                <h3>city:- {brandData.city}</h3>
                <h3>state:- {brandData.state}</h3>
                <h3>address:- {brandData.address}</h3>
            </div>
        </div>
    )
}

export default BrandDetails