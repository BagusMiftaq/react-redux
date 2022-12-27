import React from "react";
import ChildB from "./ChildB";

function ChildA(){
    return(
        <>
            This is ChildA Componet.
            <br/>
            <ChildB/>
        </>
    )
}

export default ChildA;