import styles from './About.module.css';

const About = () => {
  return (
    <>
    <div className={styles.header}>
    <div className={styles.img1}><img src="https://static1.hkrtcdn.com/mbnext/static/media/misc/banner.png" alt="banner" height="400px" width="1665px"/></div>
    <h1 className={styles.title}>OUR <span className={styles.story}>STORY</span></h1>
    <p className={styles.subtitle}>The journey of becoming India&apos;s leading Sports Nutrition Brand</p>
    </div>
<div className={styles.middlesection}>
    <p className={styles.supp}>Supplement Fuel® was founded in 2024 with the idea of providing India with sports nutrition supplements that are specifically focused on Indian customer needs and listens to their sentiments day in day out.</p>
    <p className={styles.supp1}>Supplement Fuel® has quickly risen as consumer’s favorite brand with industry-first concept introductions like authenticity, protein test certificates, scoop on top, clinically researched products, etc.</p>
</div>
    </>
  )
}

export default About
