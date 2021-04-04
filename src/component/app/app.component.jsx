import React, {Component} from 'react';
import CountersComponent from "../counters/counters.component";
import NavbarComponent from "../navbar/navbar.component";

class AppComponent extends Component{
    constructor() {
        super();
        console.log('app component constructor called.');
    }
    componentDidMount() {
        // perfect place for ajax call and update the state
        console.log('app mounted.');
    }

    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
            {id: 5, value: 0}
        ]
    }


    render() {
        console.log('app rendered.');
        return(
            <React.Fragment>
                <NavbarComponent totalCounters={this.state.counters.length}/>
                <main className='container'>
                    <CountersComponent
                        onRest={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        counters={this.state.counters}
                    />
                </main>
            </React.Fragment>
        );
    }
    handleDelete = counterId => {
        const counters = this.state.counters.filter(c=> c.id !== counterId);
        this.setState({counters});
    }
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({counters});
    }
    handleIncrement = (counter) => {
        let counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value += 1;
        this.setState({counters});

    }
}

export default AppComponent;