import React, {Component} from 'react';
import NavbarComponent from "../navbar/navbar.component";
import AboutComponent from "../about/about.component";
import ContactComponent from "../contact/contact.component";
import HelpComponent from "../help/help.component";
import HomeComponent from "../home/home.component";
import ErrorComponent from "../error/error.component";
import ShopComponent from "../shop/shop.component";
import {BrowserRouter, Switch, Route} from "react-router-dom";

class AppComponent extends Component{
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
        return(
            <BrowserRouter>
                <React.Fragment>
                    <NavbarComponent totalCounters={this.state.counters.length}/>

                    <main className='container'>
                        <Switch>
                            <Route path='/' exact component={HomeComponent}/>
                            <Route path='/about' component={AboutComponent}/>
                            <Route path='/contact' component={ContactComponent}/>
                            <Route path='/help' component={HelpComponent}/>
                            <Route path='/shop' component={ShopComponent}/>
                            <Route path='/**' component={ErrorComponent}/>
                        </Switch>
                    </main>
                </React.Fragment>
            </BrowserRouter>
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