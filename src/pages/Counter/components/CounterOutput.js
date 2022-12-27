import {useSelector} from "react-redux";

const CounterOutput = () =>{
    const value = useSelector(state => state.counter.counter);
    return (
       <h3>Counter : {value} </h3>
    )
}

export default CounterOutput;