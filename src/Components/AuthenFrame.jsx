import loginBg from '../Resources/login-bg.jpg';
import LoginFrame from './loginFrame';
import SignupFrame from './signupFrame';
import LoginOtpFrame from "./LoginOtpFrame"
import "../Resources/lilitaFont.css";

const Authendicate={
    frame:{
        backgroundColor:"#363a61",
        width:"100%",
        height:"88dvh",
        display:"flex",
        justifyContent:"center",
        alignItems:"Center",
    },
    authen:{
        width:"78dvw",
        height:"90%",
        backgroundColor:"white",
        borderRadius:"20px",
        display:"grid",
        gridTemplateColumns:"0.4fr 0.6fr",
    },
    
    loginBg:{
        display:"flex",
        padding:"10px",
        borderTopLeftRadius:"20px",
        borderBottomLeftRadius:"20px",
        fontFamily: "'Lilita One', sans-serif",
        textAlign:"center",
        alignItems:"center",
        backgroundImage:`url(${loginBg})`,
        
    },
    text:{
        fontSize:"80px",
        background:"linear-gradient(#43BAE8, #134F81)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },

}

function frame(f){
    if(f=="login") return <LoginFrame/>
    else if (f=="otp") return <LoginOtpFrame/>
    else return <SignupFrame/>
}

export default function AuthenFrame(props){

    return (<>
        <div className="frame" style={Authendicate.frame} >
            <div className="authendicate" style={Authendicate.authen}>
                <div style={Authendicate.loginBg} >
                   <h1 style={Authendicate.text}>
                   Welcome Back
                   </h1>
                </div>              
                <div>
                <form action="">
                    {frame(props.frame)}
                </form></div>
            </div>
        </div>    
    </>);
}