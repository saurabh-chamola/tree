import express from "express";
import dotenv from "dotenv";
import dbConnect from "./src/configs/db.js";
import categoryRoutes from "./src/routes/category.js";
import errorHandler from "./src/utils/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

//@@DESC--Middleware section
app.use(express.json({ limit: "16kb" }));

// @@DESC--Database connection section
dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening to port ${PORT}`);
    });
  })
  .catch((e) => {
    console.error("Database connection failed:", e.message);
  });

//@@DESC--Routes section
app.use("/api/v1/category", categoryRoutes);

app.get("/", (req, res) => {
  res.send({ message: "------TREE-ALGORITHM-BASED-TASKS----" });
});

// @@DESC-- Error handling section
app.use(errorHandler);


