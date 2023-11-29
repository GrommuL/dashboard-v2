export const formatNumberOfGuests = (numberOfGuests: number) => {
	switch (numberOfGuests) {
		case 1:
			return 'гость'

		case 2:
		case 3:
		case 4:
			return 'гостя'

		default:
			return 'гостей'
	}
}
