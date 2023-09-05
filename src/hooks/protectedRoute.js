import { Navigate } from "react-router-dom";

function ProtectedRoutes({element: Component, ...props}) {
    return (
        props.isLoggedIn
        ? <Component{...props} /> : <Navigate to="/" replace />
    )
}

export default ProtectedRoutes;