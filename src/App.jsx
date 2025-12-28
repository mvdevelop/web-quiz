
import { useContext } from "react";
import { QuizContext } from "./context/quiz";
import Welcome from "./components/Welcome";
import Question from "./components/Question";
import GameOver from "./components/GameOver";
import PickCategory from "./components/PickCategory";
import Layout from "./components/layout/Layout";

function App() {
  const [quizState] = useContext(QuizContext);

  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          🧠 QuizDev
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Teste seus conhecimentos em programação
        </p>
        
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Category" && <PickCategory />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
      </div>
    </Layout>
  );
}

export default App;
