export interface Parameters {
  limit: number;
  page: number;
  search: string;
  is_outstanding: boolean;
}

export interface BlogObj {
  id: number;
  title: string;
  description: string;
  thump_image: string;
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
