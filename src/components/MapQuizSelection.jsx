const quizzes = [
  { id: 1, title: "Class Map Quiz" },
  { id: 2, title: "All Locations" },
  { id: 3, title: "Rivers" },
  { id: 4, title: "Sacred Landscapes and Pilgrimage Sites" },
  { id: 5, title: "South Asia" },
  { id: 6, title: "All Chinese Provinces" },
  { id: 7, title: "TAR" },
  { id: 8, title: "Mountain Ranges" },
  { id: 9, title: "Deserts and Other Regions" },
];

function MapSelection({ onSelectQuiz }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4">
        {quizzes.map((quiz) => (
          <button
            key={quiz.id}
            className="p-5 h-64 text-base text-white rounded hover:bg-gray-700 transition-colors"
            onClick={() => onSelectQuiz(quiz.id)}
          >
            {quiz.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MapSelection;
