import { formatDistance, parseISO } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'
import { useTranslation } from 'react-i18next'

export const useFormatDistanceFromNow = () => {
	const { i18n } = useTranslation()

	const formatDistanceFromNow = (dateStr: string) =>
		formatDistance(parseISO(dateStr), new Date(), {
			addSuffix: true,
			locale: i18n.language === 'en' ? enUS : ru
		})
			.replace('about ', '')
			.replace('in', 'In')

	return { formatDistanceFromNow }
}
