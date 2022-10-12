import React, { CSSProperties } from "react"
import { EnumTheme, EnumType } from "../../shared"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faXmark as fasXmark,
} from "@fortawesome/free-solid-svg-icons"
import "./Alert.css"

export type AlertProps = {
	children?: React.ReactNode,
	theme?: EnumTheme,
	type?: EnumType,
	style?: CSSProperties,
	textAlign?: "left" | "center" | "right",
	className?: string,
	leftIcon?: React.ReactNode,
	disabledClose?: boolean,
	onClose?: () => void,
}

const Alert
	: React.FunctionComponent<AlertProps>
	= (props: AlertProps) => {
		return (
			<div 
				className={
					"is-alert"
					+ (props.theme
						? " theme-" + props.theme
						: "")
					+ (props.type
						? " type-" + props.type
						: " type-outlined")
				}
				style={props.style}
			>
				
				{props.leftIcon !== undefined
					&& (
						<div className="icon-wrapper">
							{props.leftIcon}
						</div>
					)}
				<div 
					className={
						"is-alert-text"
						+ (props.textAlign
							? " align-" + props.textAlign
							: " align-center")
					}
				>
					{props.children}
				</div>
				
				{!props.disabledClose
					&& (
						<div 
							className="close-action"
							onClick={() => {
								if(props.onClose)
									props.onClose()
							}}
						>
							<FontAwesomeIcon
								icon={fasXmark}
								fixedWidth
							/>
						</div>
					)}
			</div>
		)
	}

export default Alert