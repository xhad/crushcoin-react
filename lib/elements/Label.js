import styled from 'styled-components'
import styles from '../styles'
import PropTypes from 'prop-types'

const css = {
	fontFamily: styles.fontFamily,
	fontColor: 'black',
	fontSize: '15px',
	margin: '2px',
	padding: '5px'
}

const Label = styled.div`

	color: ${({ _fontColor }) =>
		css.fontColor
	};
	color: ${({ _fontSize }) =>
		css.fontSize
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
	font-family: ${({ _fontFamily }) =>
			css.fontFamily
	}
`

Label.defaultProps = {
	_fontFamily: PropTypes.string,
	_fontColor: PropTypes.string,
	_fontSize: PropTypes.string,
	_margin: PropTypes.string,
	_padding: PropTypes.string
}

export default Label