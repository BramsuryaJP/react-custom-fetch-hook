import React from 'react'

const Button = ({ buttonText, action }) => {
	return <button onClick={action}>{buttonText}</button>
}

export default Button
