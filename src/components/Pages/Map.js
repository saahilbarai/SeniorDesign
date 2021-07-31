import react, {useState} from 'react'
import './Map.css'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
import * as sensorData from "./Data/SensorData.json"

function Mapper()  {
    const [selectedDevice, setSelectedDevice] = useState(null);

    return (
        <GoogleMap defaultZoom={15} defaultCenter={{lat:30.2850, lng:-97.7341}}>
            {sensorData.sensors.Map((device) => ( 
                <Marker 
                key={device.properties.deviceId} 
                position = {{lat: device.properties.latitude, lng: device.properties.longitude}} 
                onClick = {()=>{
                    setSelectedDevice(device);
                }}
                />
            ))}
            {selectedDevice && (
                <InfoWindow
                    position = {{lat: selectedDevice.properties.latitude, lng: selectedDevice.properties.longitude}}
                    onCloseClick = {()=> {
                        setSelectedDevice(null);
                    }}
                >
                    <div>
                        <h2>{selectedDevice.properties.deviceName}</h2>
                    </div>
                </InfoWindow>
            )}

        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Mapper))


class Map extends react.Component {
    constructor () {
        super()
        this.state = {}
    }
    
    componentDidMount() {
        document.body.style.backgroundColor = "#FFFFFF"
    }

    render() {
        return (
                <div style ={{width: '100vw', height: '100vh'}}>
                    <WrappedMap 
                        googleMapURL ="https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement = {<div style = {{height: "100%"}}></div>}
                        containerElement = {<div style = {{height: "100%"}}></div>}
                        mapElement = {<div style = {{height: "100%"}}></div>}>                
                    </WrappedMap>
                </div>
       
            )
    }
}

export default Map 