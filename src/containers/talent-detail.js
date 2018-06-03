import React, { Component } from 'react';
import { connect } from 'react-redux';

class TalentDetail extends Component {
    render() {
        if (!this.props.talent) {
            return <div>Select a talent to get started.</div>
        }

        return (
            <div>
                <h3>Details for: </h3>
                <div>Title: {this.props.talent.title}</div>
                <div>Level: {this.props.talent.level}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        talent: state.activeTalent
    };
}

export default connect(mapStateToProps)(TalentDetail);