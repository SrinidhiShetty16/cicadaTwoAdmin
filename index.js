import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js';
import { getFirestore, collection, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyBSBZLT-EnhB-0d1JpywzAJADRx3kGdIRk",
  authDomain: "cicada-c3ee0.firebaseapp.com",
  projectId: "cicada-c3ee0",
  storageBucket: "cicada-c3ee0.appspot.com",
  messagingSenderId: "689141545944",
  appId: "1:689141545944:web:f9d30d946bbafac30d50ad",
  measurementId: "G-7TVKFXBXKN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const usersCollection = collection(db, 'users');
const submit = document.getElementById("submit");
const submit2 = document.getElementById("submit2");
submit.addEventListener("click", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const ticket = document.getElementById("ticket").value;
    storeUser(name, phone);

    async function storeUser(name, phone){
        try{
            const docRef = doc(usersCollection, phone);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()) {
                alert("Contact already in use");
            } else{
                await setDoc(docRef, { Phone: phone, Name: name, ticketNo: ticket, nextRound: "1", password: "cicadaByDevops", penaltyTime: 0 });
                alert('New user added');
            }
        } catch (error) {
            console.error('Error storing user:', error);
        }
    }
});