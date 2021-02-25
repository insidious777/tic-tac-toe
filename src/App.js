import './App.css';
import {useState} from 'react';
import Square from './components/Square/Square'
function App() {
  const [board, setBoard] = useState([null,null,null,null,null,null,null,null,null]);
  const [turn, setTurn] = useState(true);
  const clickHandler = (e) => {
    if(!board[e.target.id]){
      let b = board;
      if(turn) b[e.target.id] = 'x';
      else b[e.target.id] = 'o';
      setBoard(b);
      setTurn(!turn);
    }

    if(board.every((el)=>!!el)){
      setTimeout(()=>{
        setBoard([null,null,null,null,null,null,null,null,null]);
      },1000);
    }
  }
  return (
    <div className="App">
      <h1>Tic - tac - toe</h1>
      <div className="Board">
        {board.map((el,i)=>{
          return <Square 
          type={el} 
          id={i} 
          onClick={clickHandler}/>
        })}
      </div>
    </div>
  );
}

export default App;
