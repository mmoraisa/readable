import React, { Component } from 'react'

class MainPage extends Component{
    render () {
        const categoryQuery = this.props.match.params['categoryId']
        return (
            <div className="main-page">
                {categoryQuery && (<div>Category Page</div>)}
                {!categoryQuery && (<div>Main Page</div>)}
            </div>
        )
    }
}

export default MainPage