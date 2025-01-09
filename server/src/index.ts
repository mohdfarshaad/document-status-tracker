import { app } from "./app";
import { PORT } from "./constants";

app.listen(PORT, () => {
  console.log("App is running on : ", PORT);
});
