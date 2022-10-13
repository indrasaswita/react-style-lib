import React, { CSSProperties } from "react"
import "./Button.css"
import { EnumTheme, EnumType } from "../../shared"

export type ButtonProps = {
	children?: React.ReactNode,
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
	theme?: EnumTheme,
	type?: EnumType,
	disabled?: boolean,
	textAlign?: "left" | "center" | "right",
	className?: string,
	style?: CSSProperties,
	leftIcon?: React.ReactNode,
	rightIcon?: React.ReactNode,
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
					+ (props.disabled
						? " disabled"
						: "")
					+ (props.theme
						? " theme-" + props.theme
						: "")
					+ (props.type
						? " type-" + props.type
						: " type-standard")
				}
				style={props.style}
				disabled={props.disabled}
				onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
					if(props.onClick)
						props.onClick(e)
				}}
			>
				{props.leftIcon !== undefined
					&& (
						<div className="icon-wrapper">
							{props.leftIcon}
						</div>
					)}
				<div
					className={
						"is-button-text"
						+ (props.textAlign
							? " align-" + props.textAlign
							: " align-center")
					}
				>
					{props.children}
				</div>
				{props.rightIcon !== undefined
					&& (
						<div className="icon-wrapper">
							{props.rightIcon}
						</div>
					)}
			</button>
		)
	}

Button.displayName = "Button"
Button.defaultProps = {
	theme: EnumTheme.Default,
	textAlign: "center",
	disabled: false,
}

export default Button
