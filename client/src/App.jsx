import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { Navbar } from './components'
import { Home, SignIn } from './pages'

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App
