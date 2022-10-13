import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Button, { ButtonProps } from "./Button"
import { EnumTheme } from "../../shared"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "is-style/Button",
	component: Button,
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: any) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "calc(5px + .4vw)",
			}}
		>
			{new Array(3)
				.fill(0)
				.map((
					_: number,
					index: number,
				) => {
					return (
						<Button
							key={index}
							{...args}
							style={{
								fontSize: (70 + index * 30) + "%",
							}}
							leftIcon={"🙂"}
							rightIcon={"🙂"}
						>
							Font Size: {(70 + index * 30) + "%"}
						</Button>
					)
				})}
		</div>
	)
}

export const Default
	: ComponentStory<React.FC<ButtonProps>>
	= Template.bind({})
export const Primary
	: ComponentStory<React.FC<ButtonProps>>
	= Template.bind({})
export const Secondary
	: ComponentStory<React.FC<ButtonProps>>
	= Template.bind({})
export const Danger
	: ComponentStory<React.FC<ButtonProps>>
	= Template.bind({})
export const Warning
	: ComponentStory<React.FC<ButtonProps>>
	= Template.bind({})
export const Success
	: ComponentStory<React.FC<ButtonProps>>
	= Template.bind({})
export const Info
	: ComponentStory<React.FC<ButtonProps>>
	= Template.bind({})
export const Muted
	: ComponentStory<React.FC<ButtonProps>>
	= Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = { theme: EnumTheme.Default }
Primary.args = { theme: EnumTheme.Primary }
Secondary.args = { theme: EnumTheme.Secondary }
Danger.args = { theme: EnumTheme.Danger }
Warning.args = { theme: EnumTheme.Warning }
Success.args = { theme: EnumTheme.Success }
Info.args = { theme: EnumTheme.Info }
Muted.args = { theme: EnumTheme.Muted }
