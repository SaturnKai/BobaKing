interface ItemType {
	name: string;
	item_columns: string[][];
}

const menu: ItemType[] = [
	{
		name: 'Milk Tea',
		item_columns: [['Thai', 'Black', 'Jasmine', 'Green', 'Earl Grey', 'Moroccan', 'Camomile']]
	},
	{
		name: 'Flavored',
		item_columns: [
			['Mango', 'Passion Fruit', 'Pomegranate', 'Pistachio', 'Strawberry', 'Almond', 'Coffee'],
			['Chocolate', 'Matcha Green Tea', 'Honeyew', 'Taro', 'Peach', 'Lychee', 'Wintermelon'],
			['Hokkaido', 'Nagasaki', 'Horchata', 'Rose', 'Coconut', 'Mix and Match']
		]
	}
];

export default menu;
