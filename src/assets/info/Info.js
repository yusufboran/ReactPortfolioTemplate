import self from "../../assets/img/self.jpg"; 
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Yusuf",
  lastName: "Boran",
  position: "Mobile Developer",
  selfPortrait: self, 
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
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
      link: "https://rbbt.com.tr/",
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
  ],
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
  },
  hobbies: [
    {
      emoji: "📖",
    },

    {
      emoji: "🎥",
    },
    {
      emoji: "👨‍🍳",
    },
    {
      emoji: "📈",
    },
  ],
  
};
