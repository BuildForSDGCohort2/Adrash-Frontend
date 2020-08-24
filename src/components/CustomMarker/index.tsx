import React from 'react';
import {IonIcon}  from '@ionic/react';
import { locationOutline } from 'ionicons/icons';
import './index.css';
const CustomMarker = (props: any) => (<IonIcon icon={props.icon} size={"large"} className={props.cn} />);
export default CustomMarker;