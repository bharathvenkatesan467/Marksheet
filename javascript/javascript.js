function total1(){
    const m1=parseInt(document.getElementById("theory1").value);
    const m2=parseInt(document.getElementById("theory2").value);
    const m3=parseInt(document.getElementById("theory3").value);
    const m4=parseInt(document.getElementById("theory4").value);
    const m5=parseInt(document.getElementById("theory5").value);
    const m6=parseInt(document.getElementById("theory6").value);
    const m7=parseInt(document.getElementById("theory7").value);
    const m8=parseInt(document.getElementById("theory8").value);

    const p1=parseInt(document.getElementById("practical1").value);
    const p2=parseInt(document.getElementById("practical2").value);
    const p3=parseInt(document.getElementById("practical3").value);
    const p4=parseInt(document.getElementById("practical4").value);
    const p5=parseInt(document.getElementById("practical5").value);
    const p6=parseInt(document.getElementById("practical6").value);
    const p7=parseInt(document.getElementById("practical7").value);
    const p8=parseInt(document.getElementById("practical8").value);

    const t1=m1+p1;
    const t2=m2+p2;
    const t3=m3+p3;
    const t4=m4+p4;
    const t5=m5+p5;
    const t6=m6+p6;
    const t7=m7+p7;
    const t8=m8+p8;

    document.getElementById("sum1").innerHTML=t1;
    document.getElementById("sum2").innerHTML=t2;
    document.getElementById("sum3").innerHTML=t3;
    document.getElementById("sum4").innerHTML=t4;
    document.getElementById("sum5").innerHTML=t5;
    document.getElementById("sum6").innerHTML=t6;
    document.getElementById("sum7").innerHTML=t7;
    document.getElementById("sum8").innerHTML=t8;

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
