import React, { useEffect, useState } from 'react';
import { IonPage, IonContent, IonLoading } from '@ionic/react';
import CustomSearch from '../../components/CustomSearch';
import GoogleMap from '../../components/GoogleMap';
import { TAXIS } from '../../data/taxi';
import { useLastMessage } from '../../shared/io/hooks';
const Home: React.FC = () => {
  const [position, setposition] = useState({lat: 18, lng: 38})
  const { data: p, socket, unsubscribe, subscribe } = useLastMessage('watch-location');
  let preV = {lat: 18, lng: 38};
  useEffect(() => {
    if(! ("geolocation" in navigator)) {
      console.log("Not supported")
    }
    subscribe();
    navigator.geolocation.watchPosition((position) => {
      // @ts-ignore
      socket.emit("watch-location", JSON.stringify({position: {lat: position.coords.latitude, lng: position.coords.longitude} }));
    })
    return unsubscribe();
  }, [])
  console.log(p);

    return (
        <IonPage>
           <CustomSearch />
          <IonContent>
            {
            !!p ?
            // @ts-ignore
            <GoogleMap position={p.position} data={TAXIS} google={""}/>
            : <IonLoading isOpen={true}/>
          }
          </IonContent>
        </IonPage>
      );
}

export default Home;