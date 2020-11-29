// Imports
// React Imports
import React , {useState} from 'react';
// Components Imports
import { Header } from './components/Header';
import { StartQuiz } from './components/StartQuiz';
import { Loading } from './components/Loading';
import { Score } from './components/Score';
import { QuestionsCard } from './components/QuestionsCard';
import { Next } from './components/Next';
import { EndGame } from './components/EndGame';
import { PlayAgain } from './components/PlayAgain';
import Footer from './components/Footer';
// Functional Component Imports
import { ApiUrlProvider } from './functionalComponent/ApiUrlProvider';
// Styles Imports
import './App.css';

// App Function
function App() {

  // useState definations for different constants
  // for selected number of questions
  const [selectedNumberOfQuestions, setSelectedNumberOfQuestions] = useState(10)
  async function numberOfQuestions(value:number) {
    setSelectedNumberOfQuestions(value) 
  }
  // for catagery of questions
  const [selectedCategory, setSelectedCategory] = useState(0)
  async function category(value:number) {
    setSelectedCategory(value)
  }
  // for difficulty of selected questions
  const [selectedDifficulty, setSelectedDifficulty] = useState("")
  async function difficulty(value:string) {
    setSelectedDifficulty(value)
  }

  return (
    <div className="container">
      <ApiUrlProvider
        numberOfQuestions={selectedNumberOfQuestions}
        category={selectedCategory}
        difficulty={selectedDifficulty}
      >
        <Header/>
        <StartQuiz
          recieveNumberOfQuestions={numberOfQuestions}
          recieveCategory={category}
          recieveDifficulty={difficulty}
        />
        <Loading/>
        <Score/>
        <QuestionsCard/>
        <Next/>
        <EndGame/>
        <PlayAgain/>
        <Footer/>
      </ApiUrlProvider>
    </div>
  );
}

export default App;
