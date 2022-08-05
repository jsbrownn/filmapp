import { useState, useEffect } from 'react'



function Input() {
  const [query, setQuery] = useState('')

  

 return(
      <input  onChange={(event) => setQuery(event.target.value)}
              className=' mt-1 max-h-60  overflow-auto rounded-md bg-white py-1 px-8 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              value={query}/>
  )
}
export default Input