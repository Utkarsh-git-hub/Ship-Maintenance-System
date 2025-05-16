import React, { createContext, useState, useEffect } from 'react'
import { load, save } from '../utils/localStorageUtils'
import mock from '../mockData.json'

export const ComponentsContext = createContext()
export function ComponentsProvider({ children }) {
  const [components, setComponents] = useState(() => load('components', mock.components))
  useEffect(() => { save('components', components) }, [components])
  const add    = c => setComponents([...components, c])
  const update = c => setComponents(components.map(x=>x.id===c.id?c:x))
  const remove = id=> setComponents(components.filter(x=>x.id!==id))
  return (
    <ComponentsContext.Provider value={{ components, add, update, remove }}>
      {children}
    </ComponentsContext.Provider>
  )
}
