import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Navbar } from './components'
import { Home, SignIn, Panel } from './pages'
import { useStore } from './store'

const App = () => {
  const stateToken = useStore(state => state.token)
  const queryClient = new QueryClient()
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          <Switch>
            {stateToken === '' ? (
              <>
                <Route exact path="/" component={Home} />
                <Route path="/sign-in" component={SignIn} />
                <Redirect to="/" />
              </>
            ) : (
                <>
                  <Route path="/panel" component={Panel} />
                  <Redirect to="/panel" />
                </>
              )}
          </Switch>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
