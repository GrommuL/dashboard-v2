import { formatDistance, parseISO } from 'date-fns'

// export const formatDistanceFromNow = (timestamp: number): string => {
// 	const date = new Date(timestamp)
// 	const distance = formatDistanceToNow(date, { addSuffix: true })
// 	return distance.replace('in ', '').replace('in', 'In')
// }

export const formatDistanceFromNow = (dateStr: string) =>
	formatDistance(parseISO(dateStr), new Date(), {
		addSuffix: true
	})
		.replace('about ', '')
		.replace('in', 'In')
