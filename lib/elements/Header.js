

import React from 'react'

const Header = ({name}) => {

	const sayHi = (event) => {
		console.log(`${name}`)
	}

	return (
		<div>
			<a href="#"
				onClick={sayHi}>Say Hi
			</a>
		</div>
		)
	}

Header.propTypes = {
		name: React.PropTypes.string.isRequired
}

export default Header
