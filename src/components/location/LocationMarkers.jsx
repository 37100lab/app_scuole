import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import scuola from '../../assets/icons/locations/school.svg'
import Location from './Location'

const scuolaIcon = L.icon({
  iconUrl: scuola,
  iconSize: [30, 30],
})

const locationConfig = {
  scuola: {
    icon: scuolaIcon,

    color: 'success',
  },
}

export const LocationList = ({ myloc }) => {

  return (
    <div>
      {myloc &&
        myloc.length &&
        myloc.map(loc => (
          <Marker
            key={loc.id}
            position={[loc.geometry.coordinates[1], loc.geometry.coordinates[0]]}
            icon={locationConfig["scuola"].icon}
          >
            <Popup>
              <Location location={loc}/>
            </Popup>
           
          </Marker>
        ))}
    </div>
  )
}



export default LocationList
