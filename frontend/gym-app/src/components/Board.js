import "./style.css"
import Profiles from "./Profiles"
import { Leaderboard }  from "./Dummy_Database"
import { useState } from "react"

function Board(){

const [currentScore, setScore] = useState(0);
const [currentExercise, setExercise] = useState(null);

const handleClick = (exercise) => {
  getBench()
}
  return(
    <div className="board">
      <h1 className="leaderboard">Leaderboard</h1>
      <div className="duration">
        <button onClick={handleClick} data-id="bench">Bench</button>
        <button onClick={handleClick} data-id="squat">Squat</button>
        <button onClick={handleClick} data-id="deadlift">Deadlift</button>
        <button onClick={handleClick} data-id="miles">Miles</button>
      </div>
      {/* <Profiles Leaderboard={between(Leaderboard, time)}/> */}
      <Profiles Leaderboard={Leaderboard}/>
    </div>
  )
}

//iterate through users data (based on exercise)

function getBench(){
  Leaderboard.map()
}

export default Board











// function between(data, between){
//   const today = new Date();
//   const previous = new Date(today);
//   previous.setDate(previous.getDate() - (between + 1));

//   let filter = data.filter(val => {
//       let userDate = new Date(val.dt);
//       if (between == 0) return val;
//       return previous <= userDate && today >= userDate;
//   })

//   // sort with asending order
//   return filter.sort((a, b) => {
//       if ( a.score === b.score){
//           return b.score - a.score;
//       } else{
//           return b.score - a.score;
//       }
//   })

// }
