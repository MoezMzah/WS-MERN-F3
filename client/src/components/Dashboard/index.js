import Navbar from "../Navbar/index";
// import { useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";

const Dashboard = () => {
  // const isAuth = useSelector((state) => state.isAuth);
  // if (!isAuth) {
  //   return <Redirect to="/login" />;
  // }
  return (
    <div>
      <Navbar />
      <h1>Hello from dashboard</h1>
    </div>
  );
};

export default Dashboard;
