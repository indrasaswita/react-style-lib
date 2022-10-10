import React from "react"

export type ButtonProps = {
	children?: React.ReactNode,
}

type Props = ButtonProps
const Button 
	: React.FC<Props>
	= (props: Props) => {
		return (
			<button>
				{props.children}
			</button>
		)
	}

export default Button