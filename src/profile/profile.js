import PropTypes from 'prop-types';
import profilePic from "../PP.jpg";
import "../Profile.css";

function handleName(fullName){
    alert(fullName);
}

let Profile = (props) => {
    return (
        <div>
            <div style={{width:"100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <img src={profilePic} alt="profile picture" style={{display:"block",borderRadius:"250px"}} onClick={() => handleName(props.fullName)}/>
                <div style={{marginLeft:"100px"}}>
                    <p>
                        <span style={{fontWeight: "bold",marginBottom: "30px"}}>Full Name</span> : {props.fullName}
                    </p>
                    <p>
                        <span style={{fontWeight: "bold", marginBottom: "30px"}}>Bio</span> : {props.bio}
                    </p>
                    <p>
                        <span style={{fontWeight: "bold", marginBottom: "30px"}}>Profession</span> : {props.profession}
                    </p>
                </div>
            </div>
        </div>
    );
};

Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string
}

Profile.defaultProps = {
    fullName : "John Doe",
    bio : "Oops ! Didn't write it yet",
    profession : "Still looking for a job"
}

export default Profile;