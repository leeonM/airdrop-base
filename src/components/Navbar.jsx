import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faDiscord,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import logo from "../assets/full-base-logo.png"


const Navbar = () => {
const [showLinks, setShowLinks] = useState(false)

const showOptions = ()=>{
    setShowLinks(prev=>!prev)
}
  return (
    <div className="navbar">
    <div className="navOptions">
        <a href="/#"><img src={logo} alt="base-logo" className="logo" /></a>
            <nav className="navItems" id={showLinks ? "hidden": ""}>
                <h2>About</h2>
                <h2>Docs</h2>
                <h2>Bridge</h2>
                <h2>Blog</h2>
                <div className="navIconContainer">
                <a href="https://discord.com/invite/buildonbase" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="navIcon" icon={faDiscord} /></a>
                <a href="https://twitter.com/buildonbase" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="navIcon" icon={faTwitter} /></a>
                <a href="https://github.com/base-org" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="navIcon" icon={faGithub} /></a>
                </div>
                </nav>
                <button className="navButton" onClick={showOptions}>
                <FontAwesomeIcon icon={faBars} />
                </button>
        </div>
    </div>
  )
}

export default Navbar