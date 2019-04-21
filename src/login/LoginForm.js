import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {

 
   renderField = ({input, label, type, meta:{touched,error}, placeholder}) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={placeholder} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

  render() {
    const {handleSubmit, onSubmit} = this.props;
    return (
      <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
        <Field
            name='userName'
            component={this.renderField}
            type='text'
            placeholder='User Name'
            label='User Name'
        /><br/><br/>
        <Field
          name='password'
          component={this.renderField}
          type='password'
          placeholder='Enter Password'
          label='Password'
        /><br/><br/>
        <button 
          type='submit'
          label='submit'
        >Submit</button>
      </form>
    )
  }
}

//export default LoginForm is same

export default reduxForm({
  form: 'Login',
  fields:['name'],
  enableReinitialize : true
})(LoginForm)


