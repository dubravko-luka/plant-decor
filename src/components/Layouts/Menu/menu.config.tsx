import { administration, houseManagement, rightsGroup } from "@/assets/images/icon"

export interface IMenuConfig {
  name: string,
  icon?: string,
  href?: string,
  childs?: IMenuConfig[] | []
}

export const HouseManagement: IMenuConfig = {
  name: "Quản lý nhà",
  icon: houseManagement,
  href: "",
  childs: [
    {
      name: "Nhà trọ/CHDV",
      icon: houseManagement,
      href: "nha-tro-chdv"
    },
    {
      name: "Phòng trọ",
      icon: houseManagement,
      href: "/motel-room"
    },
    {
      name: "Cập nhật điện nước",
      icon: houseManagement,
      href: "cap-nhat-dien-nuoc"
    },
    {
      name: "Chi phí & nguồn thu khác",
      icon: houseManagement,
      href: "chi-phi-nguon-thu-khac"
    },
    {
      name: "Thiết bị vật tư",
      icon: houseManagement,
      href: "thiet-bi-vat-tu"
    },
    {
      name: "Bán phòng",
      icon: houseManagement,
      href: "ban-phong"
    },
    {
      name: "Khách xem phòng",
      icon: houseManagement,
      href: "khach-xem-phong"
    }
  ]
}

export const Administration: IMenuConfig = {
  name: "Quản trị",
  icon: administration,
  href: "",
  childs: [
    {
      name: "Duyệt thông tin thanh toán",
      icon: administration,
      href: "duyet-thong-tin-thanh-toan"
    },
    {
      name: "Lịch sử xác nhận thanh toán",
      icon: administration,
      href: "lich-su-xac-nhan-thanh-toan"
    },
    {
      name: "Theo dõi tiền mặt",
      icon: administration,
      href: "theo-doi-tien-mat"
    },
    {
      name: "Báo cáo thu tiền",
      icon: administration,
      href: "bao-cao-thu-tien"
    },
    {
      name: "Thu chi hàng ngày",
      icon: administration,
      href: "thu-chi-hang-ngay"
    },
    {
      name: "Doanh số",
      icon: administration,
      href: "doanh-so"
    },
    {
      name: "Log phòng",
      icon: administration,
      href: "log-phong"
    },
    {
      name: "Thu tiền nhân viên",
      icon: administration,
      href: "thu-tien-nhan-vien"
    },
    {
      name: "Danh sách khách ở",
      icon: administration,
      href: "danh-sach-khach-o"
    },
    {
      name: "Danh sách khách đã dọn đi",
      icon: administration,
      href: "danh-sach-khach-da-don-di"
    },
    {
      name: "Danh sách phòng",
      icon: administration,
      href: "danh-sach-phong"
    }
  ]
}

export const RightsGroup: IMenuConfig = {
  name: "Nhóm quyền",
  icon: rightsGroup,
  href: "",
  childs: [
    {
      name: "Nhóm quyền",
      icon: rightsGroup,
      href: "nhom-quyen"
    },
    {
      name: "Nhân viên",
      icon: rightsGroup,
      href: "nhan-vien"
    },
    {
      name: "Tổng phòng hệ thống",
      icon: rightsGroup,
      href: "tong-phong-he-thong"
    },
  ]
}

export const menu: IMenuConfig[] = [
  HouseManagement,
  Administration,
  RightsGroup
]