import './App.css'
import Card from './components/Card'

function App() {
  let myobj = {
    username: "hitesh",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>

      <Card username="chaiaurcode"/>
      <Card/>
    </>
  )
}

export default App
