import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Tariflar",
    url: "#tariflar",
  },
  {
    id: "1",
    title: "Xizmatlar",
    url: "#xizmatlar",
  },
  {
    id: "2",
    title: "Internet",
    url: "#internet",
  },
  {
    id: "3",
    title: "Rouming va tariflar",
    url: "#rouming",
  },
  {
    id: "4",
    title: "To'lov",
    url: "#tolov",
  },
  {
    id: "5",
    title: "FunZone",
    url: "#funzone",
  },
  {
    id: "6",
    title: "Exclusive",
    url: "#exclusive",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Mobil aloqa",
  "Internet xizmatlari",
  "SMS xizmatlar",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Katta Doimiy 40",
    text: "24GB Internet va 12GB cheksiz Instagram va Facebook.",
    date: "2023",
    status: "active",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Katta Doimiy 55",
    text: "44GB Internet va 22GB cheksiz.",
    date: "2023",
    status: "active",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Katta Doimiy 70",
    text: "70GB Internet va cheksiz Telegram, WhatsApp.",
    date: "2023",
    status: "active",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Cheksiz Aloqa",
    text: "Cheksiz SMS va qo'ng'iroqlarni o'z ichiga oladi.",
    date: "2023",
    status: "active",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Tez va ishonchli aloqa, Ucell xizmatlari orqali oson to'lov va keng qamrovli xizmatlar.";

export const collabContent = [
  {
    id: "0",
    title: "Tezkor aloqa",
    text: collabText,
  },
  {
    id: "1",
    title: "Xavfsiz to'lovlar",
  },
  {
    id: "2",
    title: "Keng qamrov hududi",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Katta Doimiy 40",
    description: "24 GB internet, 12GB cheksiz social media",
    price: "40 000 UZS",
    features: [
      "Cheksiz Instagram va Facebook",
      "24GB Internet",
      "40 000 UZS Oylik to'lov",
    ],
  },
  {
    id: "1",
    title: "Katta Doimiy 55",
    description: "44 GB internet, cheksiz Facebook",
    price: "55 000 UZS",
    features: [
      "Cheksiz Telegram va Youtube",
      "44GB Internet",
      "55 000 UZS Oylik to'lov",
    ],
  },
  {
    id: "2",
    title: "Katta Doimiy 70",
    description: "70 GB internet, cheksiz Telegram",
    price: "70 000 UZS",
    features: [
      "Cheksiz Telegram va WhatsApp",
      "70GB Internet",
      "70 000 UZS Oylik to'lov",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Tezkor aloqa",
    text: "Eng tezkor internet va aloqa xizmatlari.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Keng qamrov",
    text: "O'zbekiston bo'ylab keng qamrov hududi.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Qulay tariflar",
    text: "Har qanday ehtiyojga mos tariflar.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Ishonchli to'lovlar",
    text: "Tez va xavfsiz to'lov usullari.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Qo'ng'iroqlar",
    text: "Cheksiz qo'ng'iroqlar va SMS paketlari.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "24/7 Mijozlar qo'llab-quvvatlash",
    text: "Sizning barcha savollaringizga 24/7 javob.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://facebook.com/ucell",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://instagram.com/ucell",
  },
  {
    id: "2",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/ucell",
  },
  {
    id: "3",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/ucell",
  },
];
