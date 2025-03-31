import { useState } from 'react';
import './App.css';
import Box from './components/Box';

const choice={
  rock:{
    name: "Rock",
    img:"/img/rock.png",
  },
  scissors:{
    name:"Scissors",
    img:"/img/scissors.png",
  },
  paper:{
    name:"Paper",
    img:"/img/paper.png",
  }
}

function App() {
  const [userScore, setUserScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  
  const play=(userChoice)=>{
    // setUserSelect(choice[userChoice])
    // let computerChoice = randomChoice()
    // setComputerSelect(computerChoice)
    // setResult(judgement(choice[userChoice],computerChoice))
    const userPick = choice[userChoice];
    const computerPick = randomChoice();
    const result = judgement(userPick, computerPick);

    // 업데이트
    setUserSelect(userPick);
    setComputerSelect(computerPick);
    setResult(result);

    // 점수 처리
    if (result === "win") {
      setUserScore(prev => prev + 1);
    } else if (result === "lose") {
      setComputerScore(prev => prev + 1);
    }
  }

  const judgement=(user,computer)=>{
    if(user.name===computer.name){
      return "tie"
    } else if (user.name==="Rock") return computer.name==="Scissors"?"win":"lose"
    else if (user.name==="Scissors") return computer.name==="Paper"?"win":"lose"
    else if (user.name==="Paper") return computer.name==="Rock"?"win":"lose"
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice) // 객체에 키값만 뽑아서 어레이로 만들어주는 함수다.
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem]
    console.log("final", final)
    return choice[final];
    
  }

  const reset=()=>{
    setUserScore(0)
    setComputerScore(0)
    // setUserSelect(null)
    // setComputerSelect(null)
    setResult("")
  }

  return (
    <div className='main'>
      <div className='score-area'>
        <button className='reset-btn' onClick={reset}>reset</button>
        <div>
          <div>🧑 You: {userScore}</div>
          <div>🤖 Com: {computerScore}</div>
        </div>
      </div>
      <div className='box-container'>
        <Box title="🙋‍♂️" item={userSelect} result={result}/>
        <Box title="🤖" item={computerSelect} result={result}/>
        
      </div>
      <div className='selection'>
        <button onClick={()=>play("scissors")}><img width={50} src='/img/scissors.png' alt="가위"/></button>
        <button onClick={()=>play("rock")}><img width={50} src='/img/rock.png' alt="바위"/></button>
        <button onClick={()=>play("paper")}><img width={50} src='/img/paper.png' alt="보"/></button>
      </div>
    </div>
    
  );
}

export default App;
