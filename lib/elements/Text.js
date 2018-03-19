import styled from 'styled-components'
import { fontFamily } from '../styles'
import PropTypes from 'prop-types'

const css = {
	fontFamily: fontFamily,
	bgColor: 'white',
	height: '30px',
	width: '250px',
	fontColor: 'black',
	fontSize: '15px',
	margin: '10px',
	padding: '5px'
}

const Text = styled.div`
	font-family: ${({ _fontFamily }) =>
    css.fontFamily
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
	border-radius: ${({ _padding }) =>
    css.borderRadius
	};
`

Text.defaultProps = {
	_fontFamily: PropTypes.string,
	_margin: PropTypes.string,
	_padding: PropTypes.string
}

export default Text