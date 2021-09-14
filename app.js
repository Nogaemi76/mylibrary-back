import express from 'express';
import Server from './src/config/server';
import db from './src/config/database';
import config from './src/config/env';

import routes from './src/modules';

import cookieParser from 'cookie-parser';

const middlewares = { cookieParser };
const application = new Server(express, routes, middlewares);

(async () => {
	try {
		await db.associateAll(db.sequelize.models);
		await db.sequelize.sync({ alter: false });
		await application.listen(config.app_port);
	} catch (error) {
		console.log(error);
	}
})();
