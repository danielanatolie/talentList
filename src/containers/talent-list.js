import React, { Component } from 'react';

export default class TalentList extends Component {
    renderList() {
        return this.props.talents.map((talent) => {
            return (
                <li key={talent.title} className="list-group-item">{talent.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}