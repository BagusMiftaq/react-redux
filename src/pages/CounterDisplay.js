import React from "react";
import CounterOutput from "./components/CounterOutput";
import CounterControl from "./components/CounterControl";
import {connect} from "react-redux";

const CounterDisplay= (props) => {
    return(
        <>
            <CounterOutput/>
            <CounterControl label={"Decrement"} onClick={props.onDecrement} />
            <CounterControl label={"Increment"} onClick={props.onIncrement} />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        onIncrement: () => dispatch({type:"increment", value: 1}),
        onDecrement: () => dispatch({type:"decrement", value: 1})

    }
}

export default connect(null, mapDispatchToProps)(CounterDisplay);