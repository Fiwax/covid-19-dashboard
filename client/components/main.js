import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dummy from './dummy-view'
import Head from './head'
import Header from './header'
import Loader from './loader'
import { getData } from '../redux/reducers/dataset'

const Main = () => {
  const { isLoading } = useSelector((s) => s.dataset)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div>
      <Head />
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <Header />
          <Dummy />
        </div>
      )}
    </div>
  )
}

export default Main
