import type { Meta, StoryObj } from '@storybook/react'
import { PageLoader } from './page-loader'

const meta = {
	title: 'shared/page-loader/light',
	component: PageLoader,
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
} satisfies Meta<typeof PageLoader>

export default meta
type Story = StoryObj<typeof meta>

export const PageLoaderLight: Story = {}
