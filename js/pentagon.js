function pentagonArea(){

    let pen = getlementOfInput('pen');
    console.log(pen);

    let base = getlementOfInput('ba');
    console.log(base);


    const Area = 0.5 * pen * base ;
    console.log(Area);

    let outs= AraResult('span',Area );

}

function getlementOfInput(id){

    let ins = document.getElementById(id);
    let val = ins.value;

    let pen = parseFloat(val);
   return pen;

}

function AraResult( ids,Area){

    let p = document.getElementById(ids);
    let res =  p.innerHTML = Area;

}