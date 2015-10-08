import React from 'react';
import Navbar from '../../src/Navbar';
import NavItem from '../../src/NavItem';
import NavbarHeader from '../../src/NavbarHeader';
import NavbarItems from '../../src/NavbarItems';
import NavbarDropdown from '../../src/NavbarDropdown';
import DropdownMenu from '../../src/DropdownMenu';

const navitems = [
    {link: '#', title: 'Setup'},
    {link: '#', title: 'Usage'},
    {link: '#', title: 'Advanced'},
    {link: '#', title: 'Try it out'},
    {link: '#', title: 'FAQ'}
];

const dropdownItems = [
    {href: '#', name: 'ES2015'},
    {href: '#', name: 'Setup'},
    {href: '#', name: 'Usage'},
    {href: '#', name: 'Advanced'},
    {href: '#', name: 'Try it'},
    {href: '#', name: 'FAQ'}
];

const navbarInstance = (
    <Navbar>
        <NavbarHeader href="http://www.google.com" name="Babel"/>
        <NavbarItems>
            {navitems.map(item => {
                return <NavItem key={navitems.indexOf(item)} link={item.link} title={item.title} />;
            })}
            <NavbarDropdown name="Dropdown">
                <DropdownMenu menuItems={dropdownItems}/>
            </NavbarDropdown>
            <NavbarDropdown name="Dropdown">
                <DropdownMenu menuItems={dropdownItems}/>
            </NavbarDropdown>
        </NavbarItems>
    </Navbar>
);

React.render(navbarInstance, document.getElementById('navigation_bar'));
