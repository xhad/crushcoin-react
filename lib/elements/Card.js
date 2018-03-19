import styled from 'styled-components'
import PropTypes from 'prop-types'

const css = {
	_border: '1px solid #e3e3e3',
	_borderRadius: '2px',
	_margin: '10px',
	_padding: '5px'
}

const Card = styled.div`

	border: ${({ _border }) =>
		css._border
	};
	margin: ${({ _margin }) =>
		css._margin
	};
	padding: ${({ _padding }) =>
		css._padding
	};
	border-radius: ${({ _borderRadius }) =>
		css._borderRadius
	};
`

Card.defaultProps = {
	_borderRadius: PropTypes.string,
	_border: PropTypes.string,
	_margin: PropTypes.string,
	_padding: PropTypes.string
}

export default Card