var players=document.getElementById("Players");


players.addEventListener('change',function(){
    var index = players.selectedIndex;
    console.log(index);
    if(index==1){
        window.open('1playergames.html','_blank'); 
    }

})



