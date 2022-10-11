import React, { CSSProperties } from "react"
import { EnumButton } from "./Button.enum"
import "./Button.css"

type ButtonProps = {
	children?: React.ReactNode,
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
	theme?: EnumButton,
	disabled?: boolean,
	textAlign?: "left" | "center" | "right",
	className?: string,
	style?: CSSProperties,
}

const Button
	: React.FC<ButtonProps>
	= (props: ButtonProps) => {
		return (
			<button
				className={
					"is-button"
					+ (props.className
						? " " + props.className
						: "")
					+ (props.textAlign
						? " align-" + props.textAlign
						: " align-center")
					+ (props.disabled
						? " disabled"
						: "")
				}
				style={props.style}
				disabled={props.disabled}
				// theme={props.theme}
				onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
					if(props.onClick)
						props.onClick(e)
				}}
				// textAlign={props.textAlign || "center"}
			>
				{props.children}
			</button>
		)
	}

export default Button
