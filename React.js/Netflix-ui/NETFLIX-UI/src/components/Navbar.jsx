import logo from "../images/logo.png";
import avatar from "../images/avatar.png";
import "./Navbar.css";
import { useEffect, useState } from "react";
function Navbar() {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screen > 100) {
        setshow(true);
      } else {
        setshow(false);
      }
      return () => {
        window.removeEventListener("scroll", () => {
          if (window.scroll > 100) {
            setshow(false);
          } else {
            setshow(true);
          }
        });
      };
    });
  }, []);

  return <div>Navbar</div>;
}

export default Navbar;
