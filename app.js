let getImage = document.getElementById('img');
let getbtn = document.getElementById('btn')
let IsBulbOn = true;
function OnOff(){
     (IsBulbOn ? getImage.src ="./bulbOn.jpeg" : getImage.src = "./bulbOff.jpeg");
     if(IsBulbOn == true){
          getbtn.style.backgroundColor = 'red'
          getbtn.style.border = 'none'
     }
     else{
          getbtn.style.backgroundColor = 'blue'
          getbtn.style.border = 'none'
     }

     IsBulbOn = !IsBulbOn;
}