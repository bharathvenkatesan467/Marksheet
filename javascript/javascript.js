function total1(){
    const m1=parseInt(document.getElementById("theory1").value);
    const m2=parseInt(document.getElementById("theory2").value);
    const m3=parseInt(document.getElementById("theory3").value);
    const m4=parseInt(document.getElementById("theory4").value);
    const m5=parseInt(document.getElementById("theory5").value);

    const p6=parseInt(document.getElementById("practical6").value);
    const p7=parseInt(document.getElementById("practical7").value);
    const p8=parseInt(document.getElementById("practical8").value);





    document.getElementById("sum1").innerHTML=m1;
    document.getElementById("sum2").innerHTML=m2;
    document.getElementById("sum3").innerHTML=m3;
    document.getElementById("sum4").innerHTML=m4;
    document.getElementById("sum5").innerHTML=m5;
    document.getElementById("sum6").innerHTML=p6;
    document.getElementById("sum7").innerHTML=p7;
    document.getElementById("sum8").innerHTML=p8;

    var sall=m1+m2+m3+m4+m5+p6+p7+p8;
    var pec=sall/8;
    console.log(pec);

    document.getElementById("tot").textContent=sall;
    document.getElementById("Per").textContent=pec;
    
    if(pec>50){
        document.getElementById("result").textContent='Pass';
    }
    else{
        document.getElementById("result").textContent='Fail';
    }
    
    if(pec>=90 && pec<=100){
        document.getElementById("grade").textContent='A';
    }
    else if(pec>=80 && pec<=89){
        document.getElementById("grade").textContent='B';
    }
    else if(pec>=70 && pec<=79){
        document.getElementById("grade").textContent='C';
    }
    else if(pec>=60 && pec<=69){
        document.getElementById("grade").textContent='D';
    }
    else if(pec>=50 && pec<=59){
        document.getElementById("grade").textContent='E';
    }
    else{
        document.getElementById("grade").textContent='F';
    }

}