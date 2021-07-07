var guest_name=[];
function submit(){
    var name1=document.getElementById("name_of_the_guest").value;
    guest_name.push(name1);
    console.log(guest_name);
}
function show(){
   var para1=[];
   guest_name.sort();
    for (var i=0; i<guest_name.length; i++) {
        para1=para1+"<h1>" + guest_name[i] + "</h1> <br> <hr> <br>"; 
        console.log(para1);
    }
    document.getElementById("list_of_names").innerHTML=para1;
}
function search(){
    var s=document.getElementById("search_name_of_the_guest").value;
    var found=0;
    var j;
    for (var j=0; j<guest_name.length; i++){
if (s==guest_name[j]) {
    found=found+1;
}
    }
    document.getElementById("list_of_names_in_search").innerHTML="name found "+found+" time/s";
    .console.log("found name "+found+" time/s");
}
