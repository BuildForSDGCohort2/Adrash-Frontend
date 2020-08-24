import React, { useState, useRef, MutableRefObject, useEffect } from 'react';
import { IonSearchbar, IonSelect, IonSelectOption, IonIcon, IonGrid, IonRow, IonCol, IonButton, IonItem, IonLabel } from '@ionic/react';
import { filterOutline} from 'ionicons/icons';
import './index.css';
const CustomSearch: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [filterValue, setFilterValue] = useState("All")
    const filter = useRef() as MutableRefObject<HTMLIonSelectElement>
    const searchBar = useRef() as MutableRefObject<HTMLIonSearchbarElement>

    useEffect(() => {
        const searchButton = filter.current.getElementsByClassName('searchbar-search-icon');
        console.log(searchButton);
    }, [])
    return (
            <div>
                <IonItem style={{display: "none"}} >
                    <IonLabel>Filter By</IonLabel>
                    <IonSelect ref={filter} value={filterValue} okText="Ok" cancelText="Cancel" onIonChange={e => setFilterValue(e.detail.value)}>
                    <IonSelectOption value="All">All</IonSelectOption>
                    <IonSelectOption value="Hotel">Hotels</IonSelectOption>
                    <IonSelectOption value="Gov't Office">Gov't Offices</IonSelectOption>
                    <IonSelectOption value="Schools">Schools</IonSelectOption>
                </IonSelect>
                </IonItem>
                <IonButton
                 onClick={() => filter.current.click()}
                size={"default"}
                className={"filter-button"}>
                            <IonIcon  icon={filterOutline}/>
                        </IonButton>
                        <IonSearchbar
                        ref={searchBar}
                    searchIcon={filterOutline}
                    value={searchText}
                    onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
            </div>
    )
}

export default CustomSearch;