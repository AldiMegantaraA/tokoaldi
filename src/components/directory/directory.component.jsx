import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/f8SYHXy/habib-ayoade-Nh-WW-RW1q-O0-unsplash.jpg',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/ch6x6vY/lea-ochel-ns-RBb-E6-YLs-unsplash.jpg',
                  id: 2,
                  linkUrl: 'jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/tCVpX2f/ryan-plomp-76w-e-DO1u1-E-unsplash.jpg',
                  id: 3,
                  linkUrl: 'sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/tY3SMMg/handy-wicaksono-j-XPPUpk9u-SU-unsplash.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/8YDr1yk/clarisse-meyer-5xbdx3-Tq-Pnw-unsplash.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'mens'
                }
            ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;