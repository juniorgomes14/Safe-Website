import AddApartmentSale from "../../components/Add ApartmentSale/AddApartmentSale";
import LinksManager from "../../components/LinksManager/LinksManager";
import { Toaster } from "react-hot-toast";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <LinksManager />
      <AddApartmentSale />
      <Toaster
        toastOptions={{
          style: {
            backgroundColor:"#303030",
            padding: "16px",
            color: "#D9D9D9",
          },
        }}
      />
    </div>
  );
};

export default Dashboard;
