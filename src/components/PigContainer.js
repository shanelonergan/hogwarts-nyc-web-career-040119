import React, { Component } from 'react'
import hogs from '../porkers_data.js'
import HogCard from './HogCard.js'
let sortedHogs = [...hogs]
export default class PigContainer extends Component {
    state = {
     hogsArray: hogs,
     greasedSorted: false,
     nameSorted: false,
     weightSorted: false
    }

    greaseHandler = () => {
        let isGreasedSorted = this.state.greasedSorted
        this.setState({
            greasedSorted: isGreasedSorted ? false : true
        })
    }

    nameHandler = () => {
        let isNameSorted = this.state.nameSorted
        this.setState({
            nameSorted: isNameSorted ? false : true,
            weightSorted: false
        })
    }

    weightHandler = () => {
        let isWeightdSorted = this.state.weightSorted
        this.setState({
            weightSorted: isWeightdSorted ? false : true,
            nameSorted: false
        })
    }


    render() {

        return (

            <div>
                <button onClick={ this.greaseHandler }>Toggle greasy bois</button>
                <button onClick={ this.nameHandler }>Sort by name</button>
                <button onClick={ this.weightHandler }>Sort by weight</button>
                <br/>
                <br/>
                <br/>
                <div className='ui grid container'>
                    { this.renderWithConditionals() }
                </div>
            </div>

        )
    }

    renderWithConditionals = () => {
        if (this.state.nameSorted || this.state.weightSorted) {
            let sortedHogsArray = this.sortAllTheHogs()
            console.log(sortedHogsArray)
            return this.state.greasedSorted ? this.sortGreasedPigs(sortedHogsArray) : this.showPig(sortedHogsArray)
        } else {
            console.log(hogs)
            console.log(this.sortGreasedPigs(hogs))
            console.log(this.showPig(hogs))
            return this.state.greasedSorted ? this.sortGreasedPigs(hogs) : this.showPig(hogs)
        }

    }


    sortAllTheHogs = () => {
        function weightSorter(a,b) {
        if (a.weight < b.weight)
            return -1;
         if (a.weight > b.weight)
           return 1;
         return 0;
        }


        if (this.state.nameSorted) {
            return sortedHogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name))
        } else if (this.state.weightSorted) {
            return sortedHogs.sort(weightSorter)
        } else {
            return hogs
        }
    }

    filterHogs = (hogArray) => {
        let newArray = hogArray.filter((hog) => {
                return hog.greased
        })
        return newArray
    }

    sortGreasedPigs = (hogArray) => {
        console.log('sorting')
        let filteredHogs = this.filterHogs(hogArray)
        console.log(filteredHogs)

        return filteredHogs.map((hog) => {
            return < HogCard hogInfo={ hog }/>
           })
    }

    showPig = (hogArray) => {
        console.log('showing pigs!')
        return hogArray.map((hog) => {
            return ( < HogCard hogInfo={ hog }/> )
        })
    }
}
