// NnIoFpKNmV4Zljfa;

const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://NataliTs:NnIoFpKNmV4Zljfa@cluster1.i362bp5.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// async function run() {
//   try {
//     mongoose.connect(DB_HOST);
//     app.listen(3000);
//     console.log("Database connection successful");
//   } catch (error) {
//     console.log(error.message);
//     process.exit(1);
//   }
// }

// run().catch(console.error);
