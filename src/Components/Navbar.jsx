import Logo from "./Logo";
import LoginBtn from "./SigninButton";


const navbarStyles={
    navbar:{
        background:"#222542",
        padding:"20px 10px 20px 10px",
        display:"flex",
    }
};

export default function Navbar(probs) {
   console.log(probs.btn!=undefined);
    return (
    <nav className="navbar" style={navbarStyles.navbar}>
        <Logo />
        {(probs.btn=="true")?<LoginBtn  width="80px" text="Login"/>:""}
    </nav>);
}