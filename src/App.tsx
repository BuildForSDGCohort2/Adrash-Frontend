import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTab,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home';
import Notification from './pages/Notification';
import Setting from './pages/Setting';
import {homeOutline, settingsOutline, notificationsOutline } from 'ionicons/icons';
import { SocketIOProvider } from './shared/io';
require('dotenv').config()
const App: React.FC = () => (
  <SocketIOProvider url={process.env.REACT_APP_API_URL || ""}>
      <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
              <Route path="/home" component={Home} exact={true} />
              <Route path="/notifications" component={Notification} exact={true} />
              <Route path="/settings" component={Setting} exact={true} />
              <Route path="/" render={() => <Redirect to="/home" />} exact={true} />  
        </IonRouterOutlet>
        <IonTabBar slot={"bottom"}>
              <IonTabButton tab="home" href="/home">
                  <IonIcon icon={homeOutline} />
                  <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="notifications" href="/notifications">
                  <IonIcon icon={notificationsOutline} />
                  <IonLabel>Notification</IonLabel>
              </IonTabButton>
              <IonTabButton tab="settings" href="/settings">
                  <IonIcon icon={settingsOutline} />
                  <IonLabel>Setting</IonLabel>
              </IonTabButton>
        </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </SocketIOProvider>
);

export default App;
