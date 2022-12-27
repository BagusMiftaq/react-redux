import React from "react";
import {useSelector} from "react-redux";

function ChildC(){
    const {firstName: fName, lastName: lName} = useSelector(state => state.name);
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

export default ChildC;