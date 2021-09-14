import JwtService from './jwt';
import jwt from 'jsonwebtoken';
import config from '../config/env';

const jwtService = new JwtService(jwt, config.jwt_secret);

export { jwtService };
