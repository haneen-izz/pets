var name =prompt("what is your name?")

alert(" Thinking about getting a cat but not sure which breed is right for you? so welcome to our website we can help you! " +name)

var cat = prompt("do you like cats?")
alert("welcome to my website")

var chooseCat = prompt("which cat do you want to know about please choose one of these; Abyssinian Cat , American Shorthair Cat , American Curl Cat Breed ?")

function stars(){
var rating = prompt("please rate my website")
while(rating > 5){
rating = prompt("please rate my website from 1 to 5")
}
alert("thanks")

}
function userChooseCat (){


while(chooseCat != "Abyssinian Cat" && chooseCat != "American Shorthair Cat" && chooseCat != "American Curl Cat Breed" ){

chooseCat = prompt("which cat do you want to know about please choose one of these; Abyssinian Cat , American Shorthair Cat , American Curl Cat Breed ?")

}

var numberOfpic = prompt("how many times you want to see this picture?")
while(numberOfpic > 20){
  numberOfpic = prompt("please enter number less than 20 ")

}

if(chooseCat == "Abyssinian Cat"){
for( var i = 0; i < numberOfpic  ; i++)
 
{document.write( "<div>" + "<h3>" + chooseCat+"</h3>"+ "<img src='https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_360/public/Abyssinian_body_7.jpg?itok=5g6wdh0S' width='300' height='300'     />" + "</div>")
document.write("byssinians are highly intelligent and intensely inquisitive. They love to investigate and will leave no nook or cranny unexplored. They’re sometimes referred to as “Aby-grabbys” because they tend to take things that grab their interest. The playful Aby loves to jump and climb. Keep a variety of toys on hand to keep her occupied, including puzzle toys that challenge her intelligence.")}


}

 
else if(chooseCat == "American Shorthair Cat"){
  for(var i = 0; i < numberOfpic  ; i++)
{document.write( "<div>" + "<h3>" + chooseCat+"</h3>"+ "<img src='https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_360/public/AmericanShorthair_body_6.jpg?itok=9qu8WJOJ' width='300' height='300' />" + "</div>")

document.write("Formerly used to keep rodents and vermin away from food stores, the American Shorthair still enjoys exercising her hunting skills on unsuspecting insects. As a smart, moderately active feline, she enjoys learning tricks and challenging her intelligence with puzzles and interactive toys.")}

}

else if(chooseCat == "American Curl Cat Breed"){
  for(var i = 0; i < numberOfpic  ; i++)
{document.write( "<div>" + "<h3>" + chooseCat+"</h3>"+ "<img src='https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_360/public/AmericanCurlSHA_body_6.jpg?itok=7zxsXPUy' width='300' height='300'     />" + "</div>")
document.write("With unique ears that curl back, and an inquisitive expression reminiscent of happy surprise, the American Curl brings a smile to everyone who meets her.")}


}

else{
  alert('we dont have any info for this cat')
}
}

 userChooseCat ();
 stars();




