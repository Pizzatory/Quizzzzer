p111=localStorage.getItem("play1");
p222=localStorage.getItem("play2");

scorero1=0;
scorero2=0;

document.getElementById("p10sco").innerHTML=scorero1;
document.getElementById("p20sco").innerHTML=scorero2;

document.getElementById("Quest").innerHTML="Question asked by - "+p111;
document.getElementById("Ans").innerHTML="Answered by - "+p222;


function send(){
    console.log("send()");
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    actualanswer = parseInt(n1) * parseInt(n2);


numberBOX="<h4>"+ n1 +" X "+ n2 +"</h4>";
inputter="<br>Answer: <input type='text' id='inputcheck'>";
checkerupper="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=numberBOX+inputter+checkerupper;
document.getElementById("output").innerHTML=row;
document.getElementById("n1").value="";
document.getElementById("n2").value="";
}

Q_turn ="p111"
A_turn ="p222"

function check(){
    get_answer=parseInt(document.getElementById("inputcheck").value);
    if(get_answer==actualanswer){
        if(A_turn=="p111"){
            scorero1=scorero1+1;
            console.log(updater1);
            console.log(scorero1);
            document.getElementById("p10sco").innerHTML =scorero1;
        }
        else{
            scorero2=scorero2+1;
            console.log(updater2);
            document.getElementById("p20sco").innerHTML = scorero2;
        }
    }
    if(Q_turn=="p111"){
        Q_turn="p222";
        document.getElementById("Quest").innerHTML ="Question asked by - "+p222;
    }
    else{
        Q_turn="p111";
        document.getElementById("Quest").innerHTML ="Question asked by - "+p111;
    }
    if(A_turn=="p111"){
        A_turn="p222";
        document.getElementById("Ans").innerHTML ="Answered by - "+p222;
    }
    else{
        A_turn="p111";
        document.getElementById("Ans").innerHTML ="Answered by - "+p111;
    }
    document.getElementById("inputcheck").value="";
}