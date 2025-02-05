import "./App.css";

function App(props) {
  // const { photo, profile, name, email, phone, address } = props; // Destructure props and simply use name instead of props.name
  // console.log(props.comments[0].exp += 10);
  // console.log(props.comments[1].exp += 50);

  return (
    <div className="main-container">
      <img src={props.photo} alt="React Logo" className="logo" />

      <div className="info-container">
        <img src={props.profile} alt="Profile Logo" className="profile-pic" />

        <div className="details">
          <p><strong>Name:</strong> {props.name}</p>
          <p><strong>Email:</strong> {props.email}</p>
          <p><strong>Phone:</strong> {props.phone}</p>
          <p><strong>Address:</strong> {props.address}</p>
          
        </div>
      </div>
    </div>
  );
}

export default App;
