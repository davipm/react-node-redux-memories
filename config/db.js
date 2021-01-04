import { connect } from "mongoose";

const connectDb = async () => {
  try {
    await connect(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(`${error} did not connect`);
  }
};

export default connectDb;
