import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = "smooth";
      }, 100);
    };
  
    requestAnimationFrame(() => {
      const delay = pathname === "/contatos" ? 200 : 50;
      setTimeout(scrollToTop, delay);
    });
  
  }, [pathname]);
  

  return null;
}
