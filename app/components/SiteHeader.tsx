"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Home", activeOn: ["/"] },
  { href: "/about", label: "About Us", activeOn: ["/about", "/factory"] },
  { href: "/products", label: "Products", activeOn: ["/products"] },
  { href: "/news", label: "News", activeOn: ["/news"] },
  { href: "/contact", label: "Contact Us", activeOn: ["/contact"] },
];

export default function SiteHeader(){
 const [open,setOpen]=useState(false);
 const pathname=usePathname();
 const isActive=(paths:string[])=>paths.some((path)=>path==="/"?pathname===path:pathname.startsWith(path));
 return <>
  <div className="reference-topbar"><div className="reference-topbar-inner"><div className="top-contact"><a href="mailto:stone@forgetools.cn">✉&nbsp; stone@forgetools.cn</a><a href="https://wa.me/8613357064989">◉&nbsp; 008613357064988</a><a href="tel:008613357064988">☎&nbsp; 008613357064988</a></div><div className="top-social"><a href="#">f</a><a href="#">♥</a><a href="#">in</a><a href="#">◎</a></div></div></div>
  <header className="reference-header"><div className="reference-header-inner"><Link href="/" className="reference-logo"><Image src="/forge-logo-transparent.png" alt="Forge Tools" width={205} height={72} priority/></Link><button className={open?"menu-button open":"menu-button"} type="button" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/><span/></button><nav className={open?"reference-nav open":"reference-nav"} aria-label="Primary navigation">{navigation.map((item)=>{const active=isActive(item.activeOn);return <Link key={item.href} href={item.href} className={active?"active":undefined} aria-current={active?"page":undefined} onClick={()=>setOpen(false)}>{item.label}</Link>})}</nav></div></header>
 </>;
}
