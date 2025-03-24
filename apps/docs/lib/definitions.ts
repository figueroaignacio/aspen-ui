export type Features = {
  title: string;
  description: string;
  icon: string;
};

export type DocItem = {
  title: string;
  href: string;
};

export type DocSection = {
  title: string;
  items: DocItem[];
};
