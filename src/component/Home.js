import React from 'react'
import Login from './Login'
import {useNavigate} from 'react-router-dom'


function Home() {
    let navigate=useNavigate()

    const handleLogout=()=>{
        localStorage.removeItem('user')
        navigate("/")
    }
    return (
        <>

        {localStorage.getItem('user')? <div className='container'>
                <div >
                    <h2>Welcom {localStorage.getItem('user')}</h2>
                </div><hr />
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in dignissimos veniam perspiciatis eaque consequatur quae laboriosam suscipit eum minima voluptatem amet neque reprehenderit, sequi quas repellat architecto numquam? Sit fuga consequuntur corrupti eaque.

                </div>
                <button className="btn btn-primary my-3" type="button" onClick={handleLogout}>Log Out</button>
            </div>: <Login/>}



           
        </>

        
        
        
        
        
        
        






            
      

    )
}

export default Home