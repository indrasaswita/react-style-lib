import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Alert, { AlertProps } from "./Alert"
import { EnumTheme } from "../../shared"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "is-style/Alert",
	component: Alert,
} as ComponentMeta<typeof Alert>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args: any) => {
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
						<Alert
							key={index}
							{...args}
							style={{
								fontSize: (70 + index * 30) + "%",
							}}
							leftIcon={"🙂"}
						>
							Font Size: {(70 + index * 30) + "%"}
						</Alert>
					)
				})}
		</div>
	)
}

export const Default
	: ComponentStory<React.FC<AlertProps>>
	= Template.bind({})
export const Primary
	: ComponentStory<React.FC<AlertProps>>
	= Template.bind({})
export const Secondary
	: ComponentStory<React.FC<AlertProps>>
	= Template.bind({})
export const Danger
	: ComponentStory<React.FC<AlertProps>>
	= Template.bind({})
export const Warning
	: ComponentStory<React.FC<AlertProps>>
	= Template.bind({})
export const Success
	: ComponentStory<React.FC<AlertProps>>
	= Template.bind({})
export const Info
	: ComponentStory<React.FC<AlertProps>>
	= Template.bind({})
export const Muted
	: ComponentStory<React.FC<AlertProps>>
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
