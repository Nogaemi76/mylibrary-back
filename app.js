import express from 'express';
import Server from './src/config/server';
import db from './src/config/database';
import config from './src/config/env';

import routes from './src/modules';

const application = new Server(express, routes);

(async () => {
	try {
		await db.associateAll(db.sequelize.models);
		await db.sequelize.sync({ alter: true });
		await application.listen(config.app_port);
	} catch (error) {
		console.log(error);
	}
})();
