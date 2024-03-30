import { useState } from 'react'
import styles from './Login.module.css'
import { IonButton, IonContent, IonInput, IonItem, IonPage } from '@ionic/react'
import useFetch from '../services/login/login.service'
import { useHistory } from 'react-router'
import Error from '../components/Error'

const Login = (props: any) => {
    const [credentials, setCredentials] = useState({
        email: '',
        mdp: '',
    })
    const [loading, setLoading] = useState(false)
    const [watchError, setWatchError] = useState({})
    const history = useHistory()
    const { fetch } = useFetch()

    const handleChange = (event: any) => {
        let value = event.target.value
        let name = event.target.name

        setCredentials((prevCredentials) => {
            return {
                ...prevCredentials, // Spread Operator
                [name]: value,
            }
        })
    }

    const login = async () => {
        setLoading(true)
        //Manage to show errow despite the fact that a 200 status code is returned even if the user is not authorized
        setWatchError({})

        await fetch('/login', {
            login: credentials.email,
            mdp: credentials.mdp,
            UUID: 1,
            version: '1.000',
        })
            .then((res) => {
                let data = res.data
                if (data.success) {
                    //Store accessToken to perform persistant connection
                    localStorage.setItem('accessToken', data.token)
                    navigateToHome()
                } else {
                    setWatchError(data)
                }
            })
            .catch((e) => {
                setWatchError(e)
            })

        setLoading(false)
    }

    const navigateToHome = () => {
        history.push('/home')
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className={styles.container}>
                    <IonItem>
                        <IonInput
                            label="Login:"
                            name="email"
                            value={credentials.email}
                            onIonInput={handleChange}
                            className={styles.input}
                        ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput
                            label="Password"
                            name="mdp"
                            type="password"
                            value={credentials.mdp}
                            onIonInput={handleChange}
                            className={styles.input}
                        ></IonInput>
                    </IonItem>
                    {loading ? (
                        <div className={styles.button}>
                            <p>Veuillez patienter...</p>
                        </div>
                    ) : (
                        <IonButton className={styles.button} onClick={login}>
                            Sign in
                        </IonButton>
                    )}
                    {Object.keys(watchError).length !== 0 && (
                        <Error error={watchError} />
                    )}
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Login
