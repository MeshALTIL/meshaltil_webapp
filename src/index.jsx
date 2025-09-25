import { render } from 'preact'
import { LocationProvider, Router, Route } from 'preact-iso'

import { Home } from './pages/home.jsx'
import { NotFound } from './pages/_404.jsx'
import './style.css'

export function App() {
    return (
        <LocationProvider>
            <main>
                <Router>
                    <Route default component={Home} />
                    <Route path="*" component={NotFound} />
                </Router>
            </main>
        </LocationProvider>
    )
}

render(<App />, document.getElementById('app'))
