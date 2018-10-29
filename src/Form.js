import React from 'react'

class Form extends React.Component {

state = {entry: '', list: []}

handleChange = (e) => {
this.setState({entry: e.target.value})
console.log(this.state.entry)
}

handleSubmit = (e) => {
    e.preventDefault()
    const { entry, list } = this.state
    console.log(entry)
    this.setState({ list: [entry, ...list]})
    console.log(this.state.list)
    this.setState({entry: ''})
}


render () {
 const { entry, list } = this.state
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <input 
                name="name"
                value={entry}
                onChange={this.handleChange}
                >
                </input> 
            </form>
            <ul>
            { list.map( (entry, i) => <li key={i}>{entry}</li> ) }
          </ul>
          </>
        )
    }
}

export default Form