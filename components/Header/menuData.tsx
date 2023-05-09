import routers from '../../routers/routers';
import { Menu } from '../../types/menu';

const menuData: Menu[] = [
	{
		id: 1,
		title: 'Home',
		path: routers.home,
		newTab: false,
	},
	{
		id: 2,
		title: 'Trader',
		path: routers.trader,
		newTab: false,
	},
	{
		id: 3,
		title: 'IB',
		path: routers.ib,
		newTab: false,
	},
	{
		id: 4,
		title: 'Employee',
		path: routers.employee,
		newTab: false,
	},
	{
		id: 5,
		title: 'Forum',
		path: routers.forum,
		newTab: false,
	},
	// {
	// 	id: 6,
	// 	title: 'Pages',
	// 	newTab: false,
	// 	submenu: [
	// 		{
	// 			id: 61,
	// 			title: 'About Page',
	// 			path: '/about',
	// 			newTab: false,
	// 		},
	// 	],
	// },
];
export default menuData;
