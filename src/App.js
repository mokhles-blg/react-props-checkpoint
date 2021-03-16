import "./App.css";
import Profile from "./profile/Profile";
import NavBar from "./Component/NavBar";

function App() {
  const image = "https://www.w3schools.com/howto/img_avatar.png";
  return (
    <div className="App">
      <NavBar />
      <Profile
        fullName="Mokhles Bouallagui"
        bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        profession="full stack web developer"
      >
        <img
          src={image}
          alt="profile-img"
          style={{
            height: "200px",
            width: "200px  ",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </Profile>
    </div>
  );
}

export default App;
