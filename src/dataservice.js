import axios from "axios";
import firebase from "@firebase/app";
import "@firebase/firestore";

// Firebase ancora non utilizzato
firebase.initializeApp({
  apiKey: "AIzaSyAghYvrizuR7oBSLMK9AOZlq_7ya_haYFQ",
  authDomain: "informatica2-31173.firebaseapp.com",
  projectId: "informatica2-31173"
});

var db = firebase.firestore();

  export default {
//Login things ------------
    isAuthenticated: function () {
      return !!localStorage.getItem("username");
    },
    login: function (username) {
      localStorage.setItem("username", username);
    },
    logout: function () {
      localStorage.removeItem("username");
    },
// Serve valore della pagina (che dovrebbe essere dato dalla paginazione) non so come fare
    getPeople: function (page) {
      return axios.get("https://swapi.dev/api/people/?page=" + page
      );
    },
// Come faccio ad avere :id?
    getPerson: function (id) {
      return axios.get("https://swapi.dev/api/people/" + id );
    },
// Search non funziona - questo è copiato dal progetto dei prof
    searchPerson: function (term) {
    if (!term || term.length < 3) {
      return new Promise((resolve) => {
        resolve([]);
      });
    }
// Questo non funziona - SWAPI ragiona per pagine già divise:
// ha come attributi 	"next": "https://swapi.dev/api/people/?page=2", e "previous"..
    return axios
      .get("https://swapi.dev/api/people/?page=" )
      .then((data) => {
        var result = [];
        for (var i = 0; i < data.data.results.length; i++) {
          var person = data.data.results[i];
          var name = person.name;
          if (name.indexOf(term) >= 0) {
            result.push(name);
          }
        }
        return result;
      });
    },
//Cose per mettere voto a personaggi star wars
  vote: function (name, value) {
    return db
      .collection("voti")
      .doc()
      .set({
        voto: value,
        pokemon: name,
        username: localStorage.getItem("username")
      });
  },
  getStats: function (name) {
    return db
      .collection("voti")
      .where("pokemon", "==", name)
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

