import { app } from "./app";
import { PORT } from "./constants";
import { connectDB } from "./db";

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("App is running on : ", PORT);
    });
  })
  .catch((error) => {
    throw error;
  });
