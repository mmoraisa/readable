import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import PostPage from './pages/PostPage'

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/category/:categoryPath' component={MainPage}/>
                <Route exact path='/create/post' component={PostPage}/>
                <Route exact path='/post/:postId' component={PostPage}/>
                <Route exact path='/post/:postId/edit' component={PostPage}/>
            </div>
        </BrowserRouter>
    )
}

export default Root