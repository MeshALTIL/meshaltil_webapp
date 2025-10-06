import { render } from 'preact'
import { LocationProvider, Router, Route } from 'preact-iso'

import { BasicSettings } from './pages/BasicSettings.jsx'
import { AdvancedSettings } from './pages/AdvancedSettings.jsx'
import { NotFound } from './pages/_404.jsx'

import './style.css'

export function App() {
    return (
        <LocationProvider>
            <main>
                <Router>
                    <Route path="/webapp/" component={BasicSettings} />
                    <Route path="/webapp/advanced" component={AdvancedSettings} />
                    <Route default component={NotFound} />
                </Router>
            </main>
        </LocationProvider>
    )
}

render(<App />, document.getElementById('app'))
