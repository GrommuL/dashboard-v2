import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './loader'

const meta = {
	title: 'shared/loader/light',
	component: Loader,
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
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const LoaderLight: Story = {}
