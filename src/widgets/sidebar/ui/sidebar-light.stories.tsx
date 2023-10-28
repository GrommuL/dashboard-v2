import { BrowserRouter } from 'react-router-dom'
import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './sidebar'

const meta = {
	title: 'shared/sidebar/light',
	component: Sidebar,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<BrowserRouter>
				<div
					className='app light'
					style={{
						height: '100vh',
						width: '100vw'
					}}
				>
					<Story />
				</div>
			</BrowserRouter>
		)
	]
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const SidebarLight: Story = {}
