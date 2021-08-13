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
}

export interface BlogObj {
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
