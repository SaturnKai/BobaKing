export interface OrderType {
	name: string;
	open: string;
	close: string;
}

export interface Location {
	name: string;
	place: string;
	latitude: number;
	longitude: number;
	order_types: OrderType[];
}

const locations: Location[] = [
	{
		name: '3030 W AN RD SUITE 107',
		place: 'North Las Vegas, NV 89031',
		latitude: 36.26239495652529,
		longitude: -115.18190887337805,
		order_types: [
			{
				name: 'In store',
				open: '6:00AM',
				close: '10:00PM'
			}
		]
	},
	{
		name: '7660 W Cheyenne Ave',
		place: 'Las Vegas, NV 89129',
		latitude: 36.21872353078878,
		longitude: -115.26203554193437,
		order_types: [
			{
				name: 'In store',
				open: '6:00AM',
				close: '10:00PM'
			}
		]
	},
	{
		name: '1829 NV-573',
		place: 'North Las Vegas, NV 89032',
		latitude: 36.23902859462086,
		longitude: -115.16866343272761,
		order_types: [
			{
				name: 'In store',
				open: '6:00AM',
				close: '10:00PM'
			}
		]
	},
	{
		name: '2679 S Eastern Ave',
		place: 'Las Vegas, NV 89169',
		latitude: 36.14827807523635,
		longitude: -115.11603477278665,
		order_types: [
			{
				name: 'In store',
				open: '6:00AM',
				close: '10:00PM'
			}
		]
	}
];

export default locations;
