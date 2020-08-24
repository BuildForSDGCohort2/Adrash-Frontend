import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Header from '../../components/Header';

const Notification: React.FC = () => {
    return (
        <IonPage>
            <Header title={"Notifications"}/>
            <IonContent>
                <div>Notifications</div>
            </IonContent>
        </IonPage>
    );
}

export default Notification;