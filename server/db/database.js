import mongoose from "mongoose";
const DB = "mongodb://localhost:27017/recipes";
mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Succefully connected");
    }
  }
);
