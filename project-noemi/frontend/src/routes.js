import {Routes, Route} from 'react-router-dom'

import App from './App'
import NewPhone from './NewPhone'

function MainRoutes(){
    return (
        <Routes>
            <Route path="/home" element={<App/>}/>
            <Route path="/new-phone" element={<NewPhone/>}/>
        </Routes>
    )
}

export default MainRoutes