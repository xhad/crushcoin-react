import styled from 'styled-components'
import PropTypes from 'prop-types'

const css = {
	_border: '1px solid #e3e3e3',
	_borderRadius: '2px',
	_padding: '5px'
}

const Container = styled.div`

	border: ${({ _border }) =>
		css._border
    };
    
    border-radius: ${({ _borderRadius }) =>
        css._borderRadius
    };

	padding: ${({ _padding }) =>
		css._padding
	};
`

Container.defaultProps = {
    _border: PropTypes.string,
    _borderRadius: PropTypes.string,    
	_padding: PropTypes.string
}

export default Container