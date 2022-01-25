import axios from "axios";
import firebase from "@firebase/app";
import "@firebase/firestore";

// Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCYXDK-8fDdA5PFmPJ2LaIaIsSBtUv5mqo",
  authDomain: "swproject-65566.firebaseapp.com",
  projectId: "swproject-65566",
  storageBucket: "swproject-65566.appspot.com",
  messagingSenderId: "337150494930",
  appId: "1:337150494930:web:9983cc256ba92f4cf8050b",
  measurementId: "G-HTE8J0W0X7"
});

var db = firebase.firestore();

export default {
  //Login
  isAuthenticated: function () {
    return !!localStorage.getItem("username");
  },
  login: function (username) {
    localStorage.setItem("username", username);
  },
  logout: function () {
    localStorage.removeItem("username");
  },
  // Lista di personaggi in base alla pagina
  getPeople: function (page) {
    return axios.get("https://swapi.dev/api/people/?page=" + page);
  },
  // Per ottenere informazioni del personaggio in Detail
  getPerson: function (id) {
    return axios.get("https://swapi.dev/api/people/" + id + "/");
  },
  //Rating stars per personaggi
  vote: function (id, value) {
    return db
      .collection("voti")
      .doc()
      .set({
        voto: value,
        id_person: id,
        username: localStorage.getItem("username")
      });
  },
  getStats: function (id) {
    return db
      .collection("voti")
      .where("id_person", "==", id)
      .get()
      .then((data) => {
        let sum = 0;
        let userVote = null;
        let username = localStorage.getItem("username");
        data.forEach((doc) => {
          sum += doc.data().voto;
          if (doc.data().username === username) {
            userVote = doc.data().voto;
          }
        });
        return {
          totalCount: data.size,
          userVote: userVote,
          average: data.size === 0 ? 0 : sum / data.size
        };
      });
  }
};

