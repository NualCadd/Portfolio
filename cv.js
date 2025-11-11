document.getElementsByTagName("button")[0].onclick=function(){
    let x=document.getElementsByTagName("h2")[0].innerText;
    let y=document.getElementsByTagName("p")[0].innerText;
    let z=2;
    y=y+z;
    if(x=="osaidnas"&&y=="32"){
        alert("Correct");
    }
    else{
        alert("Incorrect");
    }
};