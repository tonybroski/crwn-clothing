// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {
//   auth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utlis/firebase/firebase.utlis";
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  // useEffect(
  //   () => async () => {
  //     const response = await getRedirectResult(auth);
  //     // console.log(response);
  //   },
  //   []
  // );

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      {/* <h1>Sign in Page</h1> */}

      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
