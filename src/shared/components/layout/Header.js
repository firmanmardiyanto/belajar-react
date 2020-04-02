import React/*, {Component}*/
from 'react'; //kalau pake render baru komponenya diaktifin
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';

/* sebelumna, dibikin pendek
    class Header extends Component {
      // Here you can define your PropTypes.
      static propTypes = {
        title: PropTypes.string.isRequired,
        url: PropTypes.string
      };

      render() {
        const {
          title = 'Welcome to React',
          url = 'http://localhost:3000'
        } = this.props;
    */

//membuat komponen dengan tanda panah (simple gan)
const Header = props => {
    const {
        title = 'Welcome to React',
        url = 'http://localhost:3000'
    } = props;

    return (
        <header className="App-header">
            <a href={url}>
                <img src={logo} className="App-logo" alt="logo"/>
            </a>
            <h1 className="App-title">{title}</h1>
        </header>
    );
};
// } render PropTypes

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
};

export default Header;