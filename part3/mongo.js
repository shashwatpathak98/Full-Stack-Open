const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("Give password as an argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://shashwatp98:${password}@cluster0.c1hjzi5.mongodb.net/phoneBookDb?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const phoneBookSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
});

const Phonebook = mongoose.model("Phonebook", phoneBookSchema);

// const phonebook = new Phonebook({
//   name: "Ada Lovelace",
//   number: "040-1231236",
// });

// phonebook.save().then((result) => {
//   console.log(`added ${result}`);
//   mongoose.connection.close();
// });

Phonebook.find({}).then((results) => {
  console.log(`phonebook:`);
  results.forEach((result) => console.log(`${result.name} ${result.number}`));
  mongoose.connection.close();
});
