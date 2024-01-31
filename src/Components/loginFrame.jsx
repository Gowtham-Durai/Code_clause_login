import google from "../Resources/google.svg"
import facebook from "../Resources/facebook.svg"
import github from "../Resources/github.svg"
import finger from "../Resources/fingerprint.png"
import mail from "../Resources/mail.png"
import phone from "../Resources/phone.png"
import AuthenInput from "./AuthenInput"
import { Link } from "react-router-dom"
import  SigninButton from "../Components/SigninButton"
import firebase from "../FireBaseConfig"
import { useState } from "react"
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
       
    }
}

export default function LoginFrame(){
    const [EMAIL,setemail]=useState('');
    const [PASSWORD,setpwd]=useState('');
    const submit =async(e)=>{
        e.preventDefault();
        try{
            const user=await firebase.auth().signInWithEmailAndPassword(EMAIL,PASSWORD);
            if(user){
                alert("Account Logined successfully");
            }
        }
        catch(err){
            alert("firebase error");
            console.log("Firebase submit error "+err);
        }
    }
    return (<div style={{color:"#47a9eb"}}>
        <div style={Login.inputs}>
            <h1 style={Login.OtherLogin}>Login</h1>
            <AuthenInput src={mail} onChange={(e)=>setemail(e.target.value)} placeholder="Email..." type="email" value={EMAIL}/>
            <AuthenInput src={finger} onChange={(e)=>setpwd(e.target.value)} placeholder="Password..." type="password" value={PASSWORD}/>
            <SigninButton width="100%" height="50px" size="20px" text="Login" onClick={submit}/>
        </div>
       <div  style={Login.OtherLogin}>
       <h3 >Continue on</h3>
       </div>
        <div style={Login.OtherLogin}>
        
               <Link> <img src={google}style={Login.icon} alt="google" /></Link>
               <Link> <img src={facebook} style={Login.icon}alt="facebook" /></Link>
               <Link> <img src={github} style={Login.icon} alt="github" /></Link>
               <Link to="/OtpLogin"><img src={phone} style={Login.icon} alt="phone" /></Link>
        
        </div>
        
        <div  style={Login.OtherLogin}>
            
       <h4 >Doesn't have an account Register 
        <Link to="/signup">click here</Link>
        </h4>
       </div>
    </div>);
}