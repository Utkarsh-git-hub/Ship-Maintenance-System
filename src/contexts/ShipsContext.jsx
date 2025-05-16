import React, { createContext, useState, useEffect } from 'react'
import { load, save } from '../utils/localStorageUtils'
import mock from '../mockData.json'

export const ShipsContext = createContext()
export function ShipsProvider({ children }) {
  const [ships, setShips] = useState(() => load('ships', mock.ships))
  useEffect(() => { save('ships', ships) }, [ships])
  const add    = ship => setShips([...ships, ship])
  const update = ship => setShips(ships.map(s => s.id===ship.id? ship: s))
  const remove = id   => setShips(ships.filter(s => s.id!==id))
  return (
    <ShipsContext.Provider value={{ ships, add, update, remove }}>
      {children}
    </ShipsContext.Provider>
  )
}
