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


    filterHogs = (hogArray) => {
        let newArray = hogArray.filter((hog) => {
                return hog.greased
        })
        return newArray
        }

    clickHandler = () => {
        let isGreasedSorted = this.state.greasedSorted
        this.setState({
            greasedSorted: isGreasedSorted ? false : true
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
                    {  }
                </div>
            </div>

        )
    }

    renderWithConditionals = () => {
        if (this.state.nameSorted || this.state.weightSorted) {
            let sortedHogsArray = this.sortAllTheHogs()
            this.state.greasedSorted ? this.sortPigs(sortedHogsArray) : this.showPig(sortedHogsArray)
        } else {
            this.state.greasedSorted ? this.sortPigs(hogs) : this.showPig(hogs)
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


        if (this.state.nameSorted && !this.state.weightSorted) {
            return sortedHogs.sort()
        } else if (!this.state.nameSorted && this.state.weightSorted) {
            return sortedHogs.sort(weightSorter)
        } else if (this.state.nameSorted && this.state.weightSorted) {
            return sortedHogs.sort().sort(weightSorter)
        } else {
            return hogs
        }
    }

    sortGreasedPigs = (hogArray) => {
        // console.log('click')
        let filteredHogs = this.filterHogs(hogArray)
        // console.log(filteredHogs)

        return filteredHogs.map((hog) => {
            return < HogCard hogInfo={ hog }/>
           })
    }

    showPig = (hogArray) => {
       return hogArray.map((hog) => {
        return < HogCard hogInfo={ hog }/>
       })
    }
}
