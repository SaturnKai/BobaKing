export interface OrderType {
	name: string;
	open: string;
	close: string;
}

export interface Location {
	name: string;
	place: string;
	order_types: OrderType[];
}

const locations: Location[] = [
	{
		name: '3030 W AN RD SUITE 107',
		place: 'North Las Vegas, NV 89031',
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
