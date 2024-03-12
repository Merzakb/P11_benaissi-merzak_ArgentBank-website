import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const { token } = useSelector((state) => state.auth)

    if (!token) {
        return (
        <div className="main main-error bg-dark">
            <h1>Unauthorized </h1>
            <span>
                <NavLink className="main-error-link" to='signin'>Sign In</NavLink> to gain access
            </span>
        </div>
        )
    }

    return <Outlet />
}

export default ProtectedRoutes