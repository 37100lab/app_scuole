import React from 'react'

import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonList,
    IonItem,
    IonIcon,
    IonNote
  } from '@ionic/react'

  import { medkitOutline, leafOutline, flagOutline, schoolOutline, golfOutline, storefrontOutline } from 'ionicons/icons'
  import stringManager from '../../utility/stringManager'

const categoryConfig = {
parco: {
    icon: leafOutline,
    color: 'success',
},
farmacia: {
    icon: medkitOutline,
    color: 'danger',
},
bandierina: {
    icon: flagOutline,
    color: 'success',
},
scuola: {
    icon: schoolOutline,
    color: 'success',
},
negozio:{
  icon:storefrontOutline,
  color: 'success'
},
bandierina2:{
  icon:golfOutline,
  color: 'success'
}
}

export const LocationModal = ({ loc }) => {
  //if don't have loc.properties or its attributes throw internal error text,
  // just to easily customize the app farmacie in to other apps
  if(
     (
      loc.properties &&
      ( !('nome_scuol' in loc.properties) || !('indirizzo' in loc.properties)||!('quartiere' in loc.properties))
     )
     || !loc.properties
    )
        return(
          <IonContent>
            <h1>Internal Error</h1>
          </IonContent>
        )

  return (
    <IonContent>
    <IonHeader>
      <IonToolbar>
            <IonItem>
              <IonTitle>
                {stringManager.titleCase(loc.properties.nome_scuol)}
              </IonTitle>
                  <IonIcon
                          color={ categoryConfig["scuola"].color }
                          icon={categoryConfig["scuola"].icon}
                          slot="end"
                      />
            </IonItem>
        </IonToolbar>
    </IonHeader>
    <IonList>
      <IonItem>
        <IonNote slot="start" color="primary">Indirizzo</IonNote>
        <IonLabel className="ion-text-wrap">{stringManager.titleCase(loc.properties.indirizzo)}</IonLabel>
      </IonItem>
      <IonItem>
        <IonNote slot="start" color="primary">Grado</IonNote>
        <IonLabel>{stringManager.titleCase(loc.properties.grado)}</IonLabel>
      </IonItem>
      <IonItem>
        <IonNote slot="start" color="primary">Tipo serv.</IonNote>
        <IonLabel>{stringManager.titleCase(loc.properties.tipo_servi)}</IonLabel>
      </IonItem>
      <IonItem>
        <IonNote slot="start" color="primary">Tipologia</IonNote>
        <IonLabel>{stringManager.titleCase(loc.properties.tipologia)}</IonLabel>
      </IonItem>
      <IonItem>
        <IonNote slot="start" color="primary">Quartiere</IonNote>
        <IonLabel>{stringManager.titleCase(loc.properties.quartiere)}</IonLabel>
      </IonItem>
      <IonItem>
        <IonNote slot="start" color="primary">Circosc.</IonNote>
        <IonLabel>{stringManager.titleCase(loc.properties.circoscriz)}</IonLabel>
      </IonItem>
    </IonList>
  </IonContent>
  )
}

export default LocationModal