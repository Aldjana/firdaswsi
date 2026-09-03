const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "SmartTask Backend fonctionne !"
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Backend démarré sur le port 3000");
});