import styles from './Home.module.css';
import img1 from '/Users/chandankumar/Desktop/ProteinPowder/LandingPage/src/assets/frontimage.png'
const Home = () => {
return (
    <>
    <div className={styles.section}>
    <h1 className={styles.title}>All worries are</h1>
    <h1 className={styles.subtitle}>less with wine</h1>
    <p className={styles.para}>Protein is an essential macronutrient. but not all food sources </p>
    <p className={styles.para}>of protein are created equal, and you may not need as much as you think.</p>
    <img src={img1} alt="athletic women" className={styles.img}/>
    <button className={styles.btn}>Shop Now</button>
    </div>
    <div className={styles.secondsecond}>
        <h1 className={styles.features}>Our Some Features</h1>
        <p>There are many variations of passages of lorem ipsum available</p>
        <p>but the majority have suffered alternation there are many.</p>
    </div>
    <div className={styles.box}>
    <div className={styles.box1}>
    <h3><i className="fa-solid fa-bag-shopping"></i> Track Your Order</h3>
    <p>You can Track Your Product Online</p>
    </div>
    <div className={styles.box2}>
        <h3><i className="fa-solid fa-truck-fast"></i>Free Shipping</h3>
        <p>We Delivery Free Shipping WorldWide</p>
    </div>
    <div className={styles.box3}>
        <h3><i className="fa-solid fa-handshake-angle"></i>Support 24/7</h3>
        <p>We Support Our Customers 24 Hours.</p>
    </div>
    </div>
    <div className={styles.footer}>
        <h1 className={styles.subscribe}>Subscribe To Our Newsletter</h1>
        <input type="text" placeholder='Enter your mail' className={styles.input}/>
        <button className={styles.get}>Get Started</button>
    </div>
    </>
)
}

export default Home

