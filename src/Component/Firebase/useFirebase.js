import { useEffect, useState } from "react";
import firebaseinit from "./Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken
  
} from "firebase/auth";


firebaseinit();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loginSuccess, setLoginsuccess] = useState(false);
  const [admin,setAdmin]=useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [token,setToken]=useState("")
  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();

  // ------------------email password login---------------------
  // register
  const createAccountUsingEmailPass = (email, password, name, history) => {
   setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        updataAndSaveUser(email, name, "POST");
        history.push("/");
        updateInformation(name);
       
        setError("");
        isLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoginsuccess(false);
      })
      .finally(() => setIsLoading(false));
  };
  // login
  const loginUsingEmailPass = (email, password, history, location) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setLoginsuccess(true);
        setIsLoading(false);

        const destination = location?.state?.from || "/";
        history.push(destination);

        setError("");
      })
      .catch((error) => {
        setError(error.message);

        setLoginsuccess(false);
      })
      .finally(() => setIsLoading(false));
  };
  // update name
  const updateInformation = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {});
  };
  // logout

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setLoginsuccess(false);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // with google
  const loginWithGoogle = (history, location) => {
    setIsLoading(true);
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
        updataAndSaveUser(result.user.email, result.user.displayName, "PUT");
        const destination = location?.state?.from || "/";
        history.push(destination);
        setError("");
        
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // update all auth
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setError("");
        setUser(user)
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribed;
  }, []);

  // save and update user in database

  const updataAndSaveUser = (email, displayName, mathod) => {
    const user = { email: email, displayName: displayName };
 
    fetch("https://aqueous-mountain-45060.herokuapp.com/users", {
      method: mathod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setLoginsuccess(true);
        }
      });
  };

  // check admin

  useEffect(() => {
    fetch(`https://aqueous-mountain-45060.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    user,
    error,
    loginSuccess,
    isLoading,
    setError,
    
    admin, 
    createAccountUsingEmailPass,
    loginUsingEmailPass,
    logOut,
    loginWithGoogle,
  };
};
export default useFirebase;
