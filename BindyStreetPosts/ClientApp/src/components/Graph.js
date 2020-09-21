import React, { Component, Fragment } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { withGetScreen } from 'react-getscreen'
import { Typography } from '@material-ui/core';

class Graph extends Component {
    static displayName = Graph.name;

    state = {
        data: [],
        loading: true,
    }

    componentDidMount() {
        this.populateGraphData();
    }

    render() {
        const { data, loading } = this.state

        const width = (this.props.isMobile()) ? 280 : 600;

        return (
            <div>
                {loading ? <em>Loading...</em> :
                    <Fragment>
                        <Typography variant="h6">
                            Graph showing the number off letters in a todo tile listed by id.
                        </Typography>
                        <BarChart
                            width={width}
                            height={data.length * 44}
                            data={data}
                            layout="vertical"
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number"/>
                            <YAxis type="category" dataKey="id" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#86bb78" name="Number of Letters In Title"/>
                        </BarChart>
                    </Fragment>

                }
            </div>
        );
    }

    async populateGraphData() {
        const response = await fetch('todos');
        const data = await response.json();
        this.setState({ data: data, loading: false });
    }
}

export default withGetScreen(Graph)