 var inputtxt = document.querySelector("#txt-input")
 var btntranslate = document.querySelector("#btn-translate") 
 var outputdiv = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json"


 btntranslate.addEventListener("click",clickeventhandler) 
 
function getTranslationalURL(inputtxt)
{
    return serverURL +"?" +"text=" + inputtxt ;
}
function clickeventhandler()
{
    var textinput = inputtxt.value
    fetch(getTranslationalURL(textinput))
    .then(respone => respone.json())
    .then(json =>{
        var translatedtext = json.contents.translated
        outputdiv.innerHTML = translatedtext
    }
       
    )
    .catch (errorhandler)
 }
 function errorhandler (error)
 {
    console.log("error occured ", error)
    alert("something wrong with the server ! please try again after sometime ... ")
 }


