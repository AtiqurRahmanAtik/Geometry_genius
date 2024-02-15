
function rag_area(){
    
   const width = document.getElementById('width');

   
    let  val= width.value;
    
    let widthVal = parseFloat(val);
    // console.log(typeof widthVal);

    const lengths = document.getElementById('length');

    let lenVal= lengths.value;

    let lengthVal = parseFloat(lenVal);
    

    let area = widthVal * lengthVal;
    // console.log(area);
}