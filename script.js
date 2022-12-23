function validate(){
    let n=document.getElementById("name").value
    let p=document.getElementById("pass").value
    let rb1=document.getElementById("r1").checked
    let rb2=document.getElementById("r2").checked
    let cb1=document.getElementById("c1").checked
    let cb2=document.getElementById("c2").checked
    let cb3=document.getElementById("c3").checked
    if(n==""|p==""){
        alert("please enter inputs")
    }
    if(rb1==""&rb2==""){
        alert("please select your gender")

    }
    if (cb1==""&cb2==""&cb3=="" ){
        alert("please select your interests")
    }

}