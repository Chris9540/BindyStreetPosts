import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        margin: theme.spacing(1),
        '& td': {
            borderBottom: "1px dashed",
            borderBottomColor: theme.palette.grey["400"]
        },
         '& td:nth-child(1)': {
            fontWeight: "bold"
        }
    },
    nudge: {
        paddingLeft: theme.spacing(2)
    }

});
class UserData extends React.Component {

    render() {
        const { userData, classes } = this.props;
        return (
            <table className={classes.root}>
                <tbody>
                    <tr>
                        <td>
                            Id
                     </td>
                        <td>
                            {userData.id}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Name
                    </td>
                        <td>
                            {userData.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            User Name
                    </td>
                        <td>
                            {userData.userName}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email
                    </td>
                        <td>
                            {userData.email}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phone
                    </td>
                        <td>
                            {userData.phone}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Website
                    </td>
                        <td>
                            {userData.website}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Address
                    </td>
                    </tr>
                    <tr>
                        <td className={classes.nudge}>
                            Street
                    </td>
                        <td>
                            {userData.street}
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.nudge}>
                            Suite
                    </td>
                        <td>
                            {userData.suite}
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.nudge}>
                            City
                    </td>
                        <td>
                            {userData.city}
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.nudge}>
                            Zipcode
                    </td>
                        <td>
                            {userData.zipcode}
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.nudge}>
                            Latitude
                    </td>
                        <td>
                            {userData.lat}
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.nudge}>
                            Longitude
                    </td>
                        <td>
                            {userData.lng}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Company
                    </td>
                    </tr>
                    <tr>
                        <td className={classes.nudge}>
                            Name
                    </td>
                        <td>
                            {userData.companyName}
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.nudge}>
                            Catch Phrase
                    </td>
                        <td>
                            {userData.catchPhrase}
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.nudge}>
                            BS
                    </td>
                        <td>
                            {userData.bs}
                        </td>
                    </tr>
                </tbody>
            </table>
         );
    }
}


export default withStyles(styles)(UserData)