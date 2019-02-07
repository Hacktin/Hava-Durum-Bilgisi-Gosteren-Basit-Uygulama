class WeatherRequest{
    constructor(){
        this.url="http://api.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&appid=858df0e7ed8f0276ae731d75937663c7"
    }

    get(){
        return new Promise((resolve,reject)=>{
            fetch(this.url)
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(error=>reject(error))
        })
    }
}

class UI{
    constructor(){
        this.cardImageOverLay=document.getElementById("cardBody")     
    }

    ShowTheInformation(data){
        this.cardImageOverLay.innerHTML=`
        <h3 class="card-title">CityName:${data.name}</h3>
        <p class="card-text">Temparature:${data.main.temp}</p>
        <p class="card-text">Coordinate lon and lat:${data.coord.lon} and ${data.coord.lat}</p>
        `
    }
}

let weather=new WeatherRequest()
let ui=new UI()

weather.get().then(response=>ui.ShowTheInformation(response))





