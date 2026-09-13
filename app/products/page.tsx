import Image from 'next/image';
import Link from 'next/link';
import PageShell from '../components/PageShell';
import { products } from '../../lib/products';

const categories = ['All Products', 'Putty Knife', 'Scraper', 'Bricklaying Trowel', 'Plastering Trowel', 'Mud Pan'];
export default function Products() {
  return <PageShell><section className="page-banner"><div><h1>Products</h1><p><Link href="/">Home</Link> / Products</p></div></section>
    <section className="products-layout"><div className="product-list"><div className="reference-product-grid">{products.map((product)=><article key={product.id} className="reference-product-card"><Link href={`/products/${product.id}`} className="reference-product-image"><Image src={product.mainImage} alt={`${product.name} ${product.model}`} fill sizes="(max-width: 991px) 50vw, 209px" /></Link><div className="reference-product-info"><h3><Link href={`/products/${product.id}`}>{product.model}</Link></h3></div></article>)}</div></div>
      <aside className="category-sidebar"><h3>Categories</h3><ul>{categories.slice(1).map((category)=><li key={category}><Link href="/products">{category}</Link></li>)}</ul><div className="sidebar-contact"><strong>Need more information?</strong><p>Contact us for catalogues, samples and quotations.</p><a href="https://wa.me/8613357064989" target="_blank" rel="noreferrer">Contact Us</a></div></aside>
    </section>
  </PageShell>;
}
