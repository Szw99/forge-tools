import PageShell from '../components/PageShell';
import Lightbox from '../components/Lightbox';
const photos=[3,1,2,4,5,6,7];
export default function Factory(){return <PageShell><section className="sub-hero dark-sub"><p className="section-kicker">ABOUT US</p><h1>Yongkang Forge<br/><span>Tools Co., Ltd.</span></h1><p>Founded in 2025. Factory area: 3,000㎡. Employees: 30.</p></section><section className="factory-page"><div className="photo-grid">{photos.map((n,i)=><figure className={i===0?'wide':''} key={n}><Lightbox src={`/assets/factory/factory-${n}.webp`} alt={`Factory ${i+1}`}/><figcaption>{['Factory','Workshop','Raw material','Workshop','Workshop','Warehouse','Sample room'][i]}</figcaption></figure>)}</div></section></PageShell>}
