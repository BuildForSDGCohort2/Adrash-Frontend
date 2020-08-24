import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import React from 'react';

const Header: React.FC<{title: string}> = ({title}) => {
    return (
        <IonHeader>
          <IonToolbar
            style={{
              background: "#f0652f",
            }}
          >
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
      );
}
export default Header;