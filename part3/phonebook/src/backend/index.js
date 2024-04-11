const express = require("express");
const morgan = require("morgan");

const app = express();

// Use morgan middleware with the 'tiny' configuration
app.use(morgan("tiny"));

// Your routes would be here

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
