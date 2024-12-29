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
            <h1 className="text-3xl mb-8 text-white">Contact Information</h1>
            <p className="text-white mb-8">
              If you have any questions or concerns, please you can email me at
              yudale2003@gmail.com
            </p>
            <p className="text-white text-center">
              {" "}
              If you find an issue with the website or you want to contribute to
              it, then you can find the repo information here:
              https://github.com/daleyu/tibet_project
            </p>
            <ul className="text-gray-300 list-disc pl-6 space-y-2 mb-10">
              <li>
                Feel free to open an issue or reach out if you want any of the
                information updated on the site. This will remain an open-source
                project.
              </li>
            </ul>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Tibet Resources!
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Here are links to some of the resources that I created while
                working on this project
              </p>
              <ul className="text-gray-300 list-disc pl-6 space-y-2">
                <li>
                  Custom Geojson/Topojson for showing Tibetan Locations and
                  divisions of China:
                  <a href="https://raw.githubusercontent.com/daleyu/tibet_project/refs/heads/main/public/quiz-data/locations.json">
                    {" "}
                    Link Here
                  </a>
                </li>
                <li>
                  Json database with all location names, information, and
                  coordinates:
                  <a href="https://raw.githubusercontent.com/daleyu/tibet_project/refs/heads/main/public/map-with-lakes.json">
                    {" "}
                    Link Here
                  </a>
                </li>
                <li>
                  Check the Repo at the bottom if there is anything else that
                  you need{" "}
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
