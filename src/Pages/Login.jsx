import AuthenFrame from "../Components/AuthenFrame"
import  Navbar from "../Components/Navbar"


export default function Login(props){
return (
    <>
    <Navbar />
        <AuthenFrame frame={props.type}/>
    </>
)
};

