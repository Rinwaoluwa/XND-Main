export interface NavLink {
  name: string;
  route: string;
  dropdownItems?: string[];
}

export const navlinks: NavLink[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Products",
    route: "services",
    dropdownItems: ["service 1", "service 2", "service 3"],
  },
  {
    name: "Apply as merchant",
    route: "",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];
