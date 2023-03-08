interface RouteType{
	route:string,
	name:string
}

export const routes:Array<RouteType> = [
	{
		name:'Home',
		route:'/'
	},
	{
		name:'About',
		route:'about'
	},
	{
		name:'Proyects',
		route:'proyects'
	},
]