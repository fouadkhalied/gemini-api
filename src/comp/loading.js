





import React from "react";
import './comp.css'

const Loading = ()=>{
     
    return (
        <div className="body-loading">
        <div className="container-loading">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <span className="loading">Loading...</span>
        </div>
        </div>
    )
}

export default React.memo(Loading);