import google from "../Resources/google.svg"
import facebook from "../Resources/facebook.svg"
import github from "../Resources/github.svg"
import finger from "../Resources/fingerprint.png"
import phone from "../Resources/phone.png"
import mail from "../Resources/mail.png"
import user from "../Resources/user.png"
import AuthenInput from "./AuthenInput"
import { Link } from "react-router-dom"
import  SigninButton from "../Components/SigninButton"
import { useEffect, useState } from "react"
import firebase,{auth,provider} from "../FireBaseConfig"
import { signInWithPopup } from "firebase/auth"
import { ToastContainer, toast } from "react-toastify"
const Sgnup={
    OtherSgnup:{
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
        gap:"15px",
        display:"grid",
        justifyContent:"center",
        // flexDirection:"column ",
       
    },
    header:{
        width:"100%",
        display:"flex",
        gap:"10px",
        justifyContent:"center",
        marginBottom:"0",
        marginTop:"10px",
    }
}

export default function SignupFrame(){
    const [NAME,setname]=useState('');
    const [EMAIL,setemail]=useState('');
    const [PASSWORD,setpwd]=useState('');

    const [state,setState]=useState("");

    const submit =async(e)=>{
        e.preventDefault();
        try{
            const user=await firebase.auth().createUserWithEmailAndPassword(EMAIL,PASSWORD);
            if(user){
                alert("Account created successfully");
            }
        }
        catch(err){
            alert("firebase error");
            console.log("Firebase submit error "+err);
        }
    }

    function  handleClick(){
        signInWithPopup(auth,provider).then((data)=>{
        setState(data.user.email);
        localStorage.setItem("Email",data.user.email);
        });

    }

    useEffect(()=>{
        setState(localStorage.getItem("Email"))
    },[]);
    if(state){
        toast("Google signup success");
    }
    return (<div style={{color:"#47a9eb"}}>
        <ToastContainer/>
        <div style={Sgnup.inputs}>
            <h1 style={Sgnup.header}>Sign up</h1>
            <AuthenInput src={user} onChange={(e)=>setname(e.target.value)} placeholder="Username..." value={NAME}/>
            <AuthenInput src={mail} onChange={(e)=>setemail(e.target.value)} placeholder="Email..." type="email" value={EMAIL}/>
            <AuthenInput src={finger} onChange={(e)=>setpwd(e.target.value)} placeholder="Password..." type="password" value={PASSWORD}/>
           
            <SigninButton width="100%" height="50px" size="20px" text="Sign up" onClick={submit}/>
        </div>
       <div  style={Sgnup.OtherSgnup}>
       <h3 style={Sgnup.OtherSgnup}>Sign up with</h3>
       </div>
        <div style={Sgnup.OtherSgnup}>
        
                <Link onClick={handleClick}> <img src={google}style={Sgnup.icon} alt="google" /></Link>
               <Link> <img src={facebook} style={Sgnup.icon}alt="facebook" /></Link>
               <Link> <img src={github} style={Sgnup.icon} alt="github" /></Link>
               <Link to="/OtpLogin"> <img src={phone} style={Sgnup.icon} alt="phone" /></Link>
        

        </div>
        <div  style={Sgnup.OtherSgnup}>
            
       <h4 style={Sgnup.header}>Already have an account Login 
        <Link to="/login"> click here</Link>
        </h4>
       </div>
    </div>);
}