import {
    auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Signup from "../../component/sign-up-form/sign-up-form.component";
import SignIn from "../../component/sign-in-form/sign-in-form.component";
import "./authentication.component.styles.scss";


const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <Signup />
    </div>
  );
};

export default Authentication;
 