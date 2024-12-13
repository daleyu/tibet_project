const quizzes = [
  {
    id: 1,
    title: "Class Map Quiz",
    image: "/images/tibet-map.jpg",
  },
  {
    id: 2,
    title: "All Locations",
    image: "/images/tibet-map.jpg",
  },
  {
    id: 3,
    title: "Rivers",
    image: "/images/tibet-map.jpg",
  },
  {
    id: 4,
    title: "Sacred Landscapes and Pilgrimage Sites",
    image: "/images/tibet-map.jpg",
  },
  {
    id: 5,
    title: "South Asia",
    image: "/images/tibet-map.jpg",
  },
  {
    id: 6,
    title: "All Chinese Provinces",
    image: "/images/tibet-map.jpg",
  },
  {
    id: 7,
    title: "TAR",
    image: "/images/tibet-map.jpg",
  },
  {
    id: 8,
    title: "Mountain Ranges",
    image: "/images/tibet-map.jpg",
  },
  {
    id: 9,
    title: "Deserts and Other Regions",
    image: "/images/tibet-map.jpg",
  },
];

function MapSelection({ onSelectQuiz }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4">
        {quizzes.map((quiz) => (
          <button
            key={quiz.id}
            className="p-5 h-44 relative overflow-hidden text-base text-white rounded hover:bg-gray-700 transition-colors"
            onClick={() => onSelectQuiz(quiz.id)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm opacity-50 grayscale-[10%] transition-all duration-300 hover:blur-none hover:opacity-75 hover:grayscale-0"
              style={{
                backgroundImage: `url(${quiz.image})`,
              }}
            />
            <span className="relative z-10">{quiz.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MapSelection;
