const INITIAL_STATE = {
  sections: [
    {
      title: 'Landscape',
      imageUrl: 'https://images.unsplash.com/photo-1452948491233-ad8a1ed01085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2106&q=80',
      id: 1,
      linkUrl: 'shop/landscape'
    },
    {
      title: 'Abstract',
      imageUrl: 'https://images.unsplash.com/photo-1414396914239-e70522479d13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
      id: 2,
      linkUrl: 'shop/abstract'
    },
    {
      title: 'handmade',
      imageUrl:'https://images.unsplash.com/photo-1489726933853-010eb1484d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2990&q=80',
      id: 3,
      linkUrl: 'shop/handmade'
    },
    {
      title: 'Foods and Drink',
      imageUrl:'https://images.unsplash.com/photo-1448062885262-aa6670248b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80',
      id: 4,
      linkUrl: 'shop/foods-and-drink'
    }
  ]
};

const directoryReducer = ( state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
