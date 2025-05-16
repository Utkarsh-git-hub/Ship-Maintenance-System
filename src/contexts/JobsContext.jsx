import React, { createContext, useState, useEffect } from 'react'
import { load, save } from '../utils/localStorageUtils'
import mock from '../mockData.json'

export const JobsContext = createContext()
export function JobsProvider({ children }) {
  const [jobs, setJobs] = useState(() => load('jobs', mock.jobs))
  useEffect(() => { save('jobs', jobs) }, [jobs])
  const add    = j => setJobs([...jobs, j])
  const update = j => setJobs(jobs.map(x=>x.id===j.id?j:x))
  const remove = id=> setJobs(jobs.filter(x=>x.id!==id))
  return (
    <JobsContext.Provider value={{ jobs, add, update, remove }}>
      {children}
    </JobsContext.Provider>
  )
}
