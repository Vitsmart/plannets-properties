import "./navbar.scss"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <span>PLANNETS PROPERTIES</span>
        
      </div>
      <div className="right">
        <ul>
          <li>Home</li>
          <li>Properties</li>
          <li>Services</li>
          <li>Contact</li>
          <li>About</li>
          
        </ul>
      </div>
    </div>
  )
}