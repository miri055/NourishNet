const getlocation=()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position);
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            console.log(lat,long);
        });
        }else {alert("Geolocation is not supported by this browser.")}
};