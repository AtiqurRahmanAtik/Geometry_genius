// function paralegonarea(){

//     let inputs= document.getElementById('based');
    
//     let inputsval= inputs.value;
    
//     let baseVal = parseFloat(inputsval);

//     console.log(baseVal);

//     let inpu= document.getElementById('heightd');

//     let inpuVal= inpu.value;

//     let height= parseFloat(inpuVal);

//     console.log(height);

//     let area = baseVal * height;
//     console.log(area);

//     let out = document.getElementById('demo');
//     let res = out.innerHTML = area;


    
// }


function paralegonarea (){

    let base = paralegonareaInput('based');
   console.log(base);

    let height = paralegonareaInput('heightd');
    console.log(height);

    let area = base * height;
    console.log(area);

    let output = setinputvalue('res',area);

    
}


function paralegonareaInput(inputid){

    let inputs = document.getElementById(inputid);

   let inputVal = inputs.value;

   let baseVal = parseFloat(inputVal);
   return baseVal;
    
}


function setinputvalue(id, area){
    let inputed = document.getElementById(id);
    let are = inputed.innerHTML=area;
    return are;

}