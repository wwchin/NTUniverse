import mongoose from 'mongoose';
import dotenv from 'dotenv-defaults';
import UserModel from './models/userModel';

/* handle connection to mongodb */
async function mongoConnect() {
  dotenv.config();
  if (!process.env.MONGO_URL) {
    console.error('Missing MONGO_URL!!!');
    process.exit(1);
  }
  // console.log(`${process.env.MONGO_URL}`);
  

  await mongoose.connect(`${process.env.MONGO_URL}`)
    .then((res) => console.log("mongo db connection created"));
  mongoose.connection.on('error',
    console.error.bind(console, 'connection error:'));
  // const testData = new UserModel({
  //   first_name: 'test',
  //   last_name: 'Chen',
  //   email: 'ntuniverse@gmail.com',
  //   picture: 'pi4c',
  // });
  //await testData.save();
  //console.log('add one');

}

export default mongoConnect;