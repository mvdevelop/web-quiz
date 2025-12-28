
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Category from "../img/category.svg";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });
    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div className="py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Escolha uma Categoria</h2>
        <p className="text-gray-600 text-lg">
          Selecione uma linguagem para começar o quiz:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategoryAndReorderQuestions(question.category)}
            key={question.category}
            className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {question.category === "HTML" && "🌐"}
              {question.category === "CSS" && "🎨"}
              {question.category === "JavaScript" && "⚡"}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{question.category}</h3>
            <p className="text-gray-600 mb-4">
              {question.questions.length} perguntas
            </p>
            <span className="text-blue-600 font-medium group-hover:text-blue-700">
              Selecionar →
            </span>
          </button>
        ))}
      </div>

      <div className="flex justify-center">
        <img 
          src={Category} 
          alt="Categoria do Quiz" 
          className="w-48 h-48 object-contain opacity-80"
        />
      </div>
    </div>
  );
};

export default PickCategory;
