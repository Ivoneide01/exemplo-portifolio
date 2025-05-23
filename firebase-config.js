// Importar as funções necessárias do Firebase (via CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBmqnjiAHb-pjqsspZ6kcBjcK9Lks0iHqU",
  authDomain: "portifolionid.firebaseapp.com",
  databaseURL: "https://portifolionid-default-rtdb.firebaseio.com",
  projectId: "portifolionid",
  storageBucket: "portifolionid.appspot.com", // corrigido
  messagingSenderId: "438566113511",
  appId: "1:438566113511:web:efaf522682c2d6d8051242"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obter referência ao banco de dados
const db = getDatabase(app);

// Função para enviar dados do formulário
export function enviarDadosFormulario(name, email) {
  const contatosRef = ref(db, 'contatos');
  return push(contatosRef, {
    nome: name,
    email: email
  });
}
