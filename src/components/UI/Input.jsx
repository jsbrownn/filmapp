import { useState, useEffect } from 'react'



function Input({placeholder,handleChange}) {
  const [query, setQuery] = useState('')
 return(
      <input onChange={(event) => setQuery(event.target.value)}
              className='max-h-60  overflow-auto rounded-md bg-white mx-2 py-1 px-2 sm:px-8 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm w-full'
              value={query}
              placeholder={placeholder}/>
  )
}
export default Input