interface BodyProps {
	data: unknown[]
	render: (item: unknown) => React.JSX.Element
}

export const Body = ({ data, render }: BodyProps) => {
	if (!data.length) return

	return data.map(render)
}
