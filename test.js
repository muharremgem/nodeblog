const mongoose = require("mongoose");

const Post = require("./models/post");

mongoose.connect("mongodb://localhost:27017/nodeblog_db");

mongoose.connection.once("open", async () => {
  try {
    const newPost = new Post({
      title: "Hello This is First 5",
      content: "Hello This is first post content 5",
    });
    const savedPost = await newPost.save();
    console.log("Yeni post başarıyla kaydedildi:");
    console.log(savedPost);
  } catch (err) {
    console.error("Post kaydetme hatası: " + err);
  } finally {
    mongoose.connection.close();
  }
});

