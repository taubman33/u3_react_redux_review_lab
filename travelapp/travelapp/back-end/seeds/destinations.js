const db = require("../db/index");
const { Destination } = require("../models/index");

db.on("error", console.error.bind(console, "MongoDb connection error:"));

const main = async () => {
  const destinations = [
    {
      location: "Akihabara, Tokyo, Japan (Electric Town)",
      img: "https://images.unsplash.com/photo-1580094573009-7a220cc896b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWtpaGFiYXJhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      desc: "Akihabara is known to be the place for all things electronics, anime, and otaku culture. Many shops here sell video games, anime, manga, and electronic goods.",
    },
    {
      location: "Ueno Park, Tokyo, Japan",
      img: "https://miro.medium.com/max/1200/1*soWm4C3NUVP2GGdU9mKypA.jpeg",
      desc: "Ueno Park is known to be a place of vibrancy. This expansive park leads to many station houses and museums. Many cherry blossom trees grow here.",
    },
    {
      location: "Shinjuku, Tokyo, Japan",
      img: "https://www.thetokyochapter.com/wp-content/uploads/2018/04/shinjuku.jpg",
      desc: "Shinjuku is known for its inclusive and friendly LGBTQ community. This area has various bars, restaurants, nightclubs, and wonderful atmosphere.",
    },
    {
      location: "Shibuya, Tokyo, Japan",
      img: "https://www.theinvisibletourist.com/wp-content/uploads/2020/05/featured_152.jpg",
      desc: "Shibuya is known to be popular for youth and shopping. There is a lot of entertainment and fashion.",
    },
    {
      location: "Harajuku, Tokyo, Japan",
      img: "https://www.gotokyo.org/en/destinations/western-tokyo/harajuku/images/area031_1008_30.jpg",
      desc: "Harajuku is known for cute styles and culture. It is full of bright colors and trendy shopping centers, along with pop-culture vibes.",
    },
  ];
  await Destination.insertMany(destinations);
  console.log("destinations displaying");
};

const run = async () => {
  await main();
  db.close();
};

run();
