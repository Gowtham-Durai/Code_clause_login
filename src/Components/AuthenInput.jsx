
const Authendicate={
    img:{
        height:"30px",
       
    },
    Container:{
        width:"90%",
        height:"51px",
        display:"flex",
        gap:"10px",
        justifyContent:"center",
        alignItems:"center",    
        border:"1px solid grey",
        borderRadius:"30px",
        padding:"3px 20px 3px 20px",
        
    },
    input:{
        width:"100%",
        outline:"none",
        border:"none",
        height:"50px",
        fontSize:"20px",
        color:"#47a9eb",
        caretColor:"#47a9eb",
    }
}

export default function AuthenInput(props){
    return (<div style={Authendicate.Container} >
            <img src={props.src} alt="no img" style={Authendicate.img}/>
            <input type={(props.type!="undefind"?props.type:"text")} value={props.value} onChange={props.onChange} style={Authendicate.input} placeholder={props.placeholder}/>
    </div>);
}