function showData(){
var para=document.getElementById("data");
var para1=document.getElementById("data1");
var site="http://api.weatherstack.com/current?access_key=YOUR-ACCESS-KEY&query=";
var city=document.getElementById("city").value;
var url=site.concat(city);
var img;
function def(data){
    document.getElementById("image").src=data.current.weather_icons
    
    console.log(data)
    para1.innerHTML="temperature"+data.current.temperature+"<br>Feels like"+data.current.feelslike+"<br>";
}
fetch(url).then(response => response.json()).then(data =>def(data));

}