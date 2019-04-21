const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


const performLogin = async (userName, password) => {
	try {
		var url = '/v1/login';
		var data = {userName: userName, password: password};
			let response = await fetch(url, {
				method: 'POST', // or 'PUT'
				body: JSON.stringify(data), // data can be `string` or {object}!
				headers:{
					'Content-Type': 'application/json'
				}
		});

		return response.ok;
	} catch (error) {
		console.log(error)
			return false
	}
}


const doLogin = (userName, password, callback) => {
	return async dispatch => {
		const res = await performLogin(userName, password)
		if(res) {
			dispatch({
				type: LOGIN_SUCCESS,
				userName
			})
			callback();
		}
	}
}



export {
	LOGIN_SUCCESS,
	doLogin
} 