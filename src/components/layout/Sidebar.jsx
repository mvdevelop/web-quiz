
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import questions from "../../data/questions_complete";

const Sidebar = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const handleCategorySelect = (category) => {
    if (quizState.gameStage === "Category" || quizState.gameStage === "Playing") {
      dispatch({ type: "START_GAME", payload: category });
      dispatch({ type: "REORDER_QUESTIONS" });
    }
  };

  return (
    <aside className="w-64 bg-white shadow-xl min-h-[calc(100vh-4rem)] p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Categorias</h2>
      <div className="space-y-3">
        {questions.map((cat) => (
          <button
            key={cat.category}
            onClick={() => handleCategorySelect(cat.category)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
              quizState.questions === cat.questions
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{cat.category}</span>
              <span className="text-sm opacity-75">
                {cat.questions.length} perguntas
              </span>
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 uppercase mb-4">
          Estatísticas
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Pergunta atual:</span>
            <span className="font-medium">
              {quizState.gameStage === "Playing" 
                ? `${quizState.currentQuestion + 1}/${quizState.questions.length}`
                : "-"
              }
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Acertos:</span>
            <span className="font-medium text-green-600">{quizState.score}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
