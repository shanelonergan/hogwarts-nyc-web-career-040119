import React, { Component } from 'react'
import hogs from '../porkers_data.js'
import HogCard from './HogCard.js'

export default class PigContainer extends Component {

    state = {
     hogsArray: hogs,
     sorted: false
    }


    filterHogs = () => {
        let newArray = this.state.hogsArray.filter((hog) => {
                return hog.greased
        })
        return newArray
        }

    clickHandler = () => {
        let isSorted = this.state.sorted
        this.setState({
            sorted: isSorted ? false : true
        })
    }


    render() {

        return (

            <div>
                <button onClick={ this.clickHandler }>Toggle greasy bois</button>
                <br/>
                <br/>
                <br/>
                <div className='ui grid container'>
                    { this.state.sorted ? this.sortPigs() : this.showPig() }
                </div>
            </div>

        )
    }

    sortPigs = () => {
        // console.log('click')
        let filteredHogs = this.filterHogs()
        // console.log(filteredHogs)

        return filteredHogs.map((hog) => {
            return < HogCard hogInfo={ hog }/>
           })
    }

    showPig = () => {
       return hogs.map((hog) => {
        return < HogCard hogInfo={ hog }/>
       })
    }
}
