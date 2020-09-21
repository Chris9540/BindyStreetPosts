import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Typography, Button, Popover } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withGetScreen } from 'react-getscreen'
import UserData from './UserData';



const styles = theme => ({
    button: {
        marginRight: "20px"
    },
    title: {
        flexGrow: 2,
        display: "flex",
        '& p': {
            alignSelf: "flex-end",
            marginLeft: theme.spacing(1),
            width : "100px",
        },
    },
    userData: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    userDataDisplay: {
        display: "flex",
        width: "fit-content",
        maxWidth: "250px",
        flexDirection: "column",
        justifyContent: "space-between",
        height : "60px",
        '& div': {
            width: "100%",
            display: "flex",
            '& p': {
                fontSize: "80%"
            },
            '& p:nth-child(1)': {
                width : "44px",
            },
            '& p:nth-child(2)': {
                width: "8px",
            },
            '& p:nth-child(3)': {
                flexGrow: 1,
            },
        },
    },
    icon: {
        height: "54px",
        width: "54px",
        padding: "4px",
        marginLeft: theme.spacing(1),
        '& svg': {
            color: theme.palette.grey["500"],
            fontSize: "54px",
        },
    },
    iconSmall: {
        height: "34px",
        maxWidth: "34px",
        minWidth: "34px",
        padding: "0px",
        marginLeft: theme.spacing(1),
        '& svg': {
            color: theme.palette.grey["500"],
            fontSize: "34px",
        },
    },
    dataList: {
        listStyle: "none"
    }
});

class Header extends Component {
    static displayName = Header.name;
    state = {
        anchorEl: null,
        view: "Posts",
        loading: true,
        userData: null,
    }

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };
    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };
    changeView = event => {
        this.setState({view : "Bar Graph"})
    }

    componentDidMount() {
        this.populateUserData();
    }


    render() {
        const { classes } = this.props;
        const { anchorEl, view, userData, loading } = this.state;
        const isMobile = this.props.isMobile();
        const open = Boolean(anchorEl);

        return (
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        {!isMobile ?
                            <Fragment>
                                <Button
                                    edge="start"
                                    color="secondary"
                                    className={classes.button}
                                    variant="contained"
                                    onClick={this.changeView}

                                >
                                    <NavLink tag={Link} style={{ color: "white" }} to="/graph">TODOS</NavLink>
                                </Button>
                                <Typography variant="h4" className={classes.title}>
                                    Bindy Street
                                    <Typography variant="h6" component="p">
                                        {view}
                                    </Typography>
                                </Typography>
                            </Fragment>   
                            :
                            <Fragment>
                                <Button
                                    edge="start"
                                    color="secondary"
                                    className={classes.button}
                                    variant="contained"
                                    onClick={this.changeView}
                                    size="small"
                                    style={{padding : "0px"}}
                                >
                                    <NavLink tag={Link} style={{ color: "white" }} to="/graph">TODOS</NavLink>
                                </Button>
                                <Typography style={{ fontWeight: "bold" }} className={classes.title}>
                                    Bindy Street
                                    <Typography style={{ marginLeft : "4px" }}>
                                        {view}
                                    </Typography>
                                </Typography>
                            </Fragment>
                        }

                        {loading ? null : 
                            <div className={classes.userData}>
                                <div className={classes.userDataDisplay}>
                                    {!isMobile &&
                                        <Fragment>
                                            <div>
                                                <Typography>Name</Typography>
                                                <Typography>|</Typography>
                                                <Typography>{userData.userName}</Typography>
                                            </div>
                                            <div>
                                                <Typography>User Id</Typography>
                                                <Typography>|</Typography>
                                            <Typography>{userData.id}</Typography>
                                            </div>
                                            <div>
                                                <Typography>Email</Typography>
                                                <Typography>|</Typography>
                                            <Typography>{ userData.email}</Typography>
                                            </div>
                                        </Fragment>
                                    }
                                </div>
                                {!isMobile ?
                                    <Button
                                        className={classes.icon}
                                        aria-owns={open ? 'simple-popper' : undefined}
                                        aria-haspopup="true"
                                        variant="contained"
                                        onClick={this.handleClick}
                                        title="User Info"
                                    >
                                        <PersonIcon />
                                    </Button>
                                    :
                                    <Button
                                        className={classes.iconSmall}
                                        aria-owns={open ? 'simple-popper' : undefined}
                                        aria-haspopup="true"
                                        variant="contained"
                                        onClick={this.handleClick}
                                        title="User Info"
                                    >
                                        <PersonIcon />
                                    </Button>

                                }
                                <Popover
                                    id="simple-popper"
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={this.handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <UserData userData={userData}/>
                                </Popover>
                            </div>
                        }                        
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

    async populateUserData() {
        const response = await fetch('userdata');
        const data = await response.json();
        this.setState({ userData: data[0], loading: false });

    }
}


export default withStyles(styles)(withGetScreen(Header));

