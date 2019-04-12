import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';


class LoginForm extends Component {

  // renderField = ({input, label, type, meta:{touched,error}}) => (
  //   <div>
  //     <label>{label}</label>
  //     <div>
  //       <input {...input} placeholder={label} type={type}/>
  //       {touched && error && <span>{error}</span>}
  //     </div>
  //   </div>
  // )

  render() {
    return (
      <form className='login-form'>
        <div>
          <label>User Name</label>
        </div>
        <Field
            name='userName'
            component='input'
            type='text'
            placeholder='User Name'
        /><br/><br/>
        <div>
          <label>Password</label>
        </div>
        <Field
          name='password'
          component='input'
          type='password'
          placeholder='Enter Password'
          label='s'
        /><br/><br/>
        <button 
          type='submit'
          label='submit'
        >Submit</button>
      </form>
    )
  }
}

const mapStateToProps = (state, ownprops) => {
  console.log('state',state,'ownprops',ownprops);
  const Login = state.Login;
  return {
    userName: Login.userName,
    password: LoginForm.password
  }
}

LoginForm = reduxForm({
  form: 'Login',
  fields:['name'],
  enableReinitialize : true
})(LoginForm)

export default connect(mapStateToProps)(LoginForm);