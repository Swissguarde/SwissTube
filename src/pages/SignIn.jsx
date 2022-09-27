import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProfileImage, getProfileName } from "../features/profileSlice";
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(getProfileName(user.displayName));
      dispatch(getProfileImage(user.photoURL));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-4">
      <div className="flex min-h-[70vh] flex-col  items-center justify-center gap-4 text-3xl text-green-500">
        <div className="text-center">
          <div>Hi there 👋</div>
          <div>Sign In with Google</div>
        </div>
        <div onClick={handleClick} className="rounded-[50%] bg-white p-3">
          <FcGoogle size={35} />
        </div>
      </div>
    </div>
  );
};
export default SignIn;
