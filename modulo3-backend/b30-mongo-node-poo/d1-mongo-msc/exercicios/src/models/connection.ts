import mongoose from 'mongoose';

const connection = (mongoDataBaseURI = 'mongodb://localhost:27017/world_cups') => mongoose.connect(mongoDataBaseURI);

export default connection;