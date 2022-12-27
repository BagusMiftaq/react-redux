import {connect} from "react-redux";

const CounterOutput = (props) =>{
    return (
       <h3>Counter : {props.value}</h3>
    )
}

const mapStateToProps = (state) => {
    return{
        value: state.counter
    }
}

export default connect(mapStateToProps, null)(CounterOutput);