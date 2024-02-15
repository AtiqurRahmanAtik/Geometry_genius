function cal(){
    
    let base = document.getElementById('base');

    let val =  base.value;

    let baseVal = parseFloat(val);
   

    // console.log(typeof baseVal);

    const height = document.getElementById('height');

    const heiVal = height.value;

    const heightVal = parseFloat(heiVal);
    // console.log(typeof heightVal);

    const area =0.5 * baseVal * heightVal;
    
    let output = document.getElementById('output');

    let res = output.innerHTML = area;




}

