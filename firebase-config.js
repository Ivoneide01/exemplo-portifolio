// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmqnjiAHb-pjqsspZ6kcBjcK9Lks0iHqU",
  authDomain: "portifolionid.firebaseapp.com",
  databaseURL: "https://portifolionid-default-rtdb.firebaseio.com",
  projectId: "portifolionid",
  storageBucket: "portifolionid.firebasestorage.app",
  messagingSenderId: "438566113511",
  appId: "1:438566113511:web:efaf522682c2d6d8051242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase


// Obter referência ao banco de dados
const db = getDatabase(app);

// Função para enviar dados do formulário para o Firebase
export function enviarDadosFormulario(name, email) {
  const contatosRef = ref(db, 'contatos'); // Referência à coleção 'contatos'
  return push(contatosRef, {
    nome: name,
    email: email
  });
}