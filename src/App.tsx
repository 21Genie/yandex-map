import { YMaps } from '@pbe/react-yandex-maps'
import { GeoMap } from './components/GeoMap/GeoMap'
import config from './config/config.json'

function App() {
	return (
		<YMaps query={{ apikey: config.YANDEX_API_KEY, load: 'package.full' }}>
			<div>
				<GeoMap />
			</div>
		</YMaps>
	)
}

export default App
