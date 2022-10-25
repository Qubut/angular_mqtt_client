export const environment = {
  production: true,
	hmr: false,
	http: {
    apiUrl:'localhost:1883',
    
	},
	mqtt: {
		server: 'localhost',
		protocol: "ws",
		port: 8081
	}
};
