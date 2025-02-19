import Chai from "./chai"

function App() {
  const username = "chai aur code"

  return(
    // <h1>Chai aur react with vite | Anagh</h1>
    <>
      <Chai/>
      <h1>hello anagh {username}</h1> 
      {/* this username is evaluated expression */}
      <p>testing para</p>
    </>
  )
}

export default App
