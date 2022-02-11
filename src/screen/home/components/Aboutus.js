import { React, useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <h1 className="text-center text-size pt-xs-100">About Us</h1>
    </>
  );
};

export default AboutUs;
