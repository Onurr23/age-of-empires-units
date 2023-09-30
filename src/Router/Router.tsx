import { Routes, Route, Link, NavLink } from "react-router-dom"
import Home from "../Pages/Home"
import Units from "../Pages/Units"
import UnitDetail from "../Pages/UnitDetail"

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/units' element={<Units />} />
            <Route path='/unit-detail' element={<UnitDetail />} />
        </Routes>
    )
}

export default Router;