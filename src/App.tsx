import "./App.css";

function App() {
  return (
    <>
      <div className="container-profile">
        <div className="container-header">
          <img
            className="profile-pict"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anne_Hathaway-68211_%28cropped_2%29.jpg/800px-Anne_Hathaway-68211_%28cropped_2%29.jpg"
            alt="profile"
          />
          <div className="title">
            <h1 className="hi">Hi, I'am</h1>
            <h1 className="name">Mohamad Riki Fahrian</h1>
            <h1 className="description">Stay curious. Backend or Frontend ?</h1>
            <h1 className="description">I love both !</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
