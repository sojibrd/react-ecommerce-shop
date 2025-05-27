import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDgFME-hVCjWaUr49Sk36582y7JvGdLrs",
  authDomain: "complete-react-db.firebaseapp.com",
  projectId: "complete-react-db",
  storageBucket: "complete-react-db.firebasestorage.app",
  messagingSenderId: "956928222580",
  appId: "1:956928222580:web:199fdc760148d01fe93821",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
};

const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, snapshot) => {
    const { title, items } = snapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  try {
    if (!userSnapShot.exists()) {
      await setDoc(userDocRef, {
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        email: userAuth.email,
        photoURL: userAuth.photoURL,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        ...additionalInfo,
      });
    } else {
      await setDoc(
        userDocRef,
        {
          lastLogin: serverTimestamp(),
        },
        { merge: true }
      );
    }
  } catch (error) {
    console.log("error catching the user", error.message);
  }
};

export const createAuthWithUserAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const SignInAuthWithUserAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => await signOut(auth);
export const onAuthUserStateChanged = (callback) =>
  onAuthStateChanged(auth, callback);
