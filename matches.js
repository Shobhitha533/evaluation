// write js code here corresponding to matches.html
var  matchArr = JSON.parse(localStorage.getItem("schedule"))
displayData(matchArr)

    function filterPlace(){
    var selected = document.getElementById("filterVenue").value
    console.log(selected)

    var filterList = matchArr.filter(function(elem){
      return elem.matchVenue==selected
     
    })
    console.log(filterList)
   }


 var favArr = JSON.parse(localStorage.getItem("favourites")) || []
  function displayData(data){
    data.forEach(function(elem){


        var tr = document.createElement("tr")

       var td1 = document.createElement("td");
        td1.innerText = elem.matchNumber

        var td2 = document.createElement("td");
        td2.innerText = elem.matchTeamA

        var td3 = document.createElement("td");
        td3.innerText = elem.matchTeamB

        var td4 = document.createElement("td");
        td4.innerText = elem.matchDate

        var td5 = document.createElement("td");
        td5.innerText = elem.matchVenue

        var td6 = document.createElement("td");
        td6.innerText = "Favourites"
        td6.style.color="blue"
        td6.style.cursor="pointer"
        td6.addEventListener("click", function(){
            favFunction(elem)
        })

        tr.append(td1, td2, td3, td4, td5, td6)
        document.querySelector("tbody").append(tr)
    })

}
function favFunction(elem){
   favArr.push(elem)
   console.log(favArr)
   localStorage.setItem("favourites",JSON.stringify(favArr))
    window.location.href="favourites.html"
}
