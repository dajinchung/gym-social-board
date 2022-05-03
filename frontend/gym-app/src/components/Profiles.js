
function Profiles(props) {
  return (
    <div>
      {/* {Item(Leaderboard)} */}
      {props.Leaderboard.map((value, index) => (
        <li key={index} className="user-orderlist">
          <div className="profile-pic">
          <img src={value.img} alt="image of user"></img>
          </div>
          <div>
            <h3>{index + 1 + ". " }{value.name}</h3>
            <span> Country: {value.location}</span>
          </div>
          <div>
            <span> Score of Exercise Here:</span>
          </div>
        </li>
      ))}
    </div>
  )
}

// function Item(data) {
//   return (
//     <ul className="user-orderlist">
//       {data.map((value, index) => (
//         <li key={index} className="user-list">
//           <div className="profile-pic">
//             <img src={value.img} alt="image of user"></img>
//             <div>
//               <h3> {index+1+"."} {value.name} </h3>
//               <span> {value.location} </span>
//             </div>
//           </div>
//           <div>
//             {/* <span> {value.score} </span> */}
//           </div>
//         </li>
//           ))}
//     </ul>
//   );
//}

export default Profiles;
