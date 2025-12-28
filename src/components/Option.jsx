
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState] = useContext(QuizContext);

  const isSelected = quizState.answerSelected === option;
  const isCorrect = isSelected && option === answer;
  const isWrong = isSelected && option !== answer;

  if (hide) return null;

  return (
    <div
      onClick={() => selectOption()}
      className={`
        p-6 rounded-xl border-2 cursor-pointer transition-all duration-300
        ${!quizState.answerSelected 
          ? "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 hover:shadow-md" 
          : ""
        }
        ${isCorrect 
          ? "border-green-500 bg-green-50 shadow-lg scale-[1.02]" 
          : ""
        }
        ${isWrong 
          ? "border-red-500 bg-red-50 shadow-lg scale-[1.02]" 
          : ""
        }
        ${!isSelected && quizState.answerSelected
          ? "opacity-60"
          : ""
        }
      `}
    >
      <div className="flex items-center gap-4">
        <div className={`
          w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold
          ${!quizState.answerSelected 
            ? "bg-gray-100 text-gray-700" 
            : isCorrect 
              ? "bg-green-500 text-white" 
              : isWrong
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-500"
          }
        `}>
          {option === answer && quizState.answerSelected ? "✓" : "○"}
        </div>
        <p className={`
          text-lg font-medium
          ${isCorrect ? "text-green-800" : isWrong ? "text-red-800" : "text-gray-800"}
        `}>
          {option}
        </p>
      </div>
    </div>
  );
};

export default Option;
