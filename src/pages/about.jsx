import React from "react";
import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";

const AboutPage = () => {
  return (
    <div className="w-screen min-h-screen bg-slate-800 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center px-8 py-12">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-12 text-center text-white">
            Learning Tibetan Landmarks
          </h1>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              The Problem
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The context of this website is to build a resource to support the
              learning of the different locations for Columbia University's
              Course:
            </p>
            <ul className="text-gray-300 list-disc pl-6 space-y-2 mb-4">
              <li>
                ASCE UN1365: INTRODUCTION TO EAST ASIAN CIVILIZATIONS: TIBET
                <ul className=" pl-6 mt-2">
                  <li className="before:content-['○'] before:mr-2 before:inline-block">
                    Faculty: Lauran Hartley
                  </li>
                </ul>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              When I was studying for the map quiz and trying to learn more
              about the locations, I found it difficult to quiz myself and learn
              the significance of each location in reference to each other. Many
              map quiz resources online lack exposure to Tibetan landmarks and
              features that you might have to find in textbooks or through
              online research.
            </p>
            <ul className="text-gray-300 list-disc pl-6 space-y-2">
              <li>
                Specifically, many of the maps online don't even show the Tibet
                Autonomous Region as a separate entity from China.
              </li>
              <li>
                There is also little mention of the features within Tibet and
                distinction from the areas around it.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              The Solution
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I created an interactive map quiz website containing class
              locations and maps from sample final projects. The site features:
            </p>
            <ul className="text-gray-300 list-disc pl-6 space-y-2 mb-4">
              <li>Interactive map of Tibet with marked locations</li>
              <li>Custom-highlighted markers for specific locations</li>
              <li>Location prompts with context and significance</li>
              <li>Hint system for learning new locations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Goal and Mission
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              While sites like seterra.com offer map quizzes, they lack:
            </p>
            <ul className="text-gray-300 list-disc pl-6 space-y-2">
              <li>Tibet-specific landmarks and features</li>
              <li>Historical context and significance</li>
              <li>Interactive learning features and hints</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
