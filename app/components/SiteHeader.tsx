"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function SiteHeader(){
 const [open,setOpen]=useState(false);
 return <header className="site-header"><div className="nav-inner"><Link href="/" className="brand"><Image src="/forge-logo-transparent.png" alt="Forge Tools" width={84} height={34}/></Link><button className="menu-button" aria-label="Toggle menu" onClick={()=>setOpen(!open)}><span/><span/></button><nav className={open?"nav-links open":"nav-links"}><a href="/products">Products</a><a href="/factory">Factory</a><a href="/oem">OEM / ODM</a><a href="/faq">FAQ</a></nav><a className="nav-contact" href="/contact">Contact us</a></div></header>
}
