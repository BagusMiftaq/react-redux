import React from "react";
import {connect} from "react-redux";

function ChildC({fName, lName}){
    return(
        <>
            This is ChildC Componet.
            <br/>
            <h3>Data from parent component is as follow</h3>
            <h4>{fName}</h4>
            <h4>{lName}</h4>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        fName : state.name.firstName,
        lName : state.name.lastName
    }
}

export default connect(mapStateToProps, null) (ChildC);