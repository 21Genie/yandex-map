import { Map } from '@pbe/react-yandex-maps'

const defaultState = { center: [59.94, 30.31], zoom: 12 }
export const GeoMap = () => {
	const handleClickMap = () => {}

	return <Map width={'100%'} height={'700px'} defaultState={defaultState} />
}
