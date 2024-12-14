import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import MapQuiz from "../components/MapQuiz";
import MapSelection from "../components/MapQuizSelection/MapQuizSelection";

const HomePage = () => {
  const navigate = useNavigate();
  const { quizId } = useParams();

  const handleQuizSelect = (selectedQuizId) => {
    navigate(`/home/${selectedQuizId}`);
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="w-screen min-h-screen bg-slate-800 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center px-8 pt-8 pb-8">
        <div className="container mx-auto">
          <h1 className="text-3xl mb-8 text-center text-white">
            Select which map quiz
          </h1>
          {quizId ? (
            <>
              <button
                onClick={handleBack}
                className="mb-4 text-white hover:text-gray-300"
              >
                ← Back to Quiz Selection
              </button>
              <MapQuiz quizId={quizId} />
            </>
          ) : (
            <MapSelection onSelectQuiz={handleQuizSelect} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;