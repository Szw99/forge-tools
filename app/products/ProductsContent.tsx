"use client";

import { useSearchParams } from "next/navigation";
import PageShell from "../components/PageShell";
import Lightbox from "../components/Lightbox";
import catalog from "../data/catalog.json";

export default function ProductsContent() {
  const category = useSearchParams().get("category");
  const activeCategory = catalog.find((item) => item.slug === category) ?? catalog[0];

  return (
    <PageShell>
      <section className="sub-hero products-hero">
        <p className="section-kicker">PRODUCTS</p>
        <h1>Putty knives,<br /><span>scrapers and trowels.</span></h1>
        <p>Putty Knives · Scrapers · Plastering Trowels · Bricklaying Trowels</p>
      </section>
      <section className="catalog">
        <nav className="catalog-tabs" aria-label="Product categories">
          {catalog.map((item) => (
            <a key={item.slug} href={`/products?category=${item.slug}`} className={item.slug === activeCategory.slug ? "active" : ""} aria-current={item.slug === activeCategory.slug ? "page" : undefined}>
              <span>{item.label}</span>
              <small>{item.images.length} images</small>
            </a>
          ))}
        </nav>
        <div className="filter-row"><b>{activeCategory.label}</b><span>{activeCategory.images.length} product images</span></div>
        <div className="catalog-grid">
          {activeCategory.images.map((image, index) => (
            <article key={image}><Lightbox src={image} alt={`${activeCategory.label} product photo ${index + 1}`} /></article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
