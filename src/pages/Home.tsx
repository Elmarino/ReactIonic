import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react'
import styles from './Home.module.css'

const Tab3: React.FC = () => {
    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={styles.container}>
                    <strong>Vous êtes connecté</strong>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Tab3
