
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import WellDone from "../img/welldone.svg";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const percentage = Math.round((quizState.score / quizState.questions.length) * 100);
  const isExcellent = percentage >= 80;
  const isGood = percentage >= 60;
  const isAverage = percentage >= 40;

  return (
    <div className="text-center py-12 max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Quiz Concluído! 🎉</h2>
      
      <div className="mb-10">
        <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
          <img 
            src={WellDone} 
            alt="Fim do Quiz" 
            className="w-48 h-48 object-contain"
          />
        </div>
        
        <div className={`
          text-5xl font-bold mb-2
          ${isExcellent ? "text-green-600" : 
            isGood ? "text-yellow-600" : 
            isAverage ? "text-orange-600" : "text-red-600"
          }
        `}>
          {percentage}%
        </div>
        
        <p className="text-gray-600 text-lg mb-2">
          Você acertou <span className="font-bold text-gray-800">{quizState.score}</span> de{" "}
          <span className="font-bold text-gray-800">{quizState.questions.length}</span> perguntas.
        </p>
        
        <div className="w-full bg-gray-200 rounded-full h-4 mb-8 mt-6 overflow-hidden">
          <div 
            className={`
              h-full rounded-full transition-all duration-1000
              ${isExcellent ? "bg-green-500" : 
                isGood ? "bg-yellow-500" : 
                isAverage ? "bg-orange-500" : "bg-red-500"
              }
            `}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-700 mb-2">Performance</h3>
          <div className="text-3xl font-bold text-blue-600">{quizState.score}</div>
          <p className="text-gray-500 text-sm">Pontos conquistados</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-700 mb-2">Taxa de Acerto</h3>
          <div className="text-3xl font-bold text-green-600">{percentage}%</div>
          <p className="text-gray-500 text-sm">Eficiência geral</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => dispatch({ type: "NEW_GAME" })}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          🔄 Jogar Novamente
        </button>
        
        <button 
          onClick={() => {
            dispatch({ type: "NEW_GAME" });
            dispatch({ type: "CHANGE_STAGE" });
          }}
          className="px-8 py-4 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition-all duration-300 border border-gray-200"
        >
          📚 Escolher Outra Categoria
        </button>
      </div>
    </div>
  );
};

export default GameOver;
