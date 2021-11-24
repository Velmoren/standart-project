import Link from "next/link";
import {
	YMaps,
	Map,
	Clusterer,
	Placemark,
	FullscreenControl,
	TrafficControl,
	SearchControl,
	GeolocationControl,
	ZoomControl,
} from "react-yandex-maps";

const points = [[53.801783, 27.591323]];
console.dir(SearchControl)
const MapBlock = () => (
	<YMaps query={{ apikey: "30743603-2686-4016-9fe9-cd28f7e91923" }}>
		<div className="map_block">
			<Map
				defaultState={{ center: [53.801783, 27.591323], zoom: 13 }}
				// width={`100%`}
				// height={`415px`}
				className={`map_cont`}
				style={{
					height: 415 + "px",
					width: 100 + "%",
					borderRadius: 5 + "%",
					zIndex: 100,
				}}
			>
				<Clusterer
					options={{
						preset: "islands#invertedVioletClusterIcons",
						groupByCoordinates: false,
					}}
				>
					{points.map((coordinates, index) => (
						<Placemark
							key={index}
							geometry={coordinates}
							options={{ iconColor: "#404c54" }}
						/>
					))}
				</Clusterer>
				<FullscreenControl />
				<TrafficControl options={{ float: "right" }} />
				<SearchControl options={{ float: "right" }} />
				<GeolocationControl options={{ float: "left" }} />
				<ZoomControl options={{ float: "right" }} />
			</Map>
		</div>
		<style jsx>{`
			.map_block {
				border: 1px solid #608d98;
				border-radius: 5px;
				height: 417px;
			}

			.map_cont {
				width: 100%;
				height: 415px;
			}
		`}</style>
	</YMaps>
);

export default MapBlock;
