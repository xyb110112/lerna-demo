import './storybook.css'
import './main.scss'

import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withPropsTable } from 'storybook-addon-react-docgen'

addDecorator(withInfo)
addDecorator(
	withPropsTable({
		propTablesExclude: ['Story'],
	})
)

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		expanded: true,
	},
}
