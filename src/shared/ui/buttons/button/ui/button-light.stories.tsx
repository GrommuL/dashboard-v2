import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta = {
	title: 'shared/button/light',
	component: Button,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div
				className='app light'
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		variant: 'default',
		children: 'Button'
	}
}

export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Button'
	}
}
export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: 'Button'
	}
}
export const Empty: Story = {
	args: {
		variant: 'empty',
		children: 'Button'
	}
}
