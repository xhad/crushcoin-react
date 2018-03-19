import styled from 'styled-components'
import PropTypes from 'prop-types'


const css = {
	border: '1px solid #e3e3e3',
	borderRadius: '2px',
	margin: '10px',
	padding: '10px'
}

const Form = styled.form`
	border-radius: ${({ _borderRadius }) =>
		css.borderRadius
	};
	border: ${({ _border }) =>
		css.border
	};
	margin: ${({ _margin }) =>
		css.margin
	};
	padding: ${({ _padding }) =>
		css.padding
	};
`

Form.defaultProps = {
	_borderRadius: PropTypes.string,
	_border: PropTypes.string,
	_margin: PropTypes.string,
	_padding: PropTypes.string
}

export default Form