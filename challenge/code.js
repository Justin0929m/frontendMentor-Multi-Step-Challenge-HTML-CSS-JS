const captureInputs = {
    inputName: document.querySelector('#input-name'),
    nextBtn: document.querySelector('#next-btn'),
    form: document.querySelector('.form'),
    
    setLocalStorage: function(){
       
        
        let inputNameValue = this.inputName.value
        localStorage.setItem("input", JSON.stringify(inputNameValue));
        let getLocal = JSON.parse(localStorage.getItem("input"));

        return getLocal
    } 
}

const fetchInputValues = {
    fetchValues: function(){
        
        console.log(JSON.parse(localStorage.getItem('input')));
    }
}

window.addEventListener('load', ()=>{
    fetchInputValues.fetchValues()
    // console.log('testing');
})


captureInputs.setLocalStorage()