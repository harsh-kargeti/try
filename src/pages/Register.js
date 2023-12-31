import { useState } from "react";
import {Logo, FormRow} from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

function Register() {
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(`${name}:${value}`);

        setValues({ ...values, [name]: value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        const {name, email, password, isMember} = values;
        if(!email || !password || (!isMember && !name)){
            toast.error('Please fill out all fields');
        }
    }

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember});
        console.log(values.isMember);
    }

    return(
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                
                {!values.isMember && (
                <FormRow 
                    type= 'text' 
                    name="name" 
                    value={values.name}
                    handleChange={handleChange}
                />
                )}
                <FormRow 
                    type= 'email' 
                    name="email" 
                    value={values.email}
                    handleChange={handleChange}
                />

                <FormRow type= 'password' 
                    name="password" 
                    value={values.password}
                    handleChange={handleChange}
                />

                <button type="submit" className="btn btn-block">
                    submit
                </button>

                <p>

                    <button type="button" onClick={toggleMember}>
                      wfd
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register;