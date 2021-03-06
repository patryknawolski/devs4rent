import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { rootRoute, developersRoute, postsRoute } from 'constants/routes';

class Navigation extends Component {
  state = {
    collapsed: true
  };

  handleTogglerClick = () => this.setState({ collapsed: !this.state.collapsed })

  render () {
    const { collapsed } = this.state;

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <Link className="navbar-brand" to={rootRoute}>devs4rent</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.handleTogglerClick}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={classNames(
            'navbar-collapse',
            'collapse',
            { show: !collapsed }
          )}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={developersRoute}>Developers</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={postsRoute}>Posts</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;