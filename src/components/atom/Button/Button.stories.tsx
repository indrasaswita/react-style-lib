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

const buttonThemes
	: EnumButton[]
	= [
		EnumButton.Primary,
		EnumButton.Success,
		EnumButton.Danger,
		EnumButton.Warning,
		EnumButton.Info,
	]

const Template: ComponentStory<typeof Button> = (args) => {
	return (
		<>
			{buttonThemes
				.map((
					theme: EnumButton,
					index: number
				) => {
					return (
						<Button 
							key={index}
							theme={theme}
							{...args} 
						>
							{theme}
						</Button>
					)
				})}
		</>
	)
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  // children: 'Primary',
};

Default.args = {
  // children: 'Primary',
};