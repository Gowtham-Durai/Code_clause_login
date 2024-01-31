const logoStyles = {
    logo: {
        display:"grid",
        gridTemplateColumns:"30% 90%",
        width:"100px",
        gap:"10px",
        fontWeight:"bold",
        color:"white"
    },
    logoBg:{
        background:"#47a9eb",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:"5px",
       
    }
};

export default function Logo() {
    return(
        <div className="logo" style={logoStyles.logo}>
            <div className="logoBg" style={logoStyles.logoBg}>
                Gi
            </div>
            <div className="logoText">
                Resume <br /> Builder
            </div>
        </div>
    )
}