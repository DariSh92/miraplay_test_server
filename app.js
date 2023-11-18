// const express = require("express");
// const cors = require("cors");

// const clientsRouter = require("./routes/api/clients");

// const projectsRouter = require("./routes/api/projects");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/clients", clientsRouter);
// app.use("/api/projects", projectsRouter);

// app.use((req, res) => {
//   res.status(404).json({ message: "Not found" });
// });

// app.use((err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message: message });
// });

// module.exports = app;
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require('dotenv').config();

// const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");
// const filmsRouter = require("./routes/api/films");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
app.use(express.json());

// app.use("/api/contacts", contactsRouter);
// app.use("/api/users", usersRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = app;