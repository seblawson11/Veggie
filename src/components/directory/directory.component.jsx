import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Landscape',
          imageUrl: 'https://images.unsplash.com/photo-1452948491233-ad8a1ed01085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2106&q=80',
          id: 1,
          linkUrl: 'landscape'
        },
        {
          title: 'Abstract',
          imageUrl: 'https://images.unsplash.com/photo-1414396914239-e70522479d13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
          id: 2,
          linkUrl: 'abstract'
        },
        {
          title: 'handmade',
          imageUrl:'https://images.unsplash.com/photo-1489726933853-010eb1484d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2990&q=80',
          id: 3,
          linkUrl: 'handmade'
        },
        {
          title: 'Foods and Drink',
          imageUrl:'https://images.unsplash.com/photo-1448062885262-aa6670248b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80',
          id: 4,
          linkUrl: 'foods-and-drink'
        },
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
