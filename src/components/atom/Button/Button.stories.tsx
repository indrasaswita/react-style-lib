import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import { EnumButton } from './Button.enum';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'is-style/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

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
					index: number
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

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Danger = Template.bind({});
export const Warning = Template.bind({});
export const Success = Template.bind({});
export const Info = Template.bind({});
export const Muted = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = { theme: EnumButton.Default };
Primary.args = { theme: EnumButton.Primary };
Secondary.args = { theme: EnumButton.Secondary };
Danger.args = { theme: EnumButton.Danger };
Warning.args = { theme: EnumButton.Warning };
Success.args = { theme: EnumButton.Success };
Info.args = { theme: EnumButton.Info };
Muted.args = { theme: EnumButton.Muted };
