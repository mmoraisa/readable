import guid from './guid.js'

export const API = 'http://localhost:3001'
let token = localStorage.token

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
    'Accept': 'application/json',
    'Authorization': token,
    'Content-Type': 'application/json'
}

export const fetchPosts = () => {
    return fetch(`${API}/posts`, { headers })
        .then(res => res.json())
}

export const fetchPost = postId => {
    return fetch(`${API}/posts/${postId}`, { headers })
        .then(res => res.json())
}

export const fetchComments = postId => {
    return fetch(`${API}/posts/${postId}/comments`, { headers })
        .then(res => res.json())
}

export const fetchCategoryPosts = (categoryPath) => {
    return fetch(`${API}/${categoryPath}/posts`, { headers })
        .then(res => res.json())
}

export const fetchCategories = () => {
    return fetch(`${API}/categories`, { headers })
        .then(res => res.json())
}

export const votePost = (postId, option) => {
    return fetch(`${API}/posts/${postId}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ option })
    }).then(res => res.json())
}

export const updatePost = (postId, title, author, body, category) => {
    const requestBody = { title, author, body, category }

    return fetch(`${API}/posts/${postId}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(requestBody)
    }).then(res => res.json())
}

export const createPost = (title, author, body, category) => {
    const requestBody = { title, author, body, category }

    requestBody.id = guid();
    requestBody.timestamp = Date.now();

    return fetch(`${API}/posts`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody)
    }).then(res => res.json())
}