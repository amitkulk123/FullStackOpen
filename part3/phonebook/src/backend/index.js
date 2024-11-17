const express = require("express");
const morgan = require("morgan");

const app = express();

// Use morgan middleware with the 'tiny' configuration
app.use(express.json());
// app.use(morgan("tiny"));

// Defining a custom token for morgan to log the request body for POST requests
// morgan.token("req-body", (req) => {
//   if (req.method == "POST") {
//     return JSON.stringify(req.body);
//   }
//   return "";
// });

// app.use(
//   morgan(
//     ":method :url :status :res[content-length] - :response-time ms :req-body"
//   )
// );

const notes = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  if (notes) {
    response.json(notes);
  } else {
    response.status(404).end();
  }
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

let persons = [{}, {}, {}, {}];
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
