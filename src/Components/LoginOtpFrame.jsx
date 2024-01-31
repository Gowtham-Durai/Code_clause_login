
import phone from "../Resources/bphone.png"
import AuthenInput from "./AuthenInput"
import  SigninButton from "../Components/SigninButton"
import OTPInput from "otp-input-react"
import { useState } from "react"
import {  RecaptchaVerifier } from "firebase/auth";
import { auth } from "../FireBaseConfig"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  signInWithPhoneNumber } from "firebase/auth";
const Login={
    OtherLogin:{
        width:"100%",
        display:"flex",
        gap:"10px",
        justifyContent:"center",

    },
    icon:{
        height:"70px",
        width:"70px",
       
    },
    container:{
        display:"flex",
        flexDirection:"column",
        padding:"30px",
    },
    inputs:{
     
        width:"100%",
        gap:"20px",
        display:"grid",
        justifyContent:"center",
        // flexDirection:"column ",
       
    },
    otp:{
        justifyContent:"center",
        color:"#47a9eb",
    
    }

}


export default function LoginFrame(){
    const [otp,setOtp]=useState("");
    const [user,setUser]=useState(null);
    function onsignup(e){
        e.preventDefault();
    onCaptchVerify();
    const appVerifier=window.recaptchaVerifier;
    const ph="9841591525"
    const formatPh="+91"+ph;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
    
        window.confirmationResult = confirmationResult;
        toast("Otp sended successfully");
            }).catch((error) => {
                console.log(error);
            });
    }
    function onCaptchVerify(){
        if(!window.recaptchaVerifier){
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    onsignup();
                },
                'expired-callback': () => {
                    toast("Otp expired");
                }
              });
        }
        if(user){
            toast("login successful");
        }
    }

    function onotpverify(e){
        e.preventDefault();
        window.confirmationResult.confirm(otp).then(async(res)=>{
             console.log(res);
             setUser(res.user);
            toast("otp success");
            

        })
        .catch((err)=>{
            console.log(err);
        })

        
    }
    return (<div style={{color:"#47a9eb"}} >
        <div style={Login.inputs}>
        <ToastContainer/>
            <h1 style={Login.OtherLogin}>Login with OTP </h1>
            <AuthenInput src={phone} placeholder="phone no..." type="phone"/>
         
            <SigninButton onClick={(e)=>onsignup(e)} width="100%" height="50px" size="20px" text="Verify"/>
            <OTPInput style={Login.otp} className="otp" OTPLength={6}value={otp} onChange={setOtp} secure={true} otpType="number" disabled={false} autoFocus ></OTPInput>
            <div id="recaptcha-container"></div>
            <button onClick={(e) => onotpverify(e)}>verify otp</button>
        </div>
    
       
        
        <div  style={Login.OtherLogin}>
            
       <h4 >Doesn't have an account Register 
        <a href="../demo"> click here</a>
        </h4>
       </div>
    </div>);
}