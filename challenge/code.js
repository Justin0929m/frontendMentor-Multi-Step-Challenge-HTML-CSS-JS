// const captureInputs = {
//     inputName: document.querySelector('#input-name'),
//     nextBtn: document.querySelector('#next-btn'),
//     form: document.querySelector('.form'),
    
//     setLocalStorage: function(){
       
        
//         let inputNameValue = this.inputName.value
//         localStorage.setItem("input", JSON.stringify(inputNameValue));
//         let getLocal = JSON.parse(localStorage.getItem("input"));

//         return getLocal
//     } 
// }

// const fetchInputValues = {
//     fetchValues: function(){
        
//         console.log(JSON.parse(localStorage.getItem('input')));
//     }
// }

// window.addEventListener('load', ()=>{
//     fetchInputValues.fetchValues()
//     // console.log('testing');
// })


// captureInputs.setLocalStorage()

// Step 1 JS 


function setLocalStorage(){
    let nameInput = document.querySelector('#input-name')

    localStorage.setItem('input-field', JSON.stringify(nameInput.value))
}


// Step 2 JS

function fetchLocal(){
    let inputName = document.querySelector('#input-name')
    
    let inputArr = JSON.parse(localStorage.getItem('input-field'))
    console.log("Local Storage: ", inputArr);

    inputName.value = inputArr
    // location.href = '/challenge/index.html'

}

fetchLocal()


