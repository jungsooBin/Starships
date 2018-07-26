import React from 'react'

import {Navbar} from './components'
import SignUp from './components/forms/signUp'
import Routes from './routes'
import ShipCard from './components/cards/Shipcard'

const App = () => {
  return (
    <div>
      <Navbar />
      <ShipCard />
      {/* <SignUp /> */}
      {/* <Routes /> */}
    </div>
  )
}

export default App
