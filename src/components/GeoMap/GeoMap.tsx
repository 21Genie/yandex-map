import { Map, Placemark, useYMaps } from '@pbe/react-yandex-maps'
import { useState } from 'react'
import { foundGeo } from '../../helpers/foundGeo'
import { LocationInfoCard } from '../LocationInfoCard/LocationInfoCard'
import styles from './GeoMap.module.css'

const defaultState = { center: [59.94, 30.31], zoom: 12 }

export type CoordinatesType = Array<number>

export type AddressType = {
	location: string
	route: string
}

type MapClickEventType = {
	get: (key: string) => CoordinatesType
}

export const GeoMap = () => {
	const [coordinates, setCoordinates] = useState<CoordinatesType | null>(null)
	const [address, setAddress] = useState<AddressType | null>(null)
	const ymaps = useYMaps(['geocode'])

	const handleClickMap = (e: MapClickEventType) => {
		const coords = e.get('coords')

		if (coords) {
			setCoordinates(coords)
		}

		ymaps
			?.geocode(coords)
			.then(res => {
				const foundAddress = foundGeo(res)

				if (foundAddress) {
					setAddress(foundAddress)
				}
			})
			.catch((e: unknown) => {
				console.error('Ошибка геокодирования', e)
				setAddress(null)
			})
	}

	return (
		<div className={styles.wrapperMap}>
			<LocationInfoCard address={address} coordinates={coordinates} />
			<Map
				onClick={(e: MapClickEventType) => handleClickMap(e)}
				width={'auto'}
				height={'500px'}
				defaultState={defaultState}
			>
				{coordinates && <Placemark geometry={coordinates} />}
			</Map>
		</div>
	)
}
