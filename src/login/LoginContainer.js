import LoginForm from './LoginForm';
import { doLogin } from './LoginAction';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';



const mapDispatchToProps = (dispatch, ownprops) => ({
    performLogin: (userName, password, callback) => {
        dispatch(doLogin(userName, password,callback))
    },
    onSubmit : ({userName, password}) => {
        if(!userName) {
          throw new SubmissionError({userName: 'Name is Mandatory'})
        } else if (!password) {
          throw new SubmissionError({password: 'Please enter password'})
        }
        dispatch(doLogin(userName,password,() =>{
          alert('Welcome TO Store')
          ownprops.history.push('./productlist')
        }))
      }
  })

  export default connect(null, mapDispatchToProps)(LoginForm);