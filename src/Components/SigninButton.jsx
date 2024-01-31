import { Link } from "react-router-dom";



export default function LoginBtn(props) {
    const signupbtn={
        marginLeft:"auto",
        backgroundColor:"#47a9eb",
        borderRadius:"20px",
        width:props.width,
        height:props.height,
        fontSize:props.size,
        border:"none",
        color:"white",
        fontWeight:"bold",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textDecoration:"none",
    };
    return (
        // <button style={signupbtn} type="submit">
            <Link  to="/login" style={signupbtn} onClick={props.onClick}>{props.text}</Link>
            
        // </button>
    )
}