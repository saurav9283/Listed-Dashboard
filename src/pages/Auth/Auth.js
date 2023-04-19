import i from '../image/apple.png';
// import im from './image/search.png';
import '../Auth/Auth.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import {  useNavigate } from 'react-router-dom';


const Auth=()=>
{

    const navigate = useNavigate();
    
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
                    <GoogleOAuthProvider clientId="257890360538-01muv9ki4pl1tb3rncmfrcvarrola3u5.apps.googleusercontent.com">
                      <GoogleLogin
                         onSuccess={credentialResponse => {
                         console.log(credentialResponse);
                        }}
                        onError={() => {
                        console.log('Login Failed');
                    }}
                />
                    </GoogleOAuthProvider>                    

                    {/* <button className='btn1' ><img src={im} className='google' alt=""/>Sign in with Google</button> */}
                    <button className='btn2'><img src={i} className='apple' alt=""/><p>Sign in with Apple</p></button>
                    
                </div>
                <div className='form'>
                    <form onSubmit={handelClick}>
                    <p>Enter Email</p>
                    <input type="email" id='email' required placeholder='xyz@gmail.com'/>
                    <p>Password</p>
                    <input type="password" required id='password'/>
                    <a  href='/' className='forgot'>Forgot password?</a>
                    <button className='submit' type="submit">Sign In</button>
                    </form>
                </div>
                </div>
            
        </div>
        </div>
        </>
    )
}

export default Auth