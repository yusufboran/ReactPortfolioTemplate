import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Yusuf",
  lastName: "Boran",
  position: "Mobile Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  githubUserName:"yusufboran",
  miniBio: [
    {
      emoji: "🏠",
      text: "Burdur",
    },
    {
      emoji: "💼",
      text: "RabbiT",
    },
    {
      emoji: "📧",
      text: "yusuf.boran@rbbt.com.tr",
    },
  ],
  socials: [
    {
      link: "https://instagram.com/yusufboraan",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/yusufboran",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/yusufboran/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/yusufboraan",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Selam! Ben kendini geliştirmeye çalışan bir mobile developerım. Bilgisayar mühendisliği lisans eğitimini tamamladım. Lisans bitirme projesi için hayvan takip mobil uygulaması geliştirdim.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "react-native",
      "flutter",
      "php",
      "git",
      "github",
      "html5",
      "css3",
    ],
    exposedTo: ["nodejs", "python", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "şiir",
      emoji: "📖",
    },

    {
      label: "dizi film",
      emoji: "🎥",
    },
    {
      label: "yemek",
      emoji: "👨‍🍳",
    },
    {
        label: "borsa",
        emoji: "📈",
      },
  
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Project 1",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Project 2",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock2,
    },
    {
      title: "Project 3",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock3,
    },
    {
      title: "Project 4",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock4,
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock5,
    },
  ],
};
