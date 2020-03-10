import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (event) => {
        const {value, name} = event.target
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I Already Have an Account</h2>
                <span>Sign In With Your Email and Password</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                    name="email" 
                    type="email"  
                    value={this.state.email} 
                    label="Email"
                    handleChange={this.handleChange}
                    required/>
                    

                    <FormInput 
                    name="password" 
                    type="password"
                    label="Password"
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    required/>
                    <CustomButton type="submit"  >Sign in </CustomButton>            
                       </form>
            </div>
        )
    }


}
export default SignIn;
