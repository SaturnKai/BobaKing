interface ItemType {
	name: string;
	flavors: string[];
}

const menu: ItemType[] = [
	{
		name: 'Milk Tea',
		flavors: ['Thai', 'Black', 'Jasmine', 'Green', 'Earl Grey', 'Moroccan', 'Camomile']
	},
	{
		name: 'Flavored',
		flavors: [
			'Mango',
			'Passion Fruit',
			'Pomegranate',
			'Pistachio',
			'Strawberry',
			'Almond',
			'Coffee',
			'Chocolate',
			'Honeydew',
			'Taro',
			'Peach',
			'Lychee',
			'Wintermelon',
			'Hokkaido',
			'Nagasaki',
			'Horchata',
			'Rose',
			'Coconut',
			'Mix and Match',
			'Matcha Green Tea'
		]
	},
	{
		name: 'Slush',
		flavors: [
			'Mango',
			'Passion Fruit',
			'Pomegranate',
			'Tropical',
			'Pineapple',
			'Strawberry',
			'Green Apple',
			'Almond',
			'Cookies & Cream',
			'Watermelon',
			'Coffee',
			'Coconut',
			'Chocolate',
			'Red Guava',
			'Matcha Green Tea',
			'Strawberry Banana',
			'Honeydew',
			'Pineapple Coconut',
			'Thai Tea',
			'Taro',
			'Horchata',
			'Grapefruit',
			'Peach',
			'Cantaloupe',
			'Lychee',
			'Kiwi',
			'Orange',
			'Grape',
			'Pistachio',
			'Mix & Match'
		]
	},
	{
		name: 'Popping Pearls',
		flavors: [
			'Strawberry',
			'Mango',
			'Kiwi',
			'Lychee',
			'Passion Fruit',
			'Peach',
			'Green Apple',
			'Blueberry',
			'Yogurt',
			'Cantaloupe'
		]
	},
	{
		name: 'Jelly',
		flavors: ['Lychee CocoJelly', 'Rainbow Jelly', 'Coffee Jelly']
	},
	{
		name: 'Pudding',
		flavors: ['Taro Pudding', 'Custard Pudding']
	}
];

export default menu;
