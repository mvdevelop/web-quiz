
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Quiz from "../img/quiz.svg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="text-center py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Seja bem-vindo ao QuizDev! 👋</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto">
          Teste seus conhecimentos em programação com nossos quizzes interativos e desafiantes.
        </p>
        
        <div className="mb-12">
          <img 
            src={Quiz} 
            alt="Início do Quiz" 
            className="w-64 h-64 mx-auto object-contain"
          />
        </div>
        
        <button
          onClick={() => dispatch({ type: "CHANGE_STAGE" })}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          🚀 Começar Agora
        </button>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-blue-600 text-2xl mb-3">📚</div>
            <h3 className="font-semibold text-gray-800 mb-2">Diversas Categorias</h3>
            <p className="text-gray-600 text-sm">HTML, CSS, JavaScript e muito mais</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-green-600 text-2xl mb-3">🎯</div>
            <h3 className="font-semibold text-gray-800 mb-2">Dicas Especiais</h3>
            <p className="text-gray-600 text-sm">Receba ajuda quando estiver com dificuldades</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-purple-600 text-2xl mb-3">🏆</div>
            <h3 className="font-semibold text-gray-800 mb-2">Desafie-se</h3>
            <p className="text-gray-600 text-sm">Acompanhe seu progresso e melhore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
