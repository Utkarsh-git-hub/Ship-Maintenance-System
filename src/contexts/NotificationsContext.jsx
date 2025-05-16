import React, { createContext, useState, useEffect } from 'react'
import { load, save } from '../utils/localStorageUtils'

export const NotificationsContext = createContext()
export function NotificationsProvider({ children }) {
  const [notes, setNotes] = useState(() => load('notifications', []))
  useEffect(() => { save('notifications', notes) }, [notes])
  const push    = n => setNotes([n, ...notes])
  const dismiss = id=> setNotes(notes.filter(x=>x.id!==id))
  return (
    <NotificationsContext.Provider value={{ notes, push, dismiss }}>
      {children}
    </NotificationsContext.Provider>
  )
}
