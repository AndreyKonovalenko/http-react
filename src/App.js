import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            {/*<BrowserRouter basename="/">*/}
            {/*default basename is "/", but if we serve our  app not from root path */} 
            {/*but from for example /my-app in that case we should set basename="/my-app"*/}
                <div className="App">
                    <Blog />
                </div>
            </ BrowserRouter>
        );
    }
}

export default App;
