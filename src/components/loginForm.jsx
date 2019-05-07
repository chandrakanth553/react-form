import React from 'react';
import Form from './form';
import Joi from 'joi-browser';

class LoginForm extends Form {
    state = { 
        data: { username: '', password: '' },
        errors: {} 
    }

    schema = {
      username: Joi.string().required().label('Username'),
      password: Joi.string().required().label('Password')
    }

    render() {
        return ( 
            <div className='row'>
                <div className='col-12'>
                  {this.renderInput('username', 'Username')}
                  {this.renderInput('password', 'Password', 'password')}
                  {this.renderButton("Submit")}
                </div>
            </div>
         );
    }

    doSubmit = () => {

    }
}
 
export default LoginForm;