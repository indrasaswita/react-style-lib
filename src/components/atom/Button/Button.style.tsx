import styled, { StyledComponent } from "styled-components"
import { button, buttonOutlined, buttonTransparent } from "../../../styles/mixins/button.mixin"
import { VARS } from "../../../styles/config/variables"
import { EnumButton } from "./Button.enum"

type WrapperProps = {
	theme?: EnumButton,
	disabled?: boolean,
	textAlign?: "left" | "center" | "right",
}

const Wrapper
	: StyledComponent<"button", any, WrapperProps, never>
	= styled.button<WrapperProps>`
		${(p: WrapperProps) => {
		if (!p.disabled) {
			switch(p.theme) {
			case EnumButton.Transparent:
				return buttonTransparent("white")
			case EnumButton.TransparentPrimary:
				return buttonTransparent(VARS.primary)
			case EnumButton.TransparentSuccess:
				return buttonTransparent(VARS.success)
			case EnumButton.TransparentWarning:
				return buttonTransparent(VARS.warning)
			case EnumButton.TransparentInfo:
				return buttonTransparent(VARS.info)
			case EnumButton.TransparentDanger:
				return buttonTransparent(VARS.danger)
			case EnumButton.TransparentDark:
				return `
						background-color: transparent;
						color: white;
						border-style: solid;
						border-color: white;

						&:hover,
						&:focus {
							color: #2e0d93;
							background-color: rgba(255,255,255,.95);
							box-shadow: 0px 0px 20px rgb(255 255 255 / 40%)
						}
					`
			case EnumButton.Success:
				return button(VARS.success)
			case EnumButton.SuccessOutlined:
				return buttonOutlined(VARS.success)
			case EnumButton.Info:
				return button(VARS.info)
			case EnumButton.InfoOutlined:
				return buttonOutlined(VARS.info)
			case EnumButton.Danger:
				return button(VARS.danger)
			case EnumButton.DangerOutlined:
				return buttonOutlined(VARS.danger)
			case EnumButton.Warning:
				return button(VARS.warning)
			case EnumButton.WarningOutlined:
				return buttonOutlined(VARS.warning)
			case EnumButton.Primary:
				return button(VARS.primary)
			case EnumButton.PrimaryOutlined:
				return buttonOutlined(VARS.primary)
			default:
				return `
						background-color: #777;
						color: black;
					`
			}
		} else {
			// on disabled
			return `
					background-color: #777;
					border-color: transparent;
					color: #ccc;
					pointer-events: none;
					cursor: no-drop !important;
				`
		}
	}}

		outline: none;
		border-radius: 999px;
		cursor: pointer;
		transition: .2s all;
		font-weight: 600;
		font-family: inherit;
		padding: calc(6px + .2vw) calc(12px + 1vw);
		font-size: inherit;

		text-align: ${(p: WrapperProps) => p.textAlign};
	`

export default Wrapper
