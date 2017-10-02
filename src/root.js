import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MainPage from './components/MainPage'

const Root = () => {
    return (
        <BrowserRouter>
            <div>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/category/:categoryId' component={MainPage}/>
            <Route exact path='/create/post' render={() => (
                <div>Post Creation Page</div>
            )}/>
            <Route exact path='/post/:postId' render={() => (
                <div>Post Details Page</div>
            )}/>
            <Route exact path='/post/:postId/edit' render={() => (
                <div>Post Edit Page</div>
            )}/>
            </div>
        </BrowserRouter>
    )
}

export default Root