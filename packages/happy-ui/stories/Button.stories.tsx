import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story, ComponentMeta } from '@storybook/react'
import Button, { ButtonProps } from '../src/components/button'

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		type: {
			table: { defaultValue: { summary: 'primary' } },
		},
	},
} as ComponentMeta<typeof Button>

const Template: Story<ButtonProps> = (args) => (
	<Button {...args} onClick={action('click')}>
		测试按钮
	</Button>
)

export const Primary = Template.bind({})

Primary.args = {
	type: 'primary',
}
