export interface Category {
  name: string;
  slug: string;
}

export const categories: Category[] = [
  { name: "전자제품", slug: "electronics" },
  { name: "의류", slug: "clothing" },
  { name: "가구/가전제품", slug: "furniture_appliances" },
  { name: "생필품", slug: "daily_supplies" },
  { name: "뷰티/미용", slug: "beauty" },
  { name: "도서", slug: "books" },
  { name: "반려동물용품", slug: "pet_supplies" },
  { name: "기타", slug: "etc" },
  { name: "찜", slug: "wishlist" },
];
