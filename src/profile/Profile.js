import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const handleName = (props) => {
  alert(`Welcome to react props checkpoint. I am ${props.fullName}`);
};

const Profile = (props) => {
    const styleCenter = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      };


  const styleProfile = {
    color: "black",
    letterSpacing: "0.1em",
    textAlign: "center",
    justifyContent: "center",
  };
  
  return (
    <div className="profile">
      <div className="fullName" style={styleProfile}>
        <h1>Hello, i'm {props.fullName}</h1>
      </div>
      <div>{props.children}</div>
      <div className="bioProfession" style={styleProfile}>
        <h5>
          I'm an Accounter, <br />
          and i'm learning {props.profession}
        </h5>
        <h5>{props.bio}</h5>
      </div>
      <Button
        variant="outline-secondary"
        className="button"
        style={styleCenter}
        onClick={() => handleName(props)}
      >
        Click
      </Button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Mokhles Bouallagui",
  bio: "GoMycode",
  profession: "Web Developer",
};

Profile.prototype = {
  fullName: PropTypes.stringisRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func,
};
export default Profile;
