export interface IItem {
  icon?: string,
  iconColor?: string,
  name?: string,
  href: string,
  newTab: boolean,
}

export interface IFooter {
  name?: string,
  long?: boolean,
  flex?: boolean,
  items?: IItem[]
}

export const socials: IItem[] = [
  {
    icon: 'facebook',
    name: "",
    iconColor: "#2a9ef1",
    href: '/',
    newTab: true,
  },
  {
    icon: 'tiktok',
    name: "",
    iconColor: "#fff",
    href: '/',
    newTab: true,
  },
  {
    icon: 'youtube',
    name: "",
    iconColor: "#ff1512",
    href: '/',
    newTab: true,
  },
]