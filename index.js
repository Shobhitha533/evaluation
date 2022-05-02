// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",schedule)

var matchArr = JSON.parse(localStorage.getItem("schedule")) || []

function schedule(){
    event.preventDefault()

var matchObj = {
    matchNumber:masaiForm.matchNum.value,
    matchTeamA:masaiForm.teamA.value,
    matchTeamB:masaiForm.teamB.value,
    matchDate:masaiForm.date.value,
    matchVenue:masaiForm.venue.value,
};

matchArr.push(matchObj)
console.log(matchArr)

localStorage.setItem("schedule",JSON.stringify(matchArr))
window.location.href="matches.html"
}
