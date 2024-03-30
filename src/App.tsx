import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Tab3 from './pages/Home'
import Login from './pages/Login'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

setupIonicReact()

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/login" component={Login}>
                    <Login />
                </Route>
                {/*
                 * Uncomment next Route and comment previous Route to see "persistent" log in
                 * Need a refresh token from the server to be better
                 */}
                {/* <Route
                    exact
                    path="/login"
                    render={(props) => {
                        let token = localStorage.getItem('accessToken')
                        console.log('token', token)
                        return token !== null ? (
                            <Redirect to="/home" />
                        ) : (
                            <Redirect to="/login" />
                        )
                    }}
                /> */}
                <Route path="/home">
                    <Tab3 />
                </Route>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
)

export default App
