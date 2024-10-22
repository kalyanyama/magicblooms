export const siteInformation = {
  name: "magicblooms",
  suffix: ".com",
};

export const domainInformation = {
  domain: "www." + siteInformation.name + siteInformation.suffix,
  developement: "https://localhost:3120",
  production: "https://api." + siteInformation.name + siteInformation.suffix,
};

export const routingLinks = [
  { link: "#", label: "Home" },

  {
    link: "#gallery",
    label: "Gallery",
  },
  {
    link: "#about",
    label: "About",
  },
  { link: "#booking", label: "Book a call" },
];
