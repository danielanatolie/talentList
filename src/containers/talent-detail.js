import React, { Component } from 'react';
import { connect } from 'react-redux';

class TalentDetail extends Component {
    render() {
        return (
            <div>Talent Detail!</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        talent: state.activeTalent
    };
}

export default connect(mapStateToProps)(TalentDetail);