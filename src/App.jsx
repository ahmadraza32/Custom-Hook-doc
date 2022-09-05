import React from 'react'
import useLocalStorage from './components/useLocalStorage'
import useUpdateLogger from './components/useUpdateLogger'

const App = () => {
  const [name, setName] = useLocalStorage('name', '')

  useUpdateLogger(name)

  return (
    <div>
      <h1>Custom Hook</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}

export default App
