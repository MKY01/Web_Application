import React from 'react';
import './Gallery.css';
import Cover from './cover/Cover';
import Loading from '../common/loading/Loading';
import fetchData from '../common/fetch';

export default class Gallery extends React.Component {

    constructor() {
        super();
        this.state = { shows: [] };
    }

    componentDidMount() {
        fetchData('/rest/shows')
            .then(shows => this.setState({ shows }));
    }

    render() {
        return (
            <div className='gallery'>{
                this.state.shows.length ?
                    this.state.shows.map(show => {
                        return (
                            <Cover key={show.id} id={show.id} title={show.title} />
                        );
                    }) :
                    <Loading />
            }
            </div>
        );
    }
}