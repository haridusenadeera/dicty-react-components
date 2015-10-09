import React from 'react';

export default class FootItem extends React.Component {
    displayName = 'Footer item component for easy navigation'

    render() {
        return (
            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                <div className="footMenus"> <a href="#">{this.props.title}</a></div>
                {
                    this.props.menuItems.map(item => {
                        return (
                            <div className="footLinks"><a href={item.href}>{item.name}</a></div>
                        );
                    })
                }
            </div>
        );
    }
}
