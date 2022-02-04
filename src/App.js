import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [greet, setGreet] = useState('');
  const [changeuser, setChangeUser] = useState ('')

  useEffect(() => {
    if(changeuser){
    alert('Thank you for visiting me 🤓');
  }
  }, [changeuser])


  return (
    <div className="App">
     <h1>Hello Use World</h1>
     <input type="text" placeholder='Enter your name' value={greet} onChange={(e) => setGreet(e.target.value)}/>
     <button type='botton' onClick={() => setChangeUser(`¡Welcome ${greet}! 🤗`)}>¡Greet me!</button>
     <h3>{changeuser ? changeuser : 'Please Enter Your Name 🙏'}</h3>
    </div>
  );
}

export default App;
