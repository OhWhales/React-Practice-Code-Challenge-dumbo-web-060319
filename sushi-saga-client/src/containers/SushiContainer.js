import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi.js"

const SushiContainer = (props) => {



  const renderFour = () => 
  {
    let all = props.currentFour.map((single) => {
      return <Sushi key = {single.id} money = {props.money} handleMoneyChange = {props.handleMoneyChange} sushi = {single} />
    })

    return all

  }

  return (
    <Fragment>
      <div className="belt">
        {
          renderFour()
        }
        <MoreButton sliceFour = {props.sliceFour} />
      </div>
    </Fragment>
  )
}

export default SushiContainer