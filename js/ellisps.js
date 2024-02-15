function ellispsArea(){
    let a = getlementOfInput('a');

    let b = getlementOfInput('b');

    const Area = 3.1415 * a * b;

    let res = AraResult( 'r',Area.toFixed(0))
   
    console.log(Area);
}