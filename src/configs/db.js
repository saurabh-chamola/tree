import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log("CONNECTED TO DATABASE!!!");
  } catch (e) {
    console.log(`CONNECTION FAILED---${e?.message}`);
    process.exit(1);
  }
};

export default dbConnect;
