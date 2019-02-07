
const url = "http://api.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&appid=858df0e7ed8f0276ae731d75937663c7"


class GetRequest {

    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
}

class UI {


    constructor(name, coordinatelot) {
        this.cardWeather = document.getElementById("card")
    }


    ShowTheInfo(data) {
        this.cardWeather.innerHTML= `
        <img class="New-Delhi" src="new-delhi-safdarjung-tomb.jpg" style="width:250px;margin-left:80px;">
        <h3 class="class-title" style="width:250px;margin-left:130px;">${data.name}</h3>
        <label id="Temparature" style="width:250px;margin-left:130px;">Temparature:${data.main.temp}</label>
        <br>
        <label id="Coordinate-lon" style="width:250px;margin-left:130px;" >Coordinate-lon:${data.coord.lon}</label>
        <br>
        <label id="Coordinate-lon" style="width:250px;margin-left:130px;">Coordinate-lat:${data.coord.lat}</label>
        <br>
     `
    }

}

const UserInterface = new UI()

const get = new GetRequest()

get.get(url).then(response => UserInterface.ShowTheInfo(response))












