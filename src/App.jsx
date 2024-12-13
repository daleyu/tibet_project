import { useState } from "react";
import "./App.css";
import MapQuiz from "./components/MapQuiz";
import MapSelection from "./components/MapQuizSelection";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <div className="w-screen min-h-screen bg-slate-800 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center px-8 pt-24">
        <div className="container mx-auto">
          <h1 className="text-3xl mb-8 text-center text-white">
            Tibet Map Quiz
          </h1>
          {selectedQuiz ? (
            <>
              <button
                onClick={() => setSelectedQuiz(null)}
                className="mb-4 text-white hover:text-gray-300"
              >
                ← Back to Quiz Selection
              </button>
              <MapQuiz quizId={selectedQuiz} />
            </>
          ) : (
            <MapSelection onSelectQuiz={setSelectedQuiz} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
