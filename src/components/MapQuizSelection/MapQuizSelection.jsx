export const quizzes = [
  {
    id: 1,
    title: "Class Map Quiz",
    image: "/images/tibet-map.jpg",
  },
  {
    id: 2,
    title: "All Locations",
    image:
      "https://images.unsplash.com/photo-1612383401582-e96cc0bc83d2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Rivers",
    image:
      "https://images.unsplash.com/photo-1622553886467-9ea47e5c35e8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Sacred Landscapes and Pilgrimage Sites",
    image:
      "https://images.unsplash.com/photo-1663128114450-58ce9fc8b202?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "South Asia",
    image:
      "https://plus.unsplash.com/premium_photo-1661963691068-e8fffe491afa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    title: "All Chinese Provinces",
    image:
      "https://images.unsplash.com/photo-1503641926155-5c17619b79d0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "TAR",
    image:
      "https://images.unsplash.com/photo-1560389959-e4e81f5dca86?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Mountain Ranges",
    image:
      "https://images.unsplash.com/photo-1603787663416-88d33de66699?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    title: "Deserts and Other Regions",
    image:
      "https://images.unsplash.com/20/dusty-sky.JPG?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
