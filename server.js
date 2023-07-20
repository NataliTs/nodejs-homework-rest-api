// NnIoFpKNmV4Zljfa;

const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;
// const DB_HOST = process.env.DB_HOST;

console.log({ DB_HOST });

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
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
