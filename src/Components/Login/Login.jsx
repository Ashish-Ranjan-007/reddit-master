import './Login.css'
import { useState} from "react";
import { userData } from '../LocalStorage/Userdata';

// const Login = (props) => {
//     return (
//         <div className="login-form">
//             <h2>Login</h2>
//             <div className='login-container'>
//                 <form onSubmit={onLoginForm}>
//                 <input value={email} type="email" placeholder="enter your email" />
//                 <input value={password} type="password" placeholder="password" />
//                 <button type='submit'>Login</button>
//                 <p>New to Reddit ? <button onClick={()=> props.onSwitchForm('signup')}>SignUp</button></p>
//                 </form>
//             </div>
//         </div>
//     );
// };


// const [currentForm, setCurrentForm] = useState('login');

// const toggleForm =(formName) =>{
//   setCurrentForm(formName);
// }



const Login = (props) => {
    const [user,setUser] = useState();
    const [pass, setPass] = useState();

    function onchange(e){
        setUser(e.target.username);
        setPass(e.target.password);
        console.log(user+"---"+pass);

    }
    function onLoginForm(e){
       console.log("user login")
       if(userData[0].username===user && userData[0].pass===pass){
        console.log('User valid')

       }
       else{
        console.log("error")
       }
    
    
    }


    
    return (
        <div className="login-form">
            
            <div className='login-container'>
                <h2>Login</h2>
                <form onSubmit={onLoginForm}>
                    <div className="input-div">
                        <input name="username" type="text" placeholder="Enter your Username" onChange={onchange} />
                        <input name="password" type="password" placeholder="Password" onChange={onchange}/>
                        <div className='login-button'>
                        <button type='submit'>Login</button>
                    </div>
                    </div>
                    
                </form>
                    <div className="signup">
                        <span>New to Reddit ?</span>
                        <button onClick={()=> props.onSwitchForm('signup')}>SignUp</button>
                    </div>               
                
                
            </div>
        </div>
    );
};




{/* <button >Login</button> */}
{/* <Upvote /> */}

//   currentForm==='login'?<Login onSwitchForm={toggleForm}/>:<SignUp onSwitchForm={toggleForm}/>
// }
// </div>

export default Login;