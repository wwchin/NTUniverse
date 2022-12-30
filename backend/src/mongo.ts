import mongoose from 'mongoose';
import dotenv from 'dotenv-defaults';
import UserModel from './models/user';

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
<<<<<<< HEAD
  console.log('add one');

=======
  // console.log('add one');
  
>>>>>>> 0eeeab2df40265519f83d33d19f863e3180ec7ef
}

export default mongoConnect;