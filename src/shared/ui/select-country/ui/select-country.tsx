import { FC, SelectHTMLAttributes } from 'react'
import style from './select-country.module.scss'
import { CountriesType } from 'shared/lib/types/countries-type'

interface SelectCountryProps extends SelectHTMLAttributes<HTMLSelectElement> {
	options: CountriesType[]
}

export const SelectCountry: FC<SelectCountryProps> = ({ options, ...otherProps }) => {
	return (
		<select className={style.select} {...otherProps}>
			{options.map((option) => (
				<option key={option.flag} value={option.country}>
					{option.country}
				</option>
			))}
		</select>
	)
}
