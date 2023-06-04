import {
  Bancolombia,
  AyC,
  Capital,
  Forbes,
  Home,
  Search,
  Saved,
  Learn,
  Help,
  Logout,
  User_notifications_icon,
  User_profile_icon,
  Theme_dark_icon,
  Home_icon_light,
  Search_icon_light,
  Saved_icon_light,
  Learn_icon_light,
  Help_icon_light,
  Logout_icon_light,
  Theme_dark_icon2,
  AirBnb,
  Binance,
  Canvas,
  SuperIntendence,
  Nomad,
  Vicaria,
} from "../assets";
import { handleThemeChange } from "../utils";

let theme = "light";

export const changeTheme = (currentTheme) => {
  theme = currentTheme;
  console.log(theme);
};

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: theme === "dark" ? Home_icon_light : Home,
    link: "",
  },
  {
    name: "search",
    imgUrl: theme === "dark" ? Search_icon_light : Search,
    link: "",
  },
  {
    name: "saved",
    imgUrl: theme === "dark" ? Saved_icon_light : Saved,
    link: "",
  },
  {
    name: "learn",
    imgUrl: theme === "dark" ? Learn_icon_light : Learn,
    link: "",
  },
  {
    name: "help",
    imgUrl: theme === "dark" ? Help_icon_light : Help,
    link: "",
  },
  {
    name: "logout",
    imgUrl: theme === "dark" ? Logout_icon_light : Logout,
    link: "",
  },
];

export const mobileNavLinks = [
  {
    name: "dashboard",
    imgUrl: Home,
    link: "/",
  },
  {
    name: "search",
    imgUrl: Search,
    link: "/search",
  },
  {
    name: "notifications",
    imgUrl: User_notifications_icon,
    link: "/notifications",
  },
  {
    name: "profile",
    imgUrl: User_profile_icon,
    link: "/notifications",
  },
];

export const mobileDrawerlinks = [
  {
    name: "Guardado",
    imgUrl: Saved,
    link: "/search",
  },
  {
    name: "Aprender",
    imgUrl: Learn,
    link: "/notifications",
  },
  {
    name: "Soporte y ayuda",
    imgUrl: Help,
    link: "/notifications",
  },
];

export const investmentTypes = [
  {
    name: "Retorno corto",
    description: "Se estima el retorno completo en menos de 1 año",
  },
  {
    name: "Retorno medio",
    description: "Se estima el retorno completo entre 1 año a 3 años",
  },
  {
    name: "Retorno largo",
    description: "Se estima el retorno completo en 3 años o más",
  },
  {
    name: "Ingreso pasivo",
    description: "Ingresos constantes sin finalización",
  },
];

export const contributors = [
  {
    name: "AirBnb",
    image: AirBnb,
    styles:
      "md:h-[35px] md:w-[140px] xl:h-[40px] xl:w-[190px] h-[20px] w-[95px] grayscale",
  },
  {
    name: "Binance",
    image: Binance,
    styles:
      "md:h-[60px] md:w-[120px] xl:h-[80px] xl:w-[160px] h-[55px] w-[90px] grayscale",
  },
  {
    name: "SuperIntendence",
    image: SuperIntendence,
    styles:
      "md:h-[80px] md:w-[140px] xl:h-[110px] xl:w-[170px] h-[15px] w-[75px] grayscale",
  },
  {
    name: "Canvas",
    image: Canvas,
    styles: "lg:h-[40px] lg:w-[130px] h-[20px] w-[65px]",
  },
  {
    name: "Nomad",
    image: Nomad,
    styles:
      "md:h-[60px] md:w-[140px] xl:h-[100px] xl:w-[271px] h-[15px] w-[135.5px] grayscale",
  },
  {
    name: "Vicaria",
    image: Vicaria,
    styles:
      "md:h-[60px] md:w-[140px] xl:h-[100px] xl:w-[300px] h-[15px] w-[135.5px] grayscale",
  },
];

export const perks = [
  {
    name: "Bancolombia",
    image: Bancolombia,
    styles: "lg:h-[30px] lg:w-[271px] h-[15px] w-[135.5px]",
  },
];

export const campaignDetails = [
  "Descripción",
  "Galería",
  "Documentos",
  "Actualizaciones",
  "FAQS",
];

export const userProfileOptions = [
  [
    "Mis proyectos",
    "Balance y movimientos",
    (amount) => {
      return `Guardados(${amount})`;
    },
    "Editar perfil",
  ],

  [
    "Proyectos",
    "Movimientos",
    (amount) => {
      return `Guardados(${amount})`;
    },
    "Perfil",
  ],
];
