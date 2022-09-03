import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function SignUp() {
    let navigate = useNavigate();

    const handleSignUP = async (e) => {
        e.preventDefault();
        const firstName = document.querySelector("#firstName").value
        const lastName = document.querySelector("#lastName").value
        const email = document.querySelector("#exampleInputEmail1").value
        const password = document.querySelector("#exampleInputPassword1").value
        console.log({ firstName, lastName, email, password })



        const response = await axios({
            method: "post",
            url: "http://localhost:8080/api/auth/signUp",
            params: { firstName, lastName, email, password }

        })
        if (response.data.success) {

            navigate('/')
            alert(response.data.msg)
        } else {

            document.querySelector("#firstName").value = ""
            document.querySelector("#lastName").value = ""
            document.querySelector("#exampleInputEmail1").value = ""
            document.querySelector("#exampleInputPassword1").value = ""
            navigate('/')
            alert(response.data.msg)


        }


    }

    const handleSignIn=()=>{
        navigate("/")
    }



    return (

        <>
            <div className="container ">
                <div><h2>Sign Up</h2></div>
                <div><hr /></div>

                <form onSubmit={handleSignUP}>
                    <div className="form-group my-4">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter first name" required />

                    </div>
                    <div className="form- my-4">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Enter last name" required />

                    </div>
                    <div className="form-group my-4">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group my-4">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                    </div>

                    <button type="submit" className="btn btn-success" >Submit</button>
                    <small id="emailHelp" className="form-text text-muted mx-3">New User.</small>

                </form>

                <button type="button" className="btn btn-primary my-3" onClick={handleSignIn}>Sign In</button>
                <small id="emailHelp" className="form-text text-muted mx-3">Already a user.</small>
            </div>
        </>

    )
}

export default SignUp