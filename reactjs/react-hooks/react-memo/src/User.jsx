import React from 'react'

const User = ({ name }) => {
  console.log("User component rendered");

  return <h2>User: {name}</h2>;
};

export default React.memo(User)


//why react.memo is used when something needs to be changed ....and while re-rendering..
// .even its getting effected for no reason...so use react.memo

