// @flow
import * as React from "react";
import PropTypes from "prop-types";
import {ListGroup, ListGroupItem} from "react-bootstrap";

type Props = {
    rainyDays: number,
    sunnyDays: number,
    loading: boolean,
    error: boolean
};

class Statistics extends React.Component<Props> {
    render(): React.Node {
        const {props: {rainyDays, sunnyDays, loading, error}} = this;
        return (!loading && !error && <ListGroup>
            <ListGroupItem bsStyle="warning"><strong>Sunny Days:</strong> {sunnyDays}</ListGroupItem>
            <ListGroupItem bsStyle="info"><strong>Rainy Days:</strong> {rainyDays}</ListGroupItem>
        </ListGroup>);
    }
}

Statistics.propTypes = {
    error: PropTypes.bool,
    loading: PropTypes.bool,
    rainyDays: PropTypes.number,
    sunnyDays: PropTypes.number
};

// Statistics.defaultProps = {
//     error: false,
//     loading: false,
//     rainyDays: 0,
//     sunnyDays: 0
// };

export default Statistics;