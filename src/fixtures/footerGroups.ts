interface footerGroup {
  header: string;
  links: { title: string; href: string }[];
}

export const footerGroups: footerGroup[] = [
  {
    header: "Features",
    links: [
      { title: "Trade Gift cards", href: "" },
      { title: "Swap currencies", href: "" },
      { title: "Seller account", href: "" },
      { title: "Merchant account", href: "" },
    ],
  },
  {
    header: "Company",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Blog", href: "" },
      { title: "Be a merchant", href: "" },
      { title: "Press", href: "" },
      { title: "Partners", href: "" },
    ],
  },
  {
    header: "Legal",
    links: [
      { title: "FAQ", href: "/faq" },
      { title: "Privacy", href: "" },
      { title: "Terms", href: "/terms" },
    ],
  },
];
