import styles from './NavBar.module.css';
import {Link} from 'react-router-dom';
const NavBar = () => {
return (
    <div className={styles.navbar}>
    <h1 className={styles.brandname}>SUPPLEMENTAL FUEL</h1>
    <ul className={styles.listname}>
    
        <li className={styles.itemname}><Link to='/'>Home</Link></li>
        <li className={styles.itemname}><Link to='shop'>Shop</Link></li>
        <li className={styles.itemname}><Link to ='about'>About Us</Link></li>
        <li className={styles.itemname}><Link to ='review'>Review Us</Link></li>
        <li className={styles.itemname}><Link to='contact'>Contact Us</Link></li>
        <li className={styles.sidenav}><i className="fa-solid fa-cart-shopping"></i></li>
        <li className={styles.sidenav}><i className="fa-solid fa-user"></i></li>
        
    </ul>
    </div>
)
}

export default NavBar
