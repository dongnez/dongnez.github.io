interface RouteType{
	route:string,
	name:string,
}

export const routes:Array<RouteType> = [
	{
		name:'Home',
		route:'/'
	},
	{
		name:'Proyects',
		route:'proyects'
	},
	{
		name:'Contact',
		route:'contact',
	},
]