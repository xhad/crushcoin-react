import styled from 'styled-components'
import { darken } from 'polished'
import PropTypes from 'prop-types'
import styles from '../styles'

const css = {
  _fontFamily: styles.fontFamily,
  _fontColor: 'black',
  _fontSize: '15px',
  _bgColor: styles.primaryColor,
  _width: '130px',
  _height: '40px',
  _borderRadius: '2px 2px 2px 2px'
}

const Button = styled.button`
  background: ${({ bgColor }) =>
    css._bgColor
  };
  color: ${({ fontColor }) =>
    css._fontColor
  };
  height: ${({ _height }) =>
    css._height
  };
  width: ${({ _width }) =>
    css._width
  };
  font-size: ${({ _fontSize }) =>
    css._fontSize
  };
  border-radius: ${({ _borderRadius }) =>
    css._borderRadius
  };
  &:hover {
    background: ${({ _bgColor }) =>
      darken(0.1, css._bgColor)
    };
  }
`
Button.defaultProps = {
  _fontSize: PropTypes.string,
  _borderRadius: PropTypes.string,
  _bgColor: PropTypes.string,
  _fontColor: PropTypes.string,
  _width: PropTypes.string,
  _height: PropTypes.string
}

export default Button