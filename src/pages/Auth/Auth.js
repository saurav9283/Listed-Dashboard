import i from '../image/apple.png';
import im from '../image/search.png';
import '../Auth/Auth.css';
import {auth,provider} from "./firbase";
import {signInWithPopup} from "firebase/auth";
import {  useNavigate } from 'react-router-dom';


const Auth=()=>
{
    const navigate = useNavigate();
    const signInClick = async ()=>{
        await signInWithPopup(auth,provider).then((data)=>{
            localStorage.setItem("email",data.user.email)
            navigate('home/');
        })
    }
    
    function handelClick(){
        navigate("home/")
    }
    return(
        <> 
        <div className="all">
        <div className='left'>
            <p>Board.</p>
        </div>
        <div className='right-form'>
            
                <div className="cointainer">
                    
                <div className='sign'>
                    <h1>Sign In</h1>
                    <p>Sigh in to your account</p>
                   

                    <div className='ct'><button className='btn1' onClick={signInClick} ><img src={im} className='google' alt=""/>Sign in with Google</button>
                    <button className='btn2'><img src={i} className='apple' alt=""/><p>Sign in with Apple</p></button></div>
                    
                </div>
                <div className='form' onSubmit={handelClick}>
                    <form>
                    <p>Enter Email</p>
                    <input type="email" id='email' required placeholder='xyz@gmail.com'/>
                    <p>Password</p>
                    <input type="password" required id='password'/>
                    <a  href='/' className='forgot'>Forgot password?</a>
                    <button className='submit' type="submit" >Sign In</button>
                    </form>
                </div>
                <p className='ifnotaccount'>Don't have an account?<span>Register here</span></p>
                </div>
            
        </div>
        </div>
        </>
    )
}

export default Auth