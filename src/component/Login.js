import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Login() {
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = document.querySelector("#exampleInputEmail1").value
        const password = document.querySelector("#exampleInputPassword1").value
        console.log({ email, password })



        const response = await axios({
            method: "get",
            url: "http://localhost:8080/api/auth/login",
            params: { email, password }

        })
        console.log(response.data.success)
        if (response.data.success) {
            localStorage.setItem("user", email)
            localStorage.setItem('auth-token',response.token)
            navigate('/home')

            alert(response.data.msg)
        } else {

            document.querySelector("#exampleInputEmail1").value = ""
            document.querySelector("#exampleInputPassword1").value = ""
            navigate('/')
            alert(response.data.msg)


        }


    }

    const handleSignUp=()=>{
        navigate('/signUp')
    }





    return (
        <>

            
            <div class="container">
                <div class="row ">
                    <div class="col">
                        <img src="logo192.png" alt="" srcset="" />
                    </div>
                    <div class="col">
                        <div><h2>Sign In</h2></div>
                        <div><hr /></div>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group my-4">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group my-4">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                            </div>

                            <button type="submit" className="btn btn-success" >Sign In</button>
                            <small id="emailHelp" className="form-text text-muted mx-3">Already a user.</small>
                        </form>
                        
                        <button type="submit" className="btn btn-primary my-3" onClick={handleSignUp}>Sign Up</button>
                        <small id="emailHelp" className="form-text text-muted mx-3">For new user.</small>
                    </div>
                </div>
            </div>




            <div className="container">


            </div>
        </>
    );
}

export default Login