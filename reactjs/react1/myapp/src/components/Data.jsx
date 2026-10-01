const Data = ({ a, name }) => {
  const isLoggedIn = true;
  const isAdmin=true;

  if (isLoggedIn) {
    return (
      <>
        {/* <h4>Welcome {name}</h4> */}
        {isLoggedIn ? `welcome ${name}` : "Please Login"}
        {isAdmin && <button>Delete User</button>}
        <h4>Age: {a}</h4>
      </>
    );
  }

  return <h1>Please try again</h1>;
};

export default Data;