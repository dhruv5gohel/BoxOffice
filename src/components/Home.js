import { useState } from "react"

const Home = () => {
  const [inpVal, setInpVal] = useState("")

  const handleInput = (e) => {
    setInpVal(e.target.value);
  }

  return (
    <div>
      <input type="text" name="search" id="search" placeholder="Enter Movie or an Actor name" onChange={handleInput} value={inpVal}/>
    </div>
  )
}

export default Home
