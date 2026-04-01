import { Route, Switch } from 'wouter'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import BookDetail from './pages/BookDetail'
import CategoryView from './pages/CategoryView'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/book/:id" component={BookDetail} />
        <Route path="/category/:id" component={CategoryView} />
        <Route>
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl text-charcoal/60">ページが見つかりません</p>
          </div>
        </Route>
      </Switch>
    </AnimatePresence>
  )
}

export default App
