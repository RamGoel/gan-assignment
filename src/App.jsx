import React, { useEffect } from 'react'
import { appName } from './constants/strings'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Router from './Router';
function App() {

    useEffect(e => {
        document.title = appName
    })
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}

export default App