import { PageSection } from "./page";

export interface NavigationLink {
  id: string;
  label: string;
  url: string;
}

export interface Menu {
  id: string;
  title: string;
  navigationLinks: NavigationLink[];
}

export interface GeneralLayout {
  headerMenu: Menu;
  footerMenu: Menu;
  contactEmail: string;
  siteTitle: string;
  siteDescription: string;
  logo: { url: string };
}

export interface Homepage {
  slug: string;
  title: string;
  pageSections: PageSection[];
}
