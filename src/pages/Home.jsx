import { useContext, useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";
import axios from "axios";
import { UserContext } from "../Contexts/UserContext";

function Home() {
  const { setUser, setIsAuthenticated } = useContext(UserContext);
  useEffect(() => {
    async function fetch() {
      try {
        const token = localStorage.getItem("user");
        const response = await axios.get("http://localhost:3000/api/auth", {
          headers: {
            Authorization: token,
          },
        });
        setUser(response.data.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.log("Error:", error.message);
      }
    }
    fetch();
  }, []);
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
