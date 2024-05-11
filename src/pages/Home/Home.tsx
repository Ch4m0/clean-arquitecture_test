import { People } from '@/data/people'
import { addPeople } from '@/redux/state'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { PeopleTable } from './components/PeopleTable'

export type HomeProps = {
  // types...
}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addPeople(People))
  }, [dispatch])

  return <PeopleTable />
}

export default Home
