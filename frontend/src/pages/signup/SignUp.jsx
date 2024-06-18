import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'


const signUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password:'',
        confirmPassword:'',
        gender:''
    })
    const {loading , signup} = useSignup();

    const handleCheckBoxChange =(gender)=> {
            setInputs({...inputs , gender}) 
    }


    const handleSubmit  = async (e)=> {
        e.preventDefault();
        await signup(inputs);
    };


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
       <h1 className='text-3xl font-bold text-center text-gray-300 '>
                Signup 
                 <span className='text-green-400 font-extrabold'> SnapSync</span>
            </h1>

            <form onSubmit={handleSubmit}>
                {/* // Full  Name for SignUp */}
                <div>
                <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder='Enter Full Name' className= 'w-full input input-bordered h-10'
                        value={inputs.fullName}
                        onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                    />
                </div>
                    {/* // Username for SignUp */}
                <div>
                <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className= 'w-full input input-bordered h-10'
                        value={inputs.username}
                        onChange={(e) => setInputs({...inputs, username: e.target.value})}
                    />
                </div>

                        {/* // Password */}
                <div>
                <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter Password' className= 'w-full input input-bordered h-10'
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />

                </div>
                {/* // Confirm Password */}
                <div>
                <label className='label'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder='Confirm Password' className= 'w-full input input-bordered h-10'
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />

                </div>

                {/* // GENDER CHECKBOX GOES HERE  */}
                    <GenderCheckbox onCheckboxChange = {handleCheckBoxChange} selectedGender={inputs.gender}/>


                 <Link to={"/login"} className='text-sm hover:underline hover:text-green-400 mt-2 inline-block font-semibold'>
                    Already have an account ?  
                 </Link>

                 <div>
                <button className="btn btn-block mt-2 " 
                    disabled={loading}
                > {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                </button>
                </div>
            </form>
       </div>
    </div>
  )
}

export default signUp
