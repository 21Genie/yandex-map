import { AddressType, CoordinatesType } from '../GeoMap/GeoMap'
import styles from './LocationInfoCard.module.css'

interface LocationInfoCardProps {
	address?: AddressType | null
	coordinates?: CoordinatesType | null
}

export const LocationInfoCard = ({
	address,
	coordinates,
}: LocationInfoCardProps) => {
	const fixedCoordinates = coordinates?.map(num => num.toFixed(2))

	if (!address && !coordinates) {
		return (
			<div className={styles.locationInfoCard}>
				<h2>Выберите точку на карте</h2>
			</div>
		)
	}

	return (
		<div className={styles.locationInfoCard}>
			<div>
				<p>Локация: {address?.location}</p>
				<p>Адрес: {address?.route}</p>
				<p>
					Координаты: {fixedCoordinates?.[0]}, {fixedCoordinates?.[1]}
				</p>
			</div>
		</div>
	)
}
