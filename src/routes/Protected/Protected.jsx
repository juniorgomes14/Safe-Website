import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


const Protected = ({ children }) => {
  const Auth = useAuth()
  
  // return Auth.token ? children : <Navigate to="/" replace />
  return  children 

}

export default Protected