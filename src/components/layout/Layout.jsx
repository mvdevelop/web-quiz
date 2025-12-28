
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [quizState] = useContext(QuizContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <div className="flex pt-16">
        {quizState.gameStage !== "Start" && quizState.gameStage !== "End" && (
          <Sidebar />
        )}
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
