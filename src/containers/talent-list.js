import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTalent } from '../actions/index';
import { bindActionCreators } from 'redux';

class TalentList extends Component {
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

function mapStateToProps(state) {
    return {
        talents: state.talents
    };
}

// Whenever selectTalent (available as props within talent-list) 
// is called, pass the result to all reducers 
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectTalent: selectTalent }, dispatch);
}

// Promote talent-list from component to container
export default connect(mapStateToProps, mapDispatchToProps)(TalentList);
