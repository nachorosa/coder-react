const products = [
	{
		id: 0,
		category: "bebidas-sin-alcohol",
		title: "pepsi",
		price: 1800,
		stock: 7,
		img:
        	'https://http2.mlstatic.com/D_NQ_NP_972485-MLA48944932371_012022-O.webp',
		description:
			" x 24 unidades",
	},
	{
		id: 1,
		category: "bebidas-con-alcohol",
		title: "Kit Jagermeister X2 + Vasos + 2 Coca Cola",
		price: 2510,
		stock: 5,
		img:
        	'https://http2.mlstatic.com/D_NQ_NP_2X_657528-MLA49794764747_042022-F.webp',
		description:
			"x 1 unidad",
	},
	{
		id: 2,
		category: "bebidas-sin-alcohol",
		title: "Schweppes Tonica",
		price: 225,
		stock: 7,
		img:
        	'https://http2.mlstatic.com/D_NQ_NP_928734-MLA41297647120_032020-O.webp',
		description:
			"x 1 unidad",
	},
	{
		id: 3,
		category: "bebidas-con-alcohol",
		title: "gancia",
		price: 620,
		stock: 12,
		img:
        	'https://http2.mlstatic.com/D_NQ_NP_958087-MLA31710751914_082019-O.webp',
		description:
			"x 1 unidad",
	},
	{
		id: 4,
		category: "bebidas-con-alcohol x6",
		title: "Fernet Branca 750ml",
		price: 7500,
		stock: 6,
		img:
        	'https://http2.mlstatic.com/D_NQ_NP_826330-MLA32009619515_082019-O.webp',
		description:
			"x 6 unidades",
	},
	{
		id: 5,
		category: "bebidas-con-alcohol",
		title: "Fernet Branca 750ml",
		price: 1250,
		stock: 18,
		img:
        	'https://http2.mlstatic.com/D_NQ_NP_816107-MLA47036560589_082021-O.webp',
		description:
			"x 1 unidad",
	},
	{
		id: 6,
		category: "bebidas-con-alcohol",
		title: "Cerveza Patagonia Amber Lager 740ml X6",
		price: 2000,
		stock: 13,
		img:
        	'https://http2.mlstatic.com/D_NQ_NP_889760-MLA44791919493_022021-O.webp',
		description:
			"x 6 unidades",
	},
]

const task = new Promise((resp) => {
	resp(products)
}, 2000)

export const getItem = () => {
	return task
}
