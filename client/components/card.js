import React from 'react'
import Head from './head'

const Card = ({
  Country,
  NewConfirmed,
  NewDeaths,
  NewRecovered,
  TotalConfirmed,
  TotalDeaths,
  TotalRecovered
}) => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex my-2 mx-2">
        <div className="px-4 py-5 bg-gray-800 border-content flex flex-col text-white rounded-lg shadow-lg w-64 h-64">
          <h2 className="flex truncate justify-center text-center font-bold">
            {Country}
          </h2>
          <ul className="py-2 font-normal text-sm">
            <li className="my-2 flex justify-between">
              <span>NewConfirmed :</span>
              {NewConfirmed}
            </li>
            <li className="my-2 flex justify-between">
              <span>NewDeaths:</span> {NewDeaths}
            </li>
            <li className="my-2 flex justify-between">
              <span>NewRecovered :</span> {NewRecovered}
            </li>
            <li className="my-2 flex justify-between">
              <span>TotalConfirmed :</span> {TotalConfirmed}
            </li>
            <li className="my-2 flex justify-between">
              <span>TotalDeaths :</span>
              {TotalDeaths}
            </li>
            <li className="my-2 flex justify-between">
              <span>TotalRecovered :</span> {TotalRecovered}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {}

export default Card
