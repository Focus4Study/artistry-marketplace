import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading}=useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <>
        <span className="loading loading-spinner loading-lg flex mx-auto"></span>
        </>
    }

    if(!user){
        return <Navigate to={'/login'} state={location?.state || '/'}/>
    }
    return (
            children
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.object
};

export default PrivateRoute;