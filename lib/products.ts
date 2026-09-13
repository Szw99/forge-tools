export type Product = {
  id: string;
  name: string;
  model: string;
  category: string;
  mainImage: string;
  detailImages: string[];
  material: string;
  size: string;
  handle: string;
  finish: string;
  use: string;
};

// 产品目录数据：每个产品只指定一张主图，其余图片只在详情页使用。
export const products: Product[] = [
  { id: 'pt-01', name: 'Plastering Trowel', model: 'FT-PT01', category: 'Plastering Trowel', mainImage: '/assets/plaster/p-1.jpg', detailImages: ['/assets/plaster/p-2.jpg', '/assets/plaster/p-3.jpg'], material: 'Stainless steel', size: '1–6 inch', handle: 'PP handle', finish: 'Polished', use: 'Plastering and finishing' },
  { id: 'pt-02', name: 'Plastering Trowel', model: 'FT-PT02', category: 'Plastering Trowel', mainImage: '/assets/plaster/p-4.jpg', detailImages: ['/assets/plaster/p-5.jpg', '/assets/plaster/p-6.jpg'], material: 'Carbon steel', size: '4–12 inch', handle: 'Two-colour PP handle', finish: 'Mirror polished', use: 'Wall plastering and smoothing' },
  { id: 'pk-01', name: 'Putty Knife', model: 'FT-PK01', category: 'Putty Knife', mainImage: '/assets/plaster/p-7.jpg', detailImages: ['/assets/plaster/p-8.jpg', '/assets/plaster/p-9.jpg'], material: 'Stainless steel', size: '1–6 inch', handle: 'Ergonomic PP handle', finish: 'Satin', use: 'Putty, filler and paint work' },
  { id: 'pk-02', name: 'Putty Knife', model: 'FT-PK02', category: 'Putty Knife', mainImage: '/assets/plaster/p-10.jpg', detailImages: ['/assets/plaster/p-11.jpg', '/assets/plaster/p-12.jpg'], material: 'Carbon steel', size: '2–10 inch', handle: 'Wooden handle', finish: 'Polished', use: 'Scraping and surface preparation' },
  { id: 'sc-01', name: 'Wall Scraper', model: 'FT-SC01', category: 'Scraper', mainImage: '/assets/plaster/p-13.jpg', detailImages: ['/assets/plaster/p-14.jpg', '/assets/plaster/p-15.jpg'], material: 'Stainless steel', size: '4 inch', handle: 'PP handle', finish: 'Polished', use: 'Removing residue and old coatings' },
  { id: 'bt-01', name: 'Bricklaying Trowel', model: 'FT-BT01', category: 'Bricklaying Trowel', mainImage: '/assets/plaster/p-16.jpg', detailImages: ['/assets/plaster/p-17.jpg', '/assets/plaster/p-18.jpg'], material: 'Carbon steel', size: '10–12 inch', handle: 'Rubberized handle', finish: 'Black coated', use: 'Bricklaying and masonry work' },
];

export function getProduct(id: string) { return products.find((product) => product.id === id); }
