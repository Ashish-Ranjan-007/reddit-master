import { useState } from "react";
import "./SignUp.css";

const SignUp = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();


    }
    return (

        <div className="signup-container">
       
            <form className="sign-upform" onSubmit={handleSignUp}>
                <h2>Register</h2>
                <div className="container-item">
                <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="container-item">
                   <input type="text" value={email} placeholder="Set Username" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="container-item">
                    <input type="password" value={password} placeholder="Set password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="container-item"><button type="submit"> Register</button></div>
                <div className="container-item">
                    <p>Already registered ? <button onClick={()=> props.onSwitchForm('login')}>Login In</button></p>
                </div>
                
            </form>
        </div>
    );
};

export default SignUp;