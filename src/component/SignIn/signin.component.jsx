import React from 'react';

import FormInput from '../Form-Input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle} from '../../firebase/firebase.utils';

import './signin.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = event => {
            const {value, name} = event.target;

            this.setState({ [name]: value })
    }
    handleSubmit = event => { 
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in With your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type= "email" 
                    value = {this.state.email} 
                    handleChange={this.handleChange}
                    label= "email"
                    required
                    />
                    
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label="password"
                    required
                    />
                    <div className='buttons'>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick = { signInWithGoogle } isGoogleSignIn>
                       {''}
                       Sign in with Google{''}
                       </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;