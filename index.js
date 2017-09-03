function hagoAlgo(callback) {
    callback(); //ejecuta la función que recibe (holaWilt)
};

function holaWilt(){
    console.log('Hola Wilt !!');
};

hagoAlgo(holaWilt); //esta funcion pasa una función como parámetro

//esta funcion pasa una función como parámetro
function saludos(callback){
    callback("Paola Ramírez y Wilt Thomas");
}
saludos(function (persona){
    console.log('Hola superpoderosos....' + persona);
}); 

