export interface IMenu {
  name: string,
  href: string,
  newTab: boolean
}

export const menu: IMenu[] = [
  {
    name: "Giới thiệu",
    href: "vuon-trong-nha",
    newTab: false,
  },
  {
    name: "S-Decor",
    href: "https://sdecor.space",
    newTab: true,
  },
  {
    name: "Sản Phẩm",
    href: "san-pham",
    newTab: false,
  },
  {
    name: "Tư Vấn",
    href: "tu-van",
    newTab: false,
  },
  {
    name: "Liên hệ",
    href: "lien-he",
    newTab: false,
  }
]