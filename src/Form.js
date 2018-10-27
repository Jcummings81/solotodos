import React from 'react'

class Form extends React.Component {

    state = {entry: ''}

handleChange = (e) => {
this.setState({entry: e.target.value})
console.log(this.state.entry)
}

handleSubmit = (e) => {
    e.preventDefault()
    const { entry } = this.state
    console.log(entry)
    this.setState({entry: ''})
}



    render () {
 const { entry } = this.state
        return(

            <form onSubmit={this.handleSubmit}>
                <input 
                id="myinput"
                name="entry"
                value={entry}
                onChange={this.handleChange}
                >
                </input> 
            </form>
        )
    }
}

export default Form