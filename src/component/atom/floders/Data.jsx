import React, { useRef } from 'react'
import axios from "axios"

 const Data = () => {
    const CheckData = useRef()
    function  mobileCheck() {
        const number = CheckData.current.value;
        (number.charAt(0)>=6 && number.charAt(0)<=9 && number.length===10)?HandleOtp(Number(number)):alert("Enter a valid number");
        
    }
    

    const HandleOtp = (abc) =>{
        const url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP"
        const body = {mobile:abc}

        const option={
            headers: {
                'content-Type': 'application/json',
            }
        }
        axios.post(url,body,option)
        .then(()=>{
            alert("otp send")
            CheckData.current.value=''

        })
        .catch((error)=> console.log(error))
        
    }
  return (
  <div> 
    <input type='number' ref={CheckData}/>   
        <button onClick={mobileCheck}> click</button>
        </div>

  
  )
}

export default Data;