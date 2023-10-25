import { useTranslation } from 'react-i18next'

export const useLanguage = () => {
	const { i18n } = useTranslation()

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return {
		i18n,
		toggleLanguage
	}
}
