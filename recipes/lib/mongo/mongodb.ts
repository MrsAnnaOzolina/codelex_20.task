import mongoose from "mongoose";



const  main = async () =>  {
  await mongoose.connect('mongodb://localhost:27017/Recipes');
  console.log("Connected to Database!")
}

export default main


// import { MongoClient } from 'mongodb'

// const URI = process.env.MONGO_URI
// const options = {}

// let client
// let clientPromise 

// if (!URI) {
//   throw new Error('Add Mongo URI to .env.local')
// }

// if (process.env.NODE_ENV !== 'production') {

//   if (!global._mongoClientPromise) {
//     client = new MongoClient(URI, options)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   client = new MongoClient(URI, options)
//   clientPromise = client.connect()
// }

// export default clientPromise
