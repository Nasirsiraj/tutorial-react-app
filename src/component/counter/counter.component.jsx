import './counter.component.css';
import React, {Component} from "react";

class CounterComponent extends Component{
    render() {
        console.log('counter rendered');
        return(
            <React.Fragment>
                <div>
                    <br/>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button
                        onClick={() => this.props.onIncrement(this.props.counter)}
                        className='btn btn-secondary btn-sm'>
                        Increase</button>
                    <button
                        onClick={() => this.props.onDelete(this.props.counter.id)}
                        className='btn btn-danger btn-sm m-2'>
                        Delete
                    </button>
                </div>

            </React.Fragment>
        );
    }

    formatCount = () => {
        let value = this.props.counter.value;
        return (value === 0)
            ? 'Zero'
            : value;
    }
    getBadgeClasses = () => {
        let value= this.props.counter.value;
        let classes = 'badge p-2 shadow m-3 badge-';
        classes += (value === 0)
            ? 'warning'
            : 'primary';
        return classes;
    }
}



export default CounterComponent;