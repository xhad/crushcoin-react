import styled from 'styled-components'
import PropTypes from 'prop-types'

const css = {
	margin: '10px',
	padding: '5px'
}

const Group = styled.div`

	margin: ${({ _margin }) =>
		css.margin
	};
	padding: ${({ _padding }) =>
		css.padding
	};
`

Group.defaultProps = {
	_margin: PropTypes.string,
	_padding: PropTypes.string
}

export default Group