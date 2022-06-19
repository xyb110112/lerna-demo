import React from 'react'
import { action } from '@storybook/addon-actions'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from '../src/components/input'

export default {
	title: 'Input',
	component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
	<Input {...args} onClick={action('click')} />
)

export const Primary = Template.bind({})

Primary.args = {
	placeholder: '测试输入',
}
