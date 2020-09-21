import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Posts } from './components/Posts'
import Layout from './components/Layout';
import Graph from './components/Graph';
import './custom.css';
import theme from './theme';

const muiTheme = createMuiTheme(theme);

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <MuiThemeProvider theme={muiTheme}>
                <Layout>
                    <Route exact path='/' component={Posts} />
                    <Route exact path='/graph' component={Graph} />
                    <Redirect from="/*" to="/" />
                </Layout>
            </MuiThemeProvider>
        );
    }
}
