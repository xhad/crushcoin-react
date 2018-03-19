import React from 'react'
import PropTypes from 'prop-types'

const styles = {

}
const Login = ({Form, Input, Label, Group, Button, handleLogin}) => {

	let email
	let password

	/* flags for password test */
	let n
	let u
	let s
	let l
	let validPass 
	let validEmail

	function validateEmail(e) {
		console.log(e)
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (re.test(e)) {
			console.log('ok')
			email = e
		}
	}

	function validatePassword(p) {

		const num = /\d/
		const upper = /\w*[A-Z]\w*/g
		const special = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/
		
		if (!n && num.test(p)) {
			n = true
			console.log('number ok ', n)
		} else if (n && !num.test(p)) {
			n = false
		}
		
		if (!u && upper.test(p)) {
			u = true
			console.log('uppercase ok ', u)
		} else if (u && !upper.test(p)) {
			u = false
		}
		
		if (!s && special.test(p)) {
			s = true
			console.log('special char ok ', s)
		} else if (s && !special.test(p)) {
			s = false
		}
		
		if (!l && p.length > 8) {
			l = true
			console.log('length is ok', l)
		} else if (l && p.length < 8) {
			l = false
		}
		
		if (n && u && s && l) {
			password = p
			console.log('ok')
		} else {

		}
	}

	function validateCred(object) {
		let p = object.password
		let e = object.email
		if (e && p) {
			handleLogin(object)
		} else if (e && !p) {
			console.log('password is invalid')
		} else if (p && !e) {
			console.log('email is invalid')
		} else {
			console.log('invalid credentials')
		}
	}

	return (
		<Form>
			<Label>Email</Label>
			<Input
				onKeyUp={(e) => validateEmail(e.target.value)}/>
			<Label>Password</Label>
			<Input
				type={'password'}
				onKeyUp={(p) => validatePassword(p.target.value)}/>
			<Group>
				<Button
					onClick={() => validateCred({email, password})}>
					Login
				</Button>
			</Group>
		</Form>
	)
}

Login.propTypes = {
	Form: PropTypes.func,
	Input: PropTypes.func,
	Label: PropTypes.func,
	Button: PropTypes.func,
	handleLogin: PropTypes.func
}

export default Login