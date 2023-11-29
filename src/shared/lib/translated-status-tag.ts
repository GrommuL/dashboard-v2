import { BookingStatus } from 'entities/bookings'

export const translatedStatusTag = (statusTag: BookingStatus) => {
	switch (statusTag) {
		case 'confirmed':
			return 'подтвержден'
		case 'unconfirmed':
			return 'не подтвержден'
		case 'checked-in':
			return 'зарегистрирован'
		case 'checked-out':
			return 'выселился'
	}
}
