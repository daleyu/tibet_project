import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import MapQuiz from "../components/MapQuiz";
import MapSelection, {
  quizzes,
} from "../components/MapQuizSelection/MapQuizSelection";

const HomePage = () => {
  const navigate = useNavigate();
  const { quizId } = useParams();

  const handleQuizSelect = (selectedQuizId) => {
    navigate(`/home/${selectedQuizId}`);
  };

  const handleBack = () => {
    navigate("/home");
  };

  const getQuiz = (quizId) => {
    const curr_quiz = quizzes.find((quiz) => quiz.id === parseInt(quizId));
    return curr_quiz ? curr_quiz.title : "";
  };

  return (
    <div className="w-screen min-h-screen bg-slate-800 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center px-8 pt-8 pb-8">
        <div className="container mx-auto">
          {quizId ? (
            <>
              <h1 className="text-3xl mb-8 text-center text-white">
                Quiz: {getQuiz(quizId)}
              </h1>
              <button onClick={handleBack} className="mb-4 hover:text-gray-300">
                ← Back to Quiz Selection
              </button>
              <MapQuiz quizId={quizId} />
            </>
          ) : (
            <>
              <h1 className="text-3xl mb-8 text-center text-white">
                Select which map quiz
              </h1>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {" "}
                How to use this Site
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {" "}
                You can select any of the map quizzes below which will bring up
                a quiz that will test/teach you the locations about each
                location. There is additional information and context about each
                location.
              </p>
              <ul className="text-gray-300 list-disc pl-6 space-y-2 pb-4">
                <li>
                  {" "}
                  Try out the learning mode ("Learn the Locations") to learn
                  without a score. You can click on any location to find out
                  what it is and also see the info popup!
                </li>
                <li>
                  {" "}
                  You can use the search bar to look at a specific location, or
                  you can use the locations page and browse freely
                </li>
                <li>
                  There are additional resources if you go to the resources page
                  in the footer.
                </li>
              </ul>
              <MapSelection onSelectQuiz={handleQuizSelect} />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
