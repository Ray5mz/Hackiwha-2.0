import PurpleContainer from "../components/PurpleContainer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import LoginCont from "../components/Loginc.jsx"
function Login(){
    const navigate = useNavigate();

    return(
        <>
        <Header/>
        <PurpleContainer>
            <br></br>
            <h1 className="hero-title" id="login-t">Pass the <h4 className="Color-lt">Torch</h4>
            of the 
            <h4 className="Colorful2">Knowledge</h4></h1>
            
        </PurpleContainer>
        <LoginCont></LoginCont>
        

        </>
    );
}

export default Login;