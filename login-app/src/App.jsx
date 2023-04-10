import { useEffect,useState } from 'react'
import {SignClient} from '@walletconnect/sign-client';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[signClient,setSignClient] = useState();

  async function createClient(){
    try {
      const client = await SignClient.init({
        projectId: '8a54dac1f7ec8a35a6663cf03dd49d4a'
      })
      //console.log("Client" , client);
      setSignClient(client);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if(!signClient){
      createClient();
    }
  },[signClient])

  return (
    <div className="App">
      <div>
        <h1>Hello</h1>
      </div>
    </div>
  )
}

export default App
