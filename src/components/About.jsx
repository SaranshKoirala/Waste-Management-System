import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function About() {
  const [count, setCount] = useState(1);

  function handleNextBtn() {
    if (count >= 4) {
      return;
    }
    setCount((count) => count + 1);
  }

  function handlePrevBtn() {
    if (count <= 1) {
      return;
    } else {
      setCount((count) => count - 1);
    }
  }
  console.log(count);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <div id="about" className="h-screen px-30">
      <div data-aos="fade-right" className="bona-nova-sc-regular mb-10">
        <div className="font-semibold text-5xl text-center text-black">
          About Us
        </div>
      </div>
      <div className="flex justify-center items-center gap-30">
        <div className="relative flex flex-col justify-center items-center gap-4">
          {count !== 4 && (
            <button className="absolute -right-5 w-10 h-10 rounded-full bg-green-600 flex justify-center items-center cursor-pointer">
              <IoIosArrowForward
                className="text-white text-2xl "
                onClick={handleNextBtn}
              />
            </button>
          )}
          {count > 1 && (
            <button
              className="absolute -left-5 w-10 h-10 rounded-full bg-green-600 flex justify-center items-center cursor-pointer"
              onClick={handlePrevBtn}
            >
              <IoIosArrowBack className="text-white text-2xl" />
            </button>
          )}
          <img
            className="rounded-3xl transition-transform duration-500 ease-in-out"
            src={`/gallery/gallery-${count}.webp`}
            width={"350px"}
            loading="lazy"
            // height={"10px"}
          />
          <div className="flex gap-3">
            <div
              className={
                count === 1
                  ? `w-2 h-2 rounded-full bg-green-600`
                  : `w-2 h-2 rounded-full border-2 border-green-600`
              }
            ></div>
            <div
              className={
                count === 2
                  ? `w-2 h-2 rounded-full bg-green-600`
                  : `w-2 h-2 rounded-full border-2 border-green-600`
              }
            ></div>
            <div
              className={
                count === 3
                  ? `w-2 h-2 rounded-full bg-green-600`
                  : `w-2 h-2 rounded-full border-2 border-green-600`
              }
            ></div>
            <div
              className={
                count === 4
                  ? `w-2 h-2 rounded-full bg-green-600`
                  : `w-2 h-2 rounded-full border-2 border-green-600`
              }
            ></div>
          </div>
        </div>

        <div className="w-[40%]">
          <p className="text-l text-justify ">
            {" "}
            At Waste Management System we are dedicated to providing a cleaner,
            more sustainable Kathmandu through efficient and
            government-regulated waste management services. Our system is
            designed to tackle the unique waste challenges in the city while
            promoting responsible disposal and recycling. As a
            government-controlled initiative, Waste Management System operates
            with accountability, transparency, and a commitment to environmental
            sustainability. We aim to not only manage waste effectively but also
            educate the people of Kathmandu about the importance of proper waste
            disposal and recycling. Through our system, the government ensures
            that both residents and businesses have access to efficient waste
            management services that make a difference in maintaining a cleaner
            Kathmandu. With the growing population of Kathmandu and the city's
            increasing waste generation, our platform plays a crucial role in
            tackling waste-related challenges, improving public health, and
            protecting the environment for future generations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
