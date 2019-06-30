var myImg = document.getElementById("myImg")
var input = document.getElementById("insert")
var double = document.getElementById("double")

function increaseSize()
{
    myImg.width = input.value 
    myImg.height = input.value 
}

function doubleSize()
{
    myImg.width = myImg.width * 2
    myImg.height = myImg.height * 2
}
