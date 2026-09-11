import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";

export default function SiteFooter() {
  return (
    <>
      <footer>
        <div className="footer-inner">
          <Image src="/forge-logo-transparent.png" alt="Forge" width={76} height={32} />
          <p>@ 2026 Forge Tools</p>
          <div><a href="/products">Products</a><a href="/factory">Factory</a><a href="/contact">Contact</a></div>
        </div>
      </footer>
      <a className="whatsapp" href="https://wa.me/8613357064989" target="_blank" rel="noreferrer" aria-label="Contact us on WhatsApp"><WhatsAppIcon /></a>
    </>
  );
}
