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
		name:'About me',
		route:'about'
	},
	{
		name:'Proyects',
		route:'proyects'
	},
]