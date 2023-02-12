import {
  Clipboard,
  Home,
  Layers,
  Link,
  MapPin,
  User,
  Zap,
  PhoneCall,
  Settings,
  ShoppingBag,
  Type,
} from "react-feather";

export const MainNavMenuItems = [
  {
    title: "HOME",
    navLink: "/home",
    icon: <Home />,
    type: "nav",
  },
 /*  {
    title: "APPLICATIONS",
    icon: <Clipboard />,
    type: "sub",
    navLink: "/application",
    children: [
      {
        path: "/application/worktops",
        title: "WORKTOPS",
        type: "link",
      },
      {
        path: "/application/exterior-floors",
        title: "EXTERIOR FLOORS",
        type: "link",
      },
      {
        path: "/application/interior-floors",
        title: "INTERIOR FLOORS",
        type: "link",
      },
      {
        path: "/application/facades",
        title: "PORCELAIN AND NATURAL STONE FOR FAÇADES",
        type: "link",
      },
      {
        path: "/application/interior-walls",
        title: "INTERIOR WALLS",
        type: "link",
      },
      {
        path: "/application/tables",
        title: "TABLES",
        type: "link",
      },
    ],
  }, */

  {
    title: "PRODUCTS",
    icon: <ShoppingBag />,
    type: "sub",
    navLink: "/product",
    children: [
      {
        path: "/product/crema-marfil-coto",
        title: "Crema Marfil Coto®",
        type: "link",
      },
      {
        path: "/product/marble",
        title: "Marble",
        type: "link",
      },
      {
        path: "/product/naturamia",
        title: "Naturamia®",
        type: "link",
      },
      {
        path: "/product/granite",
        title: " Granite",
        type: "link",
      },
      {
        path: "/product/techlam",
        title: "Techlam®",
        type: "link",
      },
      {
        path: "/product/naturamia-quartzites",
        title: "Naturamia® Quartzites",
        type: "link",
      },
      {
        path: "/product/tile-collection",
        title: "Tiles collection",
        type: "link",
      },
      {
        path: "/product/limestone-and-sandstone",
        title: " Limestone&Sandstone",
        type: "link",
      },
      {
        path: "/product/tavertine",
        title: " Travertine",
        type: "link",
      },
      {
        path: "/product/pavex",
        title: "PAVEX",
        type: "link",
      },
      {
        path: "/product/techlam-countertop",
        title: "Techlam® Countertop",
        type: "link",
      },
    ],
  },

  {
    title: "ABOUT",
    navLink: "/about",
    icon: <Settings />,
    type: "nav",
  },
  /* {
    title: "MODULES",
    icon: <Zap />,
    type: "sub",
    navLink: "/application",

    children: [
      {
        path: "/modules/button",
        title: "Button",
        type: "link",
      },
      { path: "/modules/label", title: "Label", type: "link" },
      { path: "/modules/title", title: "Title", type: "link" },
      {
        path: "/modules/image-ratio",
        title: "Image Ratio",
        type: "link",
        icon: "true",
      },
      { path: "/modules/footer", title: "Footer", type: "link" },
      { path: "/modules/blog", title: "Blog", type: "link" },
      { path: "/modules/brand", title: "Brand", type: "link" },
      { path: "/modules/testimonial", title: "Testimonial", type: "link" },
      { path: "/modules/full-banner", title: "Full Banner", type: "link" },
      { path: "/modules/about", title: "About", type: "link" },
      { path: "/modules/service", title: "Service", type: "link" },
      { path: "/modules/property", title: "Property", type: "link" },
      { path: "/modules/feature", title: "Feature", type: "link" },
      { path: "/modules/others", title: "others", type: "link" },
    ],
  }, */
  {
    title: "BLOGS",
    icon: <Type />,
    type: "link",
    navLink: "/blog",
  },

  {
    title: "CONTACT",
    icon: <PhoneCall />,
    type: "link",
    navLink: "/contact/",
  },
];

export const RightNavMenuItem = [
  {
    title: "language",
    option: [
      { lang: "en", language: "English" },
      { lang: "fr", language: "French" },
      { lang: "ar", language: "Arabic" },
      { lang: "es", language: "Spanish" },
    ],
  },
  {
    title: "cart",
  },
  {
    title: "currency",
    type: [
      {
        currency: "USD",
        name: "dollar",
        symbol: "$",
        value: 1,
      },
      {
        currency: "EUR",
        name: "euro",
        symbol: "€",
        value: 0.997,
      },
      {
        currency: "GBP",
        name: "pound",
        symbol: "£",
        value: 0.847,
      },
      {
        currency: "IND",
        name: "rupees",
        symbol: "₹",
        value: 79.9,
      },
    ],
  },
  { title: "user" },
];
