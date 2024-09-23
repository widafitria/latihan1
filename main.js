import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyDmI0zRauvzaL4oEuXinkmXhGiwTsYxYQc",
      authDomain: "insan-cemerlang-ee7af.firebaseapp.com",
      projectId: "insan-cemerlang-ee7af",
      storageBucket: "insan-cemerlang-ee7af.appspot.com",
      messagingSenderId: "1047091827759",
      appId: "1:1047091827759:web:0f1742d6f3922f856de2da",
      measurementId: "G-GL8J5GC8XB"
};

// Inisialisasi firebase
const aplikasi = initializeApp(firebaseConfig)
const basisdata = getFirestore(aplikasi)

export async function ambilDaftarBunga() {
  const refDokumen = collection(basisdata, "bunga");
  const kueri = query(refDokumen, orderBy("bunga"));
  const cuplikankueri = await getDocs(kueri);

  let hasilkueri = [];
  cuplikankueri.forEach((dokumen) => {
    hasilkueri.push({
      id: dokumen.id,
      bunga: dokumen.data().bunga
    })
  })

  return hasilkueri;
}

export async function tambahBunga(bunga) {
  try {
    // menyimpan data ke firebase
    const refDokumen = await addDoc(collection(basisdata, "bunga"), {
      bunga: bunga
    })
    // menampilkan pesan berhasil
    console.log("berhasil menyimpan data bunga")
  } catch (error) {
    // menampilkan pesan gagal 
  console.console.log("gagal menyimpan data")
  }
}
