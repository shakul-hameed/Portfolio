import "./sidebar.css"
import Logo from "../../assets/logo.svg"
import { useState } from "react"
const Sidebar = () => {
  const [toggle, showMenu] =useState(false)
  return (
    <>
       <aside className={toggle ? "aside show_menu" : "aside"}>
      <a href="#home" className="nav_logo">
        <img src={Logo} />
      </a>

      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
            <li className="nav_items">
              <a href="#home" className="nav_link">
                <i className="icon-home"></i>
              </a>
            </li>
            
            <li className="nav_items">
              <a href="#about" className="nav_link">
              <i className="icon-user-following"></i>
              </a>
            </li>

            <li className="nav_items">
              <a href="#services" className="nav_link">
              <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="nav_items">
              <a href="#resume" className="nav_link">
              <i className="icon-graduation"></i>
              </a>
            </li>

            <li className="nav_items">

              <a href="#work" className="nav_link">
              <i className="icon-layers"></i>
              </a>
            </li>

            <li className="nav_items">
              <a href="#blog" className="nav_link">
              <i className="icon-note"></i>
              </a>
            </li>

            <li className="nav_items">
              <a href="#contact" className="nav_link">
              <i className="icon-bubble"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>
      <div className="nav_footer">
            <span className="copyright">&copy; 2023 - 2024.</span>
      </div>
    </aside>

    <div className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"} onClick={() => showMenu(!toggle)} >
      <i className="icon-menu"></i>
    </div>
    </>
  )
}

export default Sidebar