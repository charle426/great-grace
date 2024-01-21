const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const process = require("process");
const multer = require("multer");
const path = require("path");
const app = express();

dotenv.config({ path: "./config.env" });
app.use(express.json(bodyParser));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

main().catch((err) => console.log("this is the error: " + err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://charlesakachi476:JxjFpqW8kbhQ3QMY@cluster0.peyi6fq.mongodb.net/"
  );
}
const eventSchema = mongoose.Schema({
  name: String,
  date: String,
  time: String,
  speaker: String,
  file: String,
});

const prayerSchema = mongoose.Schema({
    text: String,
    author: String
})

const PrayerModel = mongoose.model("Prayer", prayerSchema);

const EventModel = mongoose.model("Event", eventSchema);

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// app.get("/adminData", (req, res) => {
//   Blog.find({})
//     .then((blogPosts) => {
//       res.json({
//         message: blogPosts,
//       });
//     })
//     .catch((err) => console.log(err));
// });

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    return callback(null, "./public/uploads");
  },
  filename: function (req, file, callback) {
    return callback(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// app.post("/upload", upload.single("file"), (req, res) => {
//    console.log(req.file.filename);
//    console.log(req.body);
// })

app.post("/event", upload.single("file"), (req, res) => {
  const { name, date, time, speaker } = req.body;
  const file = req.file.filename;
  const post = { name: name, date: date, time: time, speaker: speaker ,file: file };
  EventModel.create(post)
    .then(() => console.log("created in the database"))
    .catch((err) => console.log(err));

  console.log(post);
  return;
});

app.get("/event", (req, res) => {
  EventModel.find({})
    .then((post) => {
      res.json({
        message: post,
      });
    })
    .catch((err) => console.log(err));
});

app.get("/prayer", (req, res) => {
  PrayerModel.find({})
    .then((post) => {
      res.json({
        message: post,
      });
    })
    .catch((err) => console.log(err));
});

app.put("/edit/prayer", (req, res) => {
  const requestedUrl = { "for" : "prayer" };
  PrayerModel.updateOne(requestedUrl, {
    $set: {
      text: req.body.text,
      author: req.body.author,
    },
  })
    .then((post) => {
      console.log(post);
    })
    .catch((err) => console.log(err));
});

app.delete("/delete/:id", (req, res) => {
  const requestedUrl = { _id: req.params.id };
  EventModel.deleteOne(requestedUrl)
    .then(() => console.log("Deleted Successfully"))
    .catch((err) => res.send(err));
});

app.get("*", (req, res) => {
  res.send("404 this page does not exist");
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log("listening on port " + port);
});
