import React, { Fragment } from 'react';
import { Paper, Typography, Divider, Chip } from '@material-ui/core';
import { withStyles  } from '@material-ui/core/styles';

const styles = theme =>({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    postId: {
        marginRight: theme.spacing(1)
    },
    header: {
        display: "flex",
        width: "100%",
        height: "32px",
        alignItems : "center",
        backgroundColor: theme.palette.secondary.light,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
    },
    title: {
        flexGrow: 1,
        height: "32px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "clip",
        paddingTop: "5px",

    },
    userId: {
        minWidth: "46px",
        textAlign: "right",
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
    },
    body: {
        padding: theme.spacing(1),
    }
});


class Post extends React.Component {
    render() {
        const { userId, postId, postTitle, postBody, classes} = this.props;
        return (
            <Fragment>
                <Paper elevation={3} className={classes.root}>
                    <div className={classes.header}>
                        <Chip label={postId} size="small" className={classes.postId} />
                        <Typography className={classes.title} title={postTitle}>
                            Title | {postTitle}
                        </Typography>
                        <Typography className={classes.userId}>
                            User
                        </Typography>
                        <Chip label={userId} size="small" />
                    </div>
                    <div className={classes.body}>
                        <Typography variant="body1">
                            {postBody}
                        </Typography>
                    </div>
                </Paper>
                <Divider/>
            </Fragment>

        );
    }
};
export default withStyles(styles)(Post)