import react from 'react'
import './AboutMe.css'


class AboutMe extends react.Component {
    constructor () {
        super()
        this.state = {}
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#FFFFFF"
    }

    render() {
        return (
            <div className = 'AboutDeck'>
                
                <br></br>
                <h1 className= "AboutText">Our Objective</h1>
                <p className = 'AboutText'>Wildfires present a cyclical, consistent, and often catastrophic strain on both public and private infrastructure. Their consequences are an issue of massive importance in terms of habitat destruction, financial burden, and loss of life. While many technologies and techniques exist to contain and control wildfires once they have started, these methods suffer from reduced effectiveness if the spread of the fire has reached a critical level. Current methods involve the use of digital cameras, optical sensors, or drone support for detection and localization of already started fires. However, the lack of efficacy of these systems on detecting fire conditions and assessing risks, as well as the inadequacy of conventional communication systems on promptly  notifying presence of wildfires to the responsible entities, call for a better method of combating these fires that places emphasis on accuracy and early detection. For this reason, the team has set out to develop a new method of detecting these events without the need for expensive and needlessly contrived systems typical of traditional wide area networks. </p>

                <br></br>

                <h1 className= "AboutText">The Team</h1>
                <h2 className = 'AboutText'>Software</h2>
                <h3 className = 'AboutText'>Saahil Barai</h3>
                <ul className = 'AboutText'>
                    <li>If additional info needed</li>
                </ul>
                <h3 className = 'AboutText'>Zohan Marediya</h3>
                <ul className = 'AboutText'>
                    <li>If additional info needed</li>
                </ul>
                <h3 className = 'AboutText'>Gabby Williams</h3>
                <ul className = 'AboutText'>
                    <li>If additional info needed</li>
                </ul>
                

                <h2 className = 'AboutText'>Hardware</h2>
                <h3 className = 'AboutText'>Jaxon Coward</h3>
                <ul className = 'AboutText'>
                    <li>If additional info needed</li>
                </ul>
                <h3 className = 'AboutText'>Dillon Heinen</h3>
                <ul className = 'AboutText'>
                    <li>If additional info needed</li>
                </ul>
                <h3 className = 'AboutText'>Erick I. Cortez</h3>
                <ul className = 'AboutText'>
                    <li>If additional info needed</li>
                </ul>

                <br></br>

                
            </div>
                  
        )
    }
}

export default AboutMe 