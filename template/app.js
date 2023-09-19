const app = require("./src/config/express");
require("./src/config/db");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
