//Default Border
//Fixes images
imgMultiGradient.src = "data/borders/multiGradient.png"
//card size
var cardWidth = 749
var cardHeight = 1044
document.getElementsByClassName("mainGrid")[0].classList.remove("plane")
//Sets the correct values to anything that may have been changed from an out of the ordinary border
var planechaseInfo = false
var legendaryBorder = false
var nyxBorder = false
var miracleBorder = false
var stampBorder = false
var flipBorder = false
var creatureBorder = true
var thirdBorder = true
var secondBorder = true
var transparentBorder = false
//Shifted text
titleRightShift = 0
typeRightShift = 0
//Aligned text
var titleAlign = "left"
var typeAlign = "left"
//Image alignment
var centerSetSymbol = 1 //1=not centered, 2=centered
var artX = 58
var artY = 118
//Loads the correct border data
borderPath = "data/borders/" + document.getElementById("borderSelection").value
loadScript(borderPath + "border.js")