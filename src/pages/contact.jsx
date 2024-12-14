import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const ContactPage = () => {
  return (
    <div className="w-screen min-h-screen bg-slate-800 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center px-8 pt-8 pb-8">
        <div className="mx-auto">
          <div className="center">
            <h1 className="text-3xl mb-8 text-center text-white">
              Contact Information
            </h1>
            <p className="text-white text-center">
              If you have any questions or concerns, please you can email me at
              yudale2003@gmail.com
            </p>
            <p className="text-white text-center">
              {" "}
              If you find an issue with the website or you want to contribute to
              it, then you can find the repo information here:
              https://github.com/daleyu/tibet_project
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
