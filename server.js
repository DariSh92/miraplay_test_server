const mongoose = require("mongoose");
const app = require("./app");
mongoose.set("strictQuery", true);

const { DB, PORT } = process.env;



mongoose
mongoose
  .connect(DB)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Database connection successful. API is on port: ${PORT}`)
    )
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
  // .connect(DB, {
  //   usenewurlparser: true,
  //   useunifiedtopology: true,
  // })
  // .then(() => {
  //   app.listen(3000);
  //   console.log(`Server running. Use our API on port: 3000`);
  // })
  // .catch((error) => {
  //   console.log(`can not connect to database, ${error}`);
  //   process.exit(1);
  // });
