import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/SignUp-Logo.png'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='SignUp'>

        <div className='Form'>

            <img src={Logo} alt="" />
            <h4>SIGN UP</h4>

            <form action="" method="post">
                <div className="Name">
                    <p>Full Name</p>
                    <input type="text" />
                </div>
                <div className="Email">
                    <p>Email</p>
                    <input type="text" />

                </div>
                <div className="Password">
                    <p>Password</p>
                    <input type="password" />
                    <h5>Password should not be less than 8 characters!</h5>

                </div>
                <div className="Password2">
                    <p>Repeat Password</p>
                    <input type="password" />
                    <div className='Check'>
                        <input type="Checkbox" />
                        <span>I agree to the Terms and Condition</span>
                    </div>

                </div>
                <button>Create Account</button>
                <div className="Login"> Already have an account?  
                    <Link to="/Log In">  Login </Link>
                </div>

            </form>
        </div>
      
    </div>
  )
}

export default SignUp
