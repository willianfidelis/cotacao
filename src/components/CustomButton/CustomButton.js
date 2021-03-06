import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import './CustomButton.css';

import { Icon } from 'react-icons-kit'
import { longArrowRight } from 'react-icons-kit/fa/longArrowRight';

class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.enabled)
            this.props.history.push(this.props.route);
    }

    render() {
        const { text } = this.props;
        return (
            <button
                className={this.props.btnClass}
                onClick={e => this.handleClick()}>
                {text}
                <Icon className="App-btn-icon" size={16} icon={longArrowRight} />
            </button>
        );
    }
}

CustomButton.propTypes = {
    text: PropTypes.string,
    route: PropTypes.string,
    btnClass: PropTypes.string,
    clickHandler: PropTypes.func,
    enabled: PropTypes.bool
};

CustomButton.defaultProps = {
    text: 'Iniciar',
    route: '/',
    btnClass: 'App-btn',
    clickHandler: null,
    enabled: true
};

export default withRouter(CustomButton);