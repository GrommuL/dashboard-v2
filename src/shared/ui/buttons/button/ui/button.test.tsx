import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('button', () => {
	test('button-test-render', () => {
		render(<Button>TEST</Button>)
		expect(screen.getByText('TEST')).toBeInTheDocument()
	})
})

describe('button', () => {
	test('button-test-primary-variant', () => {
		render(<Button variant='primary'>TEST</Button>)
		expect(screen.getByText('TEST')).toHaveClass('primary')
	})
})
