import React from "react";
import "../styles/loading.css"

const Loading = () => {
    return(
        <div className="preloader">
            <div className="loader"></div>
            <h2>Loading...</h2>
        </div>
    )
}

export default Loading