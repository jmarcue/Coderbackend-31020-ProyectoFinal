import mongoose from 'mongoose';
import { serverConfig } from './server.config.js';
import { logger } from '../utils/winston.util.js';

const uri = serverConfig.STORAGE == 'cloud' ? serverConfig.MONGO_ATLAS: serverConfig.MONGO_LOCAL;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.set('strictQuery', true);
export const mongoConnect = mongoose.connect(uri, options);