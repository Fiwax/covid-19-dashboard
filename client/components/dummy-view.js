import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from './head'
import Card from './card'
import { getData } from '../redux/reducers/dataset'

const Dummy = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((s) => s.dataset)
  const { searchTerm } = useSelector((s) => s.dataset)

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div className="">
      <Head title="Hello" />
      <div className="min-h-screen flex flex-wrap justify-evenly py-10">
        {data
          .reduce((acc, rec) => {
          const lowerSearchTerm = searchTerm.toLowerCase()
          return rec.Country.toLowerCase().includes(lowerSearchTerm) || lowerSearchTerm === '' ? [...acc, rec] : acc
          }, [])
          .map((country) => {
            const {
              ID,
              Country,
              NewConfirmed,
              NewDeaths,
              NewRecovered,
              TotalConfirmed,
              TotalDeaths,
              TotalRecovered
            } = country
            return (
              <div key={ID}>
                <Card
                  Country={Country}
                  NewConfirmed={NewConfirmed}
                  NewDeaths={NewDeaths}
                  NewRecovered={NewRecovered}
                  TotalConfirmed={TotalConfirmed}
                  TotalDeaths={TotalDeaths}
                  TotalRecovered={TotalRecovered}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)

// NewConfirmed: 0
// NewDeaths: 0
// NewRecovered:

// TotalConfirmed: 58542
// TotalDeaths: 2565
// : 52363
