import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from './Header';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    container: {
        marginTop : "88px",
    }
});

class Layout extends Component {
  static displayName = Layout.name;

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <Container className={classes.container}>
                    {this.props.children}
                </Container>
            </div>
    );
  }
}

export default withStyles(styles)(Layout)