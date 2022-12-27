import React from "react";
import CounterOutput from "./components/CounterOutput";
import CounterControl from "./components/CounterControl";
import {useDispatch} from "react-redux";
import {onDecrement, onIncrement} from "../../store/action/counterAction";

const CounterDisplay= () => {
    const dispatch = useDispatch();
    return(
        <>
            <CounterOutput/>
            <CounterControl label={"Decrement"} onClick={()=> dispatch(onDecrement())} />
            <CounterControl label={"Increment"} onClick={()=> dispatch(onIncrement())} />
        </>
    )
}
export default CounterDisplay;