import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js';
import { getFirestore, collection, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyBrY7pX7YNBznpM3dUfqH0XNqpPuSk_Tnk",
  authDomain: "cicada2.firebaseapp.com",
  projectId: "cicada2",
  storageBucket: "cicada2.firebasestorage.app",
  messagingSenderId: "409497835906",
  appId: "1:409497835906:web:c25f3f6f26969fffc4d79b",
  measurementId: "G-NDLNQ53V2M"
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
