import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import {ReactComponent as Logo} from '../../assets/toko aldi.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component'

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            {/* <Logo className='logo' /> */}T O K O A L D I
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/CONTACT'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>Welcome <strong>{currentUser.displayName}</strong>!</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
            <CartDropdown />
        }
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);