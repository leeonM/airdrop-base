import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faDiscord,faGithub } from '@fortawesome/free-brands-svg-icons'
import logo from "../assets/base-logo-white.png"

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className="footer">
    <div className="fContainer">
    <div className="fLogoContainer">
    <img src={logo} alt="base-logo" className="logoFooter" />
    <a href="https://base.org/terms-of-service" target="_blank" rel="noreferrer noopener"><p className="fTerms">Terms of service</p></a>
    <p>© {year} Coinbase</p>
    </div>
    <nav className="navItemsFooter">
                <h2>About</h2>
                <h2>Docs</h2>
                <h2>Bridge</h2>
                <h2>Blog</h2>
                <div className="navIconContainerFooter">
                <a href="https://discord.com/invite/buildonbase" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="navIconFooter" icon={faDiscord} /></a>
                <a href="https://twitter.com/buildonbase" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="navIconFooter" icon={faTwitter} /></a>
                <a href="https://github.com/base-org" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="navIconFooter" icon={faGithub} /></a>
                </div>
            </nav>
    </div>
    </div>
  )
}

export default Footer