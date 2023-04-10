import { useEffect,useState } from 'react'
import Axios from 'axios'

import './App.css'

function App() {

  const [joke,setJoke] = useState("");
  
  const getJoke = ()=>{
    fetch("https://app.ajrakhhouse.com:4000/article",{
      method: "POST",
      body: JSON.stringify({
        url:'https://www.indiatoday.in/auto/latest-auto-news/story/mg-comet-ev-launch-company-collaborates-with-a-gamer-for-introducing-electric-model-2358248-2023-04-10'
      }),
    }).then((response)=>{
      return response.json()
      // setJoke(response.data.setup + '....' + response.data.punchline);
    }).then((data)=>{
      console.log(data)
    })
  }

  return (
    <div className="App">
      <div>
        <h1>Hello</h1>
        <button onClick={getJoke}>Get Joke</button>
        {joke}
      </div>
    </div>
  )
}

export default App;
