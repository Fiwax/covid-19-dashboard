import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchText } from '../redux/reducers/dataset'

const Header = () => {
  const dispatch = useDispatch()
  const { globalNumbers } = useSelector((s) => s.dataset)
  const { TotalConfirmed } = globalNumbers
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900">
      <div className="font-medium text-white my-0.5">
        <div className="md:block hidden">
          Date: <span className="font-normal">{new Date().toLocaleString()}</span>
        </div>
        <div>
          TotalConfirmed: <span className="font-normal">{TotalConfirmed}</span>
        </div>
      </div>
      <div>
        <input
          className="pl-2 h-9 w-40 rounded-full focus:outline-none bg-gray-100 focus:bg-white"
          onChange={(e) => dispatch(getSearchText(e.target.value))}
          type="search"
          placeholder="Search a country.."
        />
      </div>
    </div>
  )
}

export default Header

//  Country, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered
