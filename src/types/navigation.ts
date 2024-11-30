export type NavigationLink = {
  title: string;
  url: string;
  icon: React.ElementType;
};

export type NavigationGroup = {
  title: string;
  links: NavigationLink[];
};
