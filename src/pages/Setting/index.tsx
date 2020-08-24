import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Header from '../../components/Header';

const Setting: React.FC = () => {
    return (
        <IonPage>
            <Header title={"Settings"}/>
        <IonContent>
            <div>Settings</div>
        </IonContent>
    </IonPage>
    )
}

export default Setting;