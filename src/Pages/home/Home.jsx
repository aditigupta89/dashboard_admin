import React from "react";
import "./home.scss";
import Sidebar from "../../Compnents/sidebar/Sidebar";
import Navbar from "../../Compnents/navbar/Navbar";
import Widgets from "../../Compnents/widgets/Widgets";
import Featured from "../../Compnents/featured/Featured";
import Chart from "../../Compnents/charts/Chart";
import Tabel from "../../Compnents/table/Tabel";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user"/>
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured/>
          <Chart aspect={2/1} title="Last 6 Months (Revenue)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest Transaction
          </div>
          <Tabel/>
        </div>
      </div>
    </div>
  );
};

export default Home;
