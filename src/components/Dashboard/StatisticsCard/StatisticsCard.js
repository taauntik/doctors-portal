import React from "react";

// internal imports
import "../../../styles/Dashbaord/StatisticsCard/StatisticsCard.css";

function StatisticsCard({ htmlData, bgcolor, color = "white" }) {
  const styles = {
    container: {
      backgroundColor: bgcolor,
      color: color,
      marginRight: "10px",
      display: "flex",
      alignItems: "center",
      padding: "10px 15px",
      borderRadius: "6px",
      marginTop: "20px"
    }
  };

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlData }}
      className="shadow"
      style={styles.container}
    ></div>
  );
}

export default StatisticsCard;
