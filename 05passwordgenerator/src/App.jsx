import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charactersAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) {
      str+= "0123456789"
    }
    if (charactersAllowed) {
      str+="!@#$%^&*()_+-={}[]~"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)      
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charactersAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charactersAllowed, passwordGenerator])
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-'>
          <input 
          type="text"
          value = {password}
          className='outline-none w-full py-1 px-3 bg-white text-gray-700'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          onClick={copyPasswordToClipboard}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked = {numberAllowed}
              id = "numberInput"
              onChange= {() => {setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked = {charactersAllowed}
              id = "characterInput"
              onChange={()=>{setCharacterAllowed((prev)=> !prev)}} 
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
