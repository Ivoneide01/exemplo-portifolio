// Importar as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
import { initializeApp } from "firebase/app";
// Configuração do Firebase
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmqnjiAHb-pjqsspZ6kcBjcK9Lks0iHqU",
  authDomain: "portifolionid.firebaseapp.com",
  databaseURL: "https://portifolionid-default-rtdb.firebaseio.com",
  projectId: "portifolionid",
  storageBucket: "portifolionid.firebasestorage.app",
  messagingSenderId: "438566113511",
  appId: "1:438566113511:web:efaf522682c2d6d8051242"
};

// Inicializar o aplicativo Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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