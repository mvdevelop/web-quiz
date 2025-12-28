
import { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";
import Option from "./Option";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
          </span>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Pontuação: <span className="font-bold text-green-600">{quizState.score}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 leading-tight">
            {currentQuestion.question}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {currentQuestion.options.map((option) => (
          <Option
            key={option}
            option={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
            hide={quizState.optionToHide === option}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        {!quizState.answerSelected && !quizState.help && (
          <>
            {currentQuestion.tip && (
              <button
                onClick={() => dispatch({ type: "SHOW_TIP" })}
                className="flex-1 min-w-[200px] px-6 py-3 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 font-medium flex items-center justify-center gap-2"
              >
                💡 Dica
              </button>
            )}
            <button
              onClick={() => dispatch({ type: "REMOVE_OPTION" })}
              className="flex-1 min-w-[200px] px-6 py-3 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 font-medium flex items-center justify-center gap-2"
            >
              ❌ Excluir uma opção
            </button>
          </>
        )}
      </div>

      {!quizState.answerSelected && quizState.help === "tip" && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <div className="text-blue-600 text-xl mt-1">💡</div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Dica:</h4>
              <p className="text-blue-700">{currentQuestion.tip}</p>
            </div>
          </div>
        </div>
      )}

      {quizState.answerSelected && (
        <div className="flex justify-center">
          <button
            onClick={() => dispatch({ type: "CHANGE_QUESTION" })}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {quizState.currentQuestion + 1 === quizState.questions.length
              ? "Ver Resultados"
              : "Próxima Pergunta →"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;
