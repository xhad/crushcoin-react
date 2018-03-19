import styled from 'styled-components'
import { darken } from 'polished'
import PropTypes from 'prop-types'
import { fontFamily } from '../styles'

const css = {
	postition: 'relative',
	fontFamily: fontFamily,
	bgColor: 'white',
	height: '25px',
	width: '90%',
	fontColor: 'black',
	fontSize: '15px',
	borderRadius: '2px',
	borderWidth: '0.5px',
	margin: '10px',
	padding: '5px'
}

const Input = styled.input`
  font-family: ${({ _font }) =>
		css.fontFamily
  };
  background: ${({ _bgColor } ) =>
		css.bgColor
  };
  color: ${({ _fontColor }) =>
		css.fontColor
	};
	font-size: ${({ _fontSize }) =>
		css.fontSize
	};
  &:hover {
    background: ${({ _bgColor }) =>
        darken(0.1, css.bgColor)
    };
	}
	border-radius: ${({ _borderRadius }) =>
		css.borderRadius
	};
	border-width: ${({ _borderWidth }) =>
		css.borderWidth
	};
  width: ${({ _width }) =>
		css.width
	};
	height: ${({ _eight }) =>
		css.height
	};
	margin: ${({ _margin }) =>
		css.margin
	};
	padding: ${({ _padding })=>
		css.padding
	};
`
Input.defaultProps = {
  _font: PropTypes.string,
  _bgColor: PropTypes.string,
	_fontColor: PropTypes.string,
	_fontSize: PropTypes.string,
	_width: PropTypes.string,
	_height: PropTypes.string,
	_borderRadius: PropTypes.string,
	_borderWidth: PropTypes.string,
	_margin: PropTypes.string,
	_padding: PropTypes.string
}

export default Input