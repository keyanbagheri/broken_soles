module.exports = {
	mongo: {
		dev: {
			conn: 'mongodb://localhost?express_dev'
		},
		prod: {
			conn: 'mongodb://localhost?express_prod'
		},
		options: {
			server: {
				socketOptions: { keepAlive: 1 }
			}
		}

	}
};
