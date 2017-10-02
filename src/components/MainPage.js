import React, { Component } from 'react'

class MainPage extends Component{
    render () {
        const categoryId = this.props.match.params['categoryId']
        return (
            <div className="main-page">
                {categoryId && (<div>Category Page</div>)}
                {!categoryId && (<div>Main Page</div>)}
            </div>
        )
    }
}

export default MainPage