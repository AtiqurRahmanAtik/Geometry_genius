function rag_area() {

    const width = document.getElementById('width');

    const widval = width.value;

    const widthval = parseFloat(widval);

    console.log( widthval);


    const len = document.getElementById('length');

    const lenval = len.value;
    
    const lengthval = parseFloat(lenval);

    console.log( lengthval);


   const area = widthval * lengthval ;


   const res = document.getElementById('result');

    // let out = res.innerHTML=area;


    let out = res.innerHTML = area;


}