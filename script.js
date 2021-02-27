function showData(){
    var para1=document.getElementById("data1");
    var site="http://api.weatherstack.com/current?access_key=896830f25ded7c18de3347fecaa9e17c&query=";
    var city=document.getElementById("city").value;
    var url=site.concat(city);
    var img;
    function def(data){
        document.getElementById("image").src=data.current.weather_icons
        
        console.log(data)
        para1.innerHTML="City: "+data.location.name+"<br>Temperature: "+data.current.temperature+"<sup>o</sup>C<br>"+"Feels like: "+data.current.feelslike+"<sup>o</sup>C<br>Humidity: "+data.current.humidity;
    }
    fetch(url).then(response => response.json()).then(data =>def(data)).catch(res => alert("CITY NOT FOUND!! PLEASE ENTER A VALID CITY"));

}

function showNews(){
    var para2=document.getElementById("data2");
    var url2 = "http://api.mediastack.com/v1/news?access_key=cf71d5bda9c860845f8ad7488fef0abc&sources=cnn,bbc";
    
    function def1(data1){
        console.log(data1)
        for (var i=0;i<15;i++){
            para2.innerHTML+=(i+1).toString()+".  "+data1.data[i].title+"<br><br>"
        }
    }
    fetch(url2)
        .then(response => response.json()).then(data1 => def1(data1))
  
}
