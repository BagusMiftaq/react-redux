import React from "react";
import ChildA from "./ChildA"
import {handleFirstName, handleLastName} from "../../store/action/inputNameAction";
import {useDispatch} from "react-redux";

function Parent(){
    const onSetFirstName = (e) => {
        dispatch(handleFirstName(e.target.value))
    }

    const onSetLastName = (e) => {
        dispatch(handleLastName(e.target.value))
    }

    const dispatch = useDispatch();


    return(
        <>
            <div>This is a parent component</div>
            <br/>

            <form>
                <input placeholder={"first name"}
                onChange={onSetFirstName}/>
                <input placeholder={"last name"}
                onChange={onSetLastName}/>
            </form>

            <br/>
            <ChildA/>
        </>
    )
}
export default Parent;