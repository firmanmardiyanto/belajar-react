import React/*, {Component}*/
from 'react';
//before
/*class Footer extends Component {
    render() {
        return (
            <footer>&copy; Firman {(new Date()).getFullYear()}</footer>
        );
    }
}*/
//after
const Footer = () => (
    <footer>&copy; Firman Mardiyanto {(new Date()).getFullYear()}</footer>
); 
export default Footer;