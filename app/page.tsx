"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./components/Lightbox";
import WhatsAppIcon from "./components/WhatsAppIcon";

const productCategories = [
  { name: "Putty Knives", slug: "putty-knives", image: "/assets/home/putty-knife.webp" },
  { name: "Scrapers", slug: "scrapers", image: "/assets/home/scraper.webp" },
  { name: "Plastering Trowels", slug: "plastering-trowels", image: "/assets/home/plastering-trowel.webp" },
  { name: "Bricklaying Trowels", slug: "bricklaying-trowels", image: "/assets/home/bricklaying-trowel.webp" },
];

const whatsappUrl = "https://wa.me/8613357064989";
const wechatId = "0086 13357064988";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyWechat = async () => {
    await navigator.clipboard.writeText(wechatId);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="home-page">
      <header className="site-header">
        <div className="nav-inner">
          <a href="#top" className="brand"><Image src="/forge-logo-transparent.png" alt="Forge Tools" width={104} height={40} priority /></a>
          <button className="menu-button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
            <a href="#factory" onClick={() => setMenuOpen(false)}>Factory</a>
            <a href="#oem" onClick={() => setMenuOpen(false)}>OEM / ODM</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <a className="nav-contact" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </header>

      <section className="home-hero" id="top">
        <div className="home-shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">YONGKANG · CHINA</p>
            <h1>Tools made for the work.</h1>
            <p className="hero-subtitle">Putty knives, scrapers and trowels for professional markets worldwide.</p>
            <div className="hero-actions">
              <a className="button primary" href="#products">View Products</a>
              <a className="button whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp</a>
            </div>
            <p className="hero-meta">Four product categories · OEM / ODM · Samples available</p>
          </div>
          <div className="hero-showcase">
            <Lightbox src="/assets/home/putty-knife.webp" alt="Forge putty knives" className="hero-main-product" fit="cover" />
          </div>
        </div>
      </section>

      <section className="home-section products-section" id="products">
        <div className="home-shell">
          <div className="section-heading compact-heading">
            <div><p className="eyebrow">PRODUCT RANGE</p><h2>Core categories</h2></div>
            <p>Explore real product photography from our catalog.</p>
          </div>
          <div className="category-cards">
            {productCategories.map((category) => (
              <article className="category-card" key={category.name}>
                <div className="category-image"><Lightbox src={category.image} alt={category.name} /></div>
                <div className="category-card-copy"><h3>{category.name}</h3><a href={`/products?category=${category.slug}`}>View range <span>↗</span></a></div>
              </article>
            ))}
          </div>
          <div className="range-note"><span>Also available</span><strong>Mud Pans</strong><a href="/products">View product gallery →</a></div>
        </div>
      </section>

      <section className="factory-section" id="factory">
        <div className="home-shell factory-grid">
          <div className="factory-copy">
            <p className="eyebrow light">OUR FACTORY</p>
            <h2>Built around real production.</h2>
            <p>Established in 2025 in Yongkang, China, with a 3,000㎡ factory and a team of 30 employees.</p>
            <div className="factory-facts"><div><strong>3,000㎡</strong><span>Factory area</span></div><div><strong>30</strong><span>Employees</span></div><div><strong>4</strong><span>Product categories</span></div></div>
            <a className="text-link light" href="/factory">See more factory photos →</a>
          </div>
          <div className="factory-photos">
            <div className="factory-photo-wide"><Lightbox src="/assets/home/workshop.webp" alt="Forge Tools workshop" fit="cover" /></div>
            <div><Lightbox src="/assets/home/production.webp" alt="Tool production at Forge" fit="cover" /></div>
            <div><Lightbox src="/assets/home/showroom.webp" alt="Forge Tools sample room" fit="cover" /></div>
          </div>
        </div>
      </section>

      <section className="home-section oem-home" id="oem">
        <div className="home-shell oem-grid">
          <div className="oem-product"><Lightbox src="/assets/home/scraper.webp" alt="Forge scraper range" /></div>
          <div className="oem-copy">
            <p className="eyebrow">OEM / ODM</p>
            <h2>Your product, made your way.</h2>
            <p>Forge supports custom logos, custom packaging and product samples for overseas buyers.</p>
            <ul><li><span>Experience</span><strong>10 years</strong></li><li><span>Sample lead time</span><strong>7 days</strong></li><li><span>Production lead time</span><strong>20–30 days</strong></li></ul>
            <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Discuss your project</a>
          </div>
        </div>
      </section>

      <section className="contact-home" id="contact">
        <div className="home-shell contact-grid">
          <div><p className="eyebrow">DIRECT CONTACT</p><h2>Talk to Stone.</h2><p>For product details, samples and quotations, contact us directly on WhatsApp or WeChat.</p></div>
          <div className="contact-panel">
            <a className="contact-row" href={whatsappUrl} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>0086 13357064988 ↗</strong></a>
            <button className="contact-row" type="button" onClick={copyWechat}><span>WeChat</span><strong>{copied ? "Copied" : `${wechatId} · Copy`}</strong></button>
            <a className="contact-row" href="mailto:stone@forgetools.cn"><span>Email</span><strong>stone@forgetools.cn</strong></a>
            <p>Tanxian Town, Yongkang, Zhejiang, China</p>
          </div>
        </div>
      </section>

      <footer className="home-footer"><div className="home-shell"><Image src="/forge-logo-transparent.png" alt="Forge Tools" width={92} height={36} /><p>YONGKANG FORGE TOOLS CO., LTD</p><span>@ 2026 Forge Tools</span></div></footer>
      <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact Forge Tools on WhatsApp"><WhatsAppIcon /></a>
    </main>
  );
}
