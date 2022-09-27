import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const profileData = {
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    image: auth.currentUser.photoURL,
  };

  const { name, email, image } = profileData;
  const navigate = useNavigate();
  const logOut = () => {
    auth.signOut();
    navigate("/sign-in");
  };

  return (
    <div className="mx-auto max-w-[600px]  border border-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl">Profile</div>
        <button onClick={logOut} className="rounded bg-red-600 p-1">
          Log Out
        </button>
      </div>
      <div className="border-b border-[#494949] text-gray-400">
        Personal Details
      </div>
      <div>
        <div className="flex items-center py-6">
          <div>
            <img
              src={image}
              alt=""
              className="h-6 w-6 rounded-[50%] object-cover"
            />
          </div>
          <span className="ml-3 text-gray-500">{name}</span>
        </div>
        <div>
          Email:
          <span className="ml-3 text-gray-500"> {email}</span>
        </div>
      </div>
    </div>
  );
};
export default Profile;
