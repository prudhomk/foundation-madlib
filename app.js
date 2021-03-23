// import functions and grab DOM elements
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const input3 = document.getElementById('input-3');
const input4 = document.getElementById('input-4');
const input5 = document.getElementById('input-5');
const input6 = document.getElementById('input-6');
const input7 = document.getElementById('input-7');
const input8 = document.getElementById('input-8');
const input9 = document.getElementById('input-9');
const input10 = document.getElementById('input-10');
const input11 = document.getElementById('input-11');
const input12 = document.getElementById('input-12');
const input13 = document.getElementById('input-13');
const input14 = document.getElementById('input-14');
//output display
const display1 = document.getElementById('display-1-place');
const display2 = document.getElementById('display-2-species');
const display3 = document.getElementById('display-3-adjective');
const display4 = document.getElementById('display-4-noun');
const display14 = document.getElementById('display-4-adjective');
const display5 = document.getElementById('display-5-noun');
const display6 = document.getElementById('display-6-noun');
const display7 = document.getElementById('display-7-noun');
const display8 = document.getElementById('display-8-plural-noun');
const display9 = document.getElementById('display-9-adjective');
const display10 = document.getElementById('display-10-bodypart');
const display11 = document.getElementById('display-11-noun');
const display12 = document.getElementById('display-12-adjective');
const display13 = document.getElementById('display-13-bodypart');
const button = document.getElementById('button');
let myAudio = document.querySelector('#audio');


// initialize state

// set event listeners to update state and DOM

button.addEventListener('click', ()=> {
    
    const div = document.getElementById('classified');
    const section = document.getElementById('inputs');
    const allInputs = document.querySelectorAll('input');

    for (let i = 0; i < 14; i++) {
        const val = allInputs[i].value;
        console.log(val);
    
        if ((val === '')) {
            alert(`Fill in the Blank ${i}`);
            
        } else ((val !== ''));
        myAudio.play();
        display1.textContent = input1.value;
        display2.textContent = input2.value;
        display3.textContent = input3.value;
        display4.textContent = input4.value;
        display5.textContent = input5.value;
        display6.textContent = input6.value;
        display7.textContent = input7.value;
        display8.textContent = input8.value;
        display9.textContent = input9.value;
        display10.textContent = input10.value;
        display11.textContent = input11.value;
        display12.textContent = input12.value;
        display13.textContent = input13.value;
        display14.textContent = input14.value;
        div.classList.toggle('classified');
        section.classList.toggle('top-secret');
        
    }    
}   
    
);

