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
            'Mango', 'Passion Fruit', 'Pomegranate', 'Pistachio', 'Strawberry', 'Almond', 'Coffee',
            'Chocolate', 'Matcha Green Tea', 'Honeyew', 'Taro', 'Peach', 'Lychee', 'Wintermelon',
			'Hokkaido', 'Nagasaki', 'Horchata', 'Rose', 'Coconut', 'Mix and Match'
		]
	}
];

export default menu;
