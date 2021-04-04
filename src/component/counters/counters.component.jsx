import './counters.component.css';
import React, {Component} from "react";
import CounterComponent from "../counter/counter.component";

class CountersComponent extends Component{
    render() {
        const {onReset, onIncrement, onDelete} = this.props;
        console.log('counters rendered')
        return(
            <React.Fragment>
                <div>
                    <br/>
                    <button
                        onClick={onReset}
                        className='btn btn-primary btn-sm'>
                        Reset
                    </button>
                    {
                        this.props.counters
                            .map(counter =>
                                <CounterComponent
                                    onIncrement={onIncrement}
                                    onDelete={onDelete}
                                    key={counter.id}
                                    counter={counter}/>
                            )
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default CountersComponent;
