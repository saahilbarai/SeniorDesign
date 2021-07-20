import react from 'react'
import './Map.css'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'

function Mapper()  {
    return (
        <GoogleMap defaultZoom={15} defaultCenter={{lat:30.2850, lng:-97.7341}}>

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
                        googleMapURL ="https://maps.googleapis.com/maps/api/js?key=AIzaSyAhSjccTHEAiHK-H99RWj9IcA2pHygWTBE&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement = {<div style = {{height: "100%"}}></div>}
                        containerElement = {<div style = {{height: "100%"}}></div>}
                        mapElement = {<div style = {{height: "100%"}}></div>}>                
                    </WrappedMap>
                </div>
       
            )
    }
}

export default Map 