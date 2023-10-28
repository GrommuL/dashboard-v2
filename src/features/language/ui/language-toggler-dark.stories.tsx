import type { Meta, StoryObj } from '@storybook/react'
import { LanguageToggler } from './language-toggler'

const meta = {
	title: 'shared/language-toggler/dark',
	component: LanguageToggler,
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
} satisfies Meta<typeof LanguageToggler>

export default meta
type Story = StoryObj<typeof meta>

export const LanguageTogglerDark: Story = {}
