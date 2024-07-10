import PropTypes from "prop-types";
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


const Protected = ({ children }) => {
  const { loading, user } = useAuth()

  if (loading) {
    // return <span className="loading loading-dots loading-lg"></span>;
    return <p>Carregado</p>
  }

  if (user) {
    return children;
  }

  return <Navigate to="/admin" />;
}

Protected.propTypes = {
  children: PropTypes.node,
};


  // const Auth = useAuth()
  // const [token, setToken] = useState(null);



  // useEffect(() => {
    // const fetchToken = async () => {
    //   const newToken = await Auth.getToken();
    //   setToken(newToken);
    // };

    // fetchToken();

  //   console.log("change")
    
  // }, [Auth.getToken()]);

  
  // console.log("verificar token ", await Auth.getToken())
  
  // return token ? children : <Navigate to="/admin" replace />
  // return  children 



export default Protected