import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Units from "../pages/Units/Units"
import UnitDetail from "../pages/UnitDetail/UnitDetail"

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/units' element={<Units />} />
            <Route path='units/detail/:id' element={<UnitDetail />} />
            <Route path='*' element={<div>NOT FOUND</div>} />
        </Routes>
    )
}

export default Router;