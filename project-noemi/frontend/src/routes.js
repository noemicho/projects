import {Routes, Route} from 'react-router-dom'

import App from './App'
import NewPhone from './NewPhone'

import Update from './Update'

function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/home" element={<App/>}/>
            <Route path="/new-phone" element={<NewPhone/>}/>
            <Route path="/update/:id" element={<Update/>}/>
        </Routes>
    )
}

export default MainRoutes