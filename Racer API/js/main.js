

const getData = async (year,round) =>{
    let response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
    console.log(response.data)
    return response.data
}

const form = document.querySelector("#form")
form.addEventListener("submit", (event)=> {
    console.log("Here I am")
    event.preventDefault()
    let year = document.getElementById("year")
    let round = document.getElementById("round")
    console.log(year.value,round.value)
    getData(year.value,round.value)
})