export interface IMenuConfig {
  name: string,
  icon?: string,
  href?: string,
  danger?: boolean,
}

export const menu: IMenuConfig[] = [
  {
    name: "Thông tin người dùng",
    icon: "",
    href: "thong-tin-nguoi-dung"
  },
  {
    name: "Thay đổi mật khẩu",
    icon: "",
    href: "thay-doi-mat-khau"
  },
  {
    name: "Xóa tài khoản",
    icon: "",
    danger: true,
    href: "xoa-tai-khoan"
  },
  {
    name: "Thông tin bên cho thuê",
    icon: "",
    href: "thong-tin-ben-cho-thue"
  },
  {
    name: "Logout",
    icon: "",
    href: "logout"
  },
]