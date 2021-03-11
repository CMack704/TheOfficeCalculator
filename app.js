// function to get values and print on screen
function getValue() {
    let input = event.target.innerText;
    console.log(input);
    printValue(input);
};

function printValue(val) {
    // variables to grab result id in html and change html
    let output = document.querySelector('#result');
    let current = output.innerHTML;
    // if/else to change html to desired output in html
    if(output.innerHTML == '0') {
        if(val != 'C' && val != 'DEL'){
            output.innerHTML = '';
            output.innerHTML += val;
        };

    } else{
        if( val == 'DEL'){
            output.innerHTML = current.slice(0, -1);
            if( output.innerHTML.length < 1){
                output.innerHTML = '0';
            };
        };
        if( val != 'C' && val != 'DEL' && val != '='){
            output.innerHTML += val;
        };
        if( val == 'C'){
            output.innerHTML = '0';
        };
        if( val == '='){
            let result = output.innerHTML;
            output.innerHTML = eval(result);// use eval function to make calculations
        };
        if( val == 'π'){
            let result = output.innerHTML;
            output.innerHTML = `${current}3.14159`;//
        };
    };
};
// grabs button values
let buttons = document.getElementsByTagName('button');
for(let i = 0; i<buttons.length; i++) {
    buttons[i].setAttribute('onclick', 'getValue()');
};
