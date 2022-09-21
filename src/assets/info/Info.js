import self from "../../assets/img/self.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Yusuf",
  lastName: "Boran",
  position: "Mobile Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  githubUserName: "yusufboran",
  miniBio: [
    {
      emoji: "🏘️",
      text: "Burdur",
      link: "https://goo.gl/maps/VF87aioPdjUuyQSb7",
    },
    {
      emoji: "💼",
      text: "RabbiT",
      link: "https://rabbit.com.tr/",
    },
    {
      emoji: "📧",
      text: "yusuf.boran@rbbt.com.tr",
      link: "mailto:yusuf.boran@rbbt.com",
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


  links : [
    {
      name: "Home",
      to: "/",
      active: "home",
    },
    {
      name: "About Me",
      to: "/about",
      active: "about",
    },
  
    {
      name: "Portfolio",
      to: "/portfolio",
      active: "portfolio",
    },
  ],
};
