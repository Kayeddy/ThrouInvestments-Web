import {
  Bancolombia,
  AyC,
  Binance,
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
    name: "Binance",
    image: Binance,
    styles: "lg:h-[40px] lg:w-[190px] h-[20px] w-[95px]",
  },
  {
    name: "Arquitectura & concreto",
    image: AyC,
    styles: "lg:h-[110px] lg:w-[180px] h-[55px] w-[90px]",
  },
  {
    name: "Forbes",
    image: Forbes,
    styles: "lg:h-[30px] lg:w-[150px] h-[15px] w-[75px]",
  },
  {
    name: "Contructora capital",
    image: Capital,
    styles: "lg:h-[40px] lg:w-[130px] h-[20px] w-[65px]",
  },
  {
    name: "Bancolombia",
    image: Bancolombia,
    styles: "lg:h-[30px] lg:w-[271px] h-[15px] w-[135.5px]",
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
