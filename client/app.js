import React from 'react'

import {Navbar} from './components'
import SignUp from './components/forms/signUp'
import Routes from './routes'
import ShipCard from './components/cards/ShipCard'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <SignUp /> */}
      <Routes />
    </div>
  )
}
export default App
 


