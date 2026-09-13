import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '../../components/PageShell';
import { getProduct, products } from '../../../lib/products';

export function generateStaticParams() { return products.map((product) => ({ id: product.id })); }
export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
 const {id}=await params; const product=getProduct(id); if(!product) notFound();
 return <PageShell><section className="page-banner"><div><h1>Products</h1><p><Link href="/">Home</Link> / <Link href="/products">Products</Link> / {product.model}</p></div></section>
  <section className="detail-reference-layout"><div className="reference-detail"><div className="detail-overview"><div className="detail-main-image"><Image src={product.mainImage} alt={`${product.name} ${product.model}`} fill sizes="(max-width: 991px) 90vw, 420px" /></div><div className="detail-info"><h2>{product.model}</h2><p className="detail-name">{product.name}</p><div className="detail-rule"/><p>Professional Forge Tools {product.name.toLowerCase()} for reliable surface preparation and finishing.</p><a className="detail-whatsapp" href="https://wa.me/8613357064989" target="_blank" rel="noreferrer">Inquire Now</a></div></div><div className="reference-detail-section"><h3>Product Details</h3><div className="reference-specs"><div><b>Material</b><span>{product.material}</span></div><div><b>Available size</b><span>{product.size}</span></div><div><b>Handle</b><span>{product.handle}</span></div><div><b>Finish</b><span>{product.finish}</span></div><div><b>Application</b><span>{product.use}</span></div><div><b>Model</b><span>{product.model}</span></div></div></div><div className="reference-detail-section"><h3>Product Photos</h3><div className="reference-detail-gallery">{product.detailImages.map(image=><a href={image} target="_blank" rel="noreferrer" key={image}><Image src={image} alt={`${product.model} product detail`} fill sizes="(max-width: 650px) 90vw, 35vw" /></a>)}</div></div></div><aside className="category-sidebar"><h3>Categories</h3><ul>{['Putty Knife','Scraper','Bricklaying Trowel','Plastering Trowel','Mud Pan'].map(category=><li key={category}><Link href="/products">{category}</Link></li>)}</ul></aside></section>
 </PageShell>;
}
