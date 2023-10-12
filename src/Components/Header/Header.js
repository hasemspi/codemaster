import React from "react";
import { NavLink, Link } from "react-router-dom";
import Nav from "../Nav/Nav";


// export default function Example() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
// }
const Header = () => {
 
  return (
    <header className="bg-success">
      <Nav/>
  </header>
  );
};

export default Header;
