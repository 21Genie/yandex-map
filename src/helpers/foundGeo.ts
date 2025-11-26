import { IGeocodeResult } from 'yandex-maps'

export const foundGeo = (result: IGeocodeResult) => {
	const firstGeoObject = result.geoObjects.get(0)

	if (firstGeoObject) {
		const properties = firstGeoObject.properties

		const location = String(properties.get('description', {}))
		const route = String(properties.get('name', {}))

		const foundAddress = {
			location,
			route,
		}

		return foundAddress
	}
}
