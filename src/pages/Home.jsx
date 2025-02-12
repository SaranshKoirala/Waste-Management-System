import { useContext, useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import axios from "axios";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const { setUser, setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetch() {
      AOS.init({
        duration: 1000, // Animation duration (default: 400ms)
        once: true, // Whether animation happens only once
        easing: "ease-in-out", // Animation easing
      });
      const token = localStorage.getItem("user");
      if (token) {
        try {
          const response = await axios.get("http://localhost:3000/api/auth", {
            headers: {
              Authorization: token,
            },
          });
          setUser(response.data.user);
          setIsAuthenticated(true);
        } catch (error) {
          console.log("Error:", error.message);
          localStorage.removeItem("user");
          navigate("*");
        }
      }
    }
    fetch();
  }, [navigate, setIsAuthenticated, setUser]);
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
