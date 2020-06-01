import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Loading from '../common/loading/Loading';
import fetchData from '../common/fetch';
import './Details.css';

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = { show: {} };
    }

    componentDidMount() {
        let showId = this.props.match.params.showId;
        fetchData(`/rest/shows/${showId}`)
            .then(show => this.setState({ show }));
    }

    render() {
        let show = this.state.show;
        if (show) {
            return show.id ?
                <DetailsContent show={show} /> :
                <Loading />;
        } else {
            return <Redirect to='/not-found' />;
        }
    }
}

function DetailsContent({ show }) {
    return (
        <div className='details' style={{
            'backgroundImage': `url(${require(`../common/images/wallpapers/${show.id}.jpg`)})`
        }}>
            <div className='details-content'>
                <h1 className='details-content-title'>{show.title}</h1>
                <h3 className='details-content-synopsis'>
                    {show.synopsis}
                </h3>
                <div>
                    <Link to={`/${show.id}/play`} className='details-play' />
                </div>
            </div>
        </div>
    )
}