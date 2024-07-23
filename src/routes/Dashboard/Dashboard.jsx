import { Toaster } from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import AddApartmentSale from "../../components/AddApartmentSale/AddApartmentSale";
import AddCarSales from "../../components/AddCarSales/AddCarSales";
import LinksManager from "../../components/LinksManager/LinksManager";
import { useAuth } from "../../context/AuthContext";
import "./Dashboard.css";
import ApartmentList from "../../components/ApartmentList/ApartmentList";

const Dashboard = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="username">
          <FaUserCircle className="user-icon" />
          <p>{user.email}</p>
        </div>

        <button className="logout-btn" onClick={logOut}>
          <MdOutlineLogout className="logout-icon" />
        </button>
      </div>
      <LinksManager />
      <AddApartmentSale />
      <ApartmentList/>
      <AddCarSales />
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "#303030",
            padding: "16px",
            color: "#D9D9D9",
          },
        }}
      />
    </div>
  );
};

export default Dashboard;
