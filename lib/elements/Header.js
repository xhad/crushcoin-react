import styled from 'styled-components'
import PropTypes from 'prop-types'

const css = {
	border: '1px solid #e3e3e3',
	borderRadius: '2px',
	padding: '5px'
}

const Header = styled.div`

	border: ${({ _border }) =>
		css.border
	};
	border-radius: ${({ _borderRadius }) =>
		css.borderRadius
	};
	padding: ${({ _padding }) =>
		css.padding
	};
`

Header.defaultProps = {
	_borderRadius: PropTypes.string,
	_border: PropTypes.string,
	_padding: PropTypes.string
}

export default Header