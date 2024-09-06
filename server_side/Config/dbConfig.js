import appConfig from "./config.js";
import db from "../Models/Models.js";

const { MONGO_URI } = appConfig;

db.mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB connected');
    initRole();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
async function initRole() {
  try {
    const count = await db.role.estimatedDocumentCount();
    if (count === 0) {
      await new db.role({ name: "user" }).save();
      console.log("added 'user' to roles collection");


      await new db.role({ name: "moderator" }).save();
      console.log("added 'moderator' to roles collection");


      await new db.role({ name: "admin" }).save();
      console.log("added 'admin' to roles collection");

      new db.role({ name: "author" }).save();
      console.log("added 'author' to roles collection");
    }

  } catch(err) {
    console.log('error', err);

  }
}
    
  
export default db;
