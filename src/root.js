import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import PostPage from './components/PostPage'

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/category/:categoryId' component={MainPage}/>
                <Route exact path='/create/post' component={PostPage}/>
                <Route exact path='/post/:postId' component={PostPage}/>
                <Route exact path='/post/:postId/edit' component={PostPage}/>
            </div>
        </BrowserRouter>
    )
}

export default Root