import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './switch'

const meta = {
	title: 'shared/switch/dark',
	component: Switch,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div
				className='app dark'
				style={{
					height: '95vh',
					width: '95vw',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Switcher: Story = {
	args: {
		id: 'switcher'
	}
}
