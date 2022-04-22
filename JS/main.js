
import { initializeApp } from "firebase/app"
import {
    getFirestore,
    collection,
    setDoc,
    addDoc,
    doc,
    getDocs
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCjnm1SFpC_xWIRZBZn6gZ7DTt_FojGUzs",
    authDomain: "main-37422.firebaseapp.com",
    projectId: "main-37422",
    storageBucket: "main-37422.appspot.com",
    messagingSenderId: "613136749418",
    appId: "1:613136749418:web:1cc035132ab352ee324b13"
};

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'table')




// let a = ['10','12','14','16','18']
// let b = ['pn','vt','cr','cht','pt','sb','vs']
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 7; j++){
//         setDoc(doc(db, 'table',a[i] + b[j]), {
//             value: "",
//             disabled: false
//         }).then();
// }}


getDocs(colRef)
    .then(snapshot => {
        // console.log(snapshot.docs)
        let books = []
        snapshot.docs.forEach(doc => {
            books.push({...doc.data(), id: doc.id})
            // books.push({ ...doc.data(), id: doc.id })
            let itObj = doc.data()
            let temp = document.getElementById(doc.id)

            document.getElementById(doc.id).innerText = itObj.value
            console.log(typeof(temp.id),typeof(itObj.disabled), typeof(itObj.value))
            // temp.innerText = itObj.value;
            temp.disabled = itObj.disabled
            console.log(doc.id, itObj.disabled, itObj.value)
        })
    })
    .catch(err => {
        console.log(err.message)
    })














let identify = ""
document.getElementById("phoneNum").value = "+7";
let exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    let button = event.relatedTarget
    // Extract info from data-bs-* attributes
    let recipient = button.getAttribute('id')
    identify = recipient
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    let modalTitle = exampleModal.querySelector('.modal-title')

    let modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = recipient
    (function () {
        'use strict'
        let forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
    })()


})

const sub = document.getElementById('submit')
sub.onclick = function submit(){
    let first = document.getElementById("firstName").value
    let second = document.getElementById("secondName").value
    let num = document.getElementById("phoneNum").value
    document.getElementById(identify).innerText = first + " " + second+ " " + num;
    document.getElementById("firstName").value = "";
    document.getElementById("secondName").value = "";
    document.getElementById("phoneNum").value = "+7";
    document.getElementById(identify).disabled = true;
    setDoc(doc(db, 'table',identify), {
        value: first + " " + second+ " " + num,
        disabled: true
    }).then();
}

const clear = document.getElementById('clear')
clear.onclick = function clean(){
    document.getElementById(identify).innerText = "";
}



const reset = document.getElementById('active')
reset.onclick = function active() {
    $('button').prop('disabled', false);
}
let input = document.getElementById("phoneNum");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});