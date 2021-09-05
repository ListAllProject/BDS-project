export interface Parameters {
  limit?: number;
  page?: number;
  search?: string;
  is_outstanding?: boolean;
  project_id?: number;
}

export interface ResBlogs {
  limit: number;
  page: number;
  search: string;
  is_outstanding?: boolean;
  count?: number;
  list_blog: BlogObj[];
  total_page?: number;
  url?: string
}

export interface BlogObj {
  created_at: string;
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  content_detail: string;
  seo_description: string;
  seo_title: string;
  seo_keywords: string;
  url: string;
  alt_blog: string;
  author: string;
  schema: string;
  category_blog: number;
  is_outstanding: number;
  is_active: number;
}

export interface DetailProject {
  city: string;
  created_at: string;
  detail_project: {
    building_density: string;
    img: string;
    size: string;
    sub_title: string;
    title: string;
  };
  district: string;
  id: number;
  introduction: string;
  investor: string;
  is_active: number;
  main_title: string;
  slogan: string;
  url: string;
}

export interface ProjectFilterObj {
  cities: Array<string>;
  districts: Array<string>;
  investors: Array<string>;
}
export interface BannerObj {
  id: number;
  value: string;
  type: string;
  rank: number;
  project_id: number;
  project_title: string;
}

export interface ReasonObj {
  id: number;
  img: string;
  title: string;
  sub_title: string;
  rank: number;
  project_id: number;
  project_title: string;
}

export interface ImageObj {
  id: number;
  value: string;
  project_id: number;
  rank: number;
  project_title: string;
}

export interface productsObj {
  STT: number;
  TotalRows: number;
  MaDA: number;
  DiaChi: string;
  MaTang: number;
  ViTri: number;
  TenKhu: string;
  MaKhu: number;
  MaHuong2: number;
  MaLBDS: number;
  MaSP: number;
  MaTT: number;
  MaLM: number;
  KyHieu: string;
  TenPhuongHuong: string;
  MauNen: number;
  TenTT: string;
  Tang: string;
  PhongNgu: string;
  SoPhongNgu: string;
  DTTimTuong: number;
  DTThongThuy: number;
  HinhAnh: string;
  DonGiaChuaVAT: number;
  TongGiaChuaVAT: number;
  TienVAT: number;
  TongGiaGomVAT: number;
  PhiBaoTri: number;
  TongGiaTriHDMB: number;
  DonGiaThongThuy: number;
  SoPhongVS: string;
  TenDA: string;
  NoiDung: string;
  Link_Video: string;
  Link_360: string;
}

export interface projectObj {
  TenDA: string;
  MaDA: number;
  icon: string;
}

export interface priceObj {
  ID: number;
  TenKhoangGia: string;
  Min: number;
  Max: number;
}
export interface LoginRequest {
  maCTDK: string;
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  phone: string;
  username: string;
  password: string;
  passwordRe: string;
  email: string;
  maCTDK: string;
}

export interface FogotPasswordRequest {
  maCTDK: string;
  email: string;
  phone: string;
}

export interface Block {
  maKhu: number,
  tenKhu: string,
  detailKhu: DetailKhu[],
  floor: Floor[],
  location: BLocation[],
  detailMaTT: DetailMaTT[],
}

export interface DetailKhu {
  STT: number,
  TenKhu: string,
  DaBan: number,
  Tong: number
}

export interface Floor {
  maTang: number,
  tenTang: string,
  detailFloor: DetailFloor[],
}

export interface DetailFloor {
  STT: 9,
  TenViTri: 09,
  PhongNgu: string,
  TenPhuongHuong: string,
  DTThongThuy: number,
  MaDA: number,
  SoPhongVS: string,
  TenDA: string,
  DiaChi: string,
  TenKhu: string,
  MaSP: number,
  MaTT: number,
  MaLM: number,
  KyHieu: string,
  TongGiaGomPBTView: string,
  icon: string,
  MauNen: number,
  TenTT: string,
  Tang: string,
  DTTimTuong: number,
  DonGiaChuaVAT: number,
  TongGiaChuaVAT: number,
  TienVAT: number,
  TongGiaGomVAT: number,
  PhiBaoTri: number,
  TongGiaTriHDMB: number,
  DonGiaThongThuy: number,
  MaVT: number,
  MaTang: number,
  MaNhomGioHang: number,
  SapXep: number,
}

export interface BLocation {
  maVT: number,
  tenVT: string,
  detailVT: DetailVT[],
}

export interface DetailVT {
  TenViTri: string,
  PhongNgu: string,
  TenPhuongHuong: string,
  DTThongThuy: number,
  SapXep: number,
}

export interface DetailMaTT {
  STT: number,
  TenTT: string,
  Icon: string,
  SoLuong: number
}