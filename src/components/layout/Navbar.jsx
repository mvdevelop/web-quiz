
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

const Navbar = () => {
  const [quizState] = useContext(QuizContext);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">QuizDev</h1>
            <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {quizState.gameStage === "Playing" && `Pontuação: ${quizState.score}`}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
