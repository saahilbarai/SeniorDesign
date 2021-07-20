import react from 'react'
import './Home.css'
import { Link } from "react-router-dom";



class Home extends react.Component {
    constructor () {
        super()
        this.state = {
        }
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#FFFFFF"
    }


    render() {
        return (
            <div>
                <div className = "row">
                    <div className = "col">
                        <div className = "textWrapper">
                            <div className = "lines">
                                <p className = 'mainTextHome'>We're on a mission to change the fight against forrest fires.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home 