import { SocailLinks } from '../Data'
import { Pagelinks } from './Pagelinks';
const Footer = () => {
    return (
        <footer className="section footer">
            <Pagelinks parentClass="footer-links" itemClass="footer-link"/>
            <ul className="footer-icons">
                {SocailLinks.map((link) => {
                    return (
                        <li key={link.id}>
                            <a href={link.href} target="_blank" rel="noreferrer" className="footer-icon"
                            ><i className={link.icon}></i
                            ></a>
                        </li>
                    )
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    )
}
export default Footer;