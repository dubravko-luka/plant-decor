export interface IMenu {
  name: string,
  href: string,
  newTab: boolean
}

export const menu: IMenu[] = [
  {
    name: "Giới thiệu",
    href: "vuon-trong-nha",
    newTab: true,
  },
  {
    name: "S-Decor",
    href: "https://sdecor.space",
    newTab: true,
  },
  {
    name: "Sản Phẩm",
    href: "san-pham",
    newTab: true,
  },
  {
    name: "Tư Vấn",
    href: "tu-van",
    newTab: true,
  },
  {
    name: "Liên hệ",
    href: "lien-he",
    newTab: true,
  }
]