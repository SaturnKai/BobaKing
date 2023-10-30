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
				open: '11:00AM',
				close: '9:00PM'
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
			},
			{
				name: 'Delivery',
				open: '6:00AM',
				close: '9:00PM'
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
				open: '7:00AM',
				close: '8:00PM'
			},
			{
				name: 'Delivery',
				open: '7:00AM',
				close: '7:00PM'
			}
		]
	},

	{
		name: '8414 Farm Rd Ste 150',
		place: 'Las Vegas, NV 89131',
		latitude: 36.30119281118,
		longitude: -115.27969542159131,
		order_types: [
			{
				name: 'In store',
				open: '9:00AM',
				close: '11:00PM'
			}
		]
	},
	{
		name: '591 College Dr',
		place: 'Henderson, NV 89015',
		latitude: 36.01300538953085,
		longitude: -114.96404806271718,
		order_types: [
			{
				name: 'In store',
				open: '5:00AM',
				close: '9:00PM'
			},
			{
				name: 'Delivery',
				open: '7:00AM',
				close: '9:00PM'
			}
		]
	},
	{
		name: '111 N Nellis Blvd St. 140',
		place: 'Las Vegas, NV 89110',
		latitude: 36.16206494275395,
		longitude: -115.06272127569892,
		order_types: [
			{
				name: 'In store',
				open: '5:00AM',
				close: '9:00PM'
			},
			{
				name: 'Delivery',
				open: '7:00AM',
				close: '8:00PM'
			}
		]
	}
];

export default locations;
