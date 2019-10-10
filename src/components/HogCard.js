import React, { Component } from 'react'

export default class HogCard extends Component {

    state = {
        show: true,
        info: false
    }

    render() {
        return (

            <div className="ui eight wide column" onClick={ this.clickHandler }>
                <h1>{ this.props.hogInfo.name }</h1>
                <img src={ require(`../hog-imgs/${this.props.hogInfo.name.toLowerCase().split(" ").join('_')}.jpg`) } alt="test"/>
                { this.state.info ?
                    <ul>
                        <li>speaciality: {this.props.hogInfo.specialty}</li>
                        <li>highest medal: {this.props.hogInfo['highest medal achieved']}</li>
                        </ul>
                    :
                    null
                    }
            </div>
        )
    }

    clickHandler = () => {
        let infoShown = this.state.info
        this.setState({
            info: infoShown ? false : true
        })
    }

    findImage = () => {
        let name = this.props.hogInfo.name.toLowerCase()
        let url = `src/hog-imgs/${this.props.hogInfo.name.toLowerCase()}.jpg`
        console.log(url)
        console.log(name)
        return url
    }
}
