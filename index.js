
// funcion para convertir en value jquery.
function $(selector) {
  return document.querySelector(selector);
}

window.demoObject = [];

$("#btn").addEventListener("click",function(){
  var field = $("#field").value;
  var object = field.split(",");
  if (object[1] !== undefined){
    if(window.demoObject.length < 1){
        var array = {};
        array[object[0]] = object[1];
        window.demoObject = array;
    }else{
        window.demoObject[object[0]] = object[1];
    }
  }
  console.log(window.demoObject);
});

$("#btn2").addEventListener("click",() =>{
  var field = $("#field2").value;
  //{ "prop1": "value1", "prop2": "value2","prop3": "value3" } cadena de ejemplo json
  var jsontext = field;
  var object = JSON.parse(jsontext);
  console.log(object.prop3);
});

//fizzbuzz division
document.getElementById("btn3").addEventListener("click",() =>{
  var field = $("#field3").value;
  field = parseInt(field);
  array = [];
  for (var i = field; i >= 1; i--) {
    if (i%3 == 0) {
      if (i%5 == 0) {
        string = 'Fizz Buzz';
      }else{
        string = 'Fizz';
      }
    }else if (i%5 == 0) {
      if (i%3 == 0) {
        string = 'Fizz Buzz';
      }else{
        string = 'Buzz';
      }
    }else{
      string = i;
    }
    array.push(string);
  }
  console.log(array);
});

//array every,find,map
$("#btn4").addEventListener("click",()=>{
  var field = $("#field4").value;
  var array = field.split(",");
  var resultEvery = array.every(x => x >= 10);
  var resultFind = array.find(x => x > 0);
  array.forEach((element) => {
    console.log('Element in array position'+ element);
  });
  var resultMap = array.map((x)=> {return x * 3 + x});
  var resultReduce = array.reduce(( acc, cur ) => acc + cur,0);
  console.log('Array every '+resultEvery);
  console.log('Array find '+resultFind);
  console.log('Array map '+resultMap);
  console.log('Array reduce '+resultReduce);
});

//array filter
$("#btn5").addEventListener("click",()=>{
  $("#field5").value
  var arrayFilter = [];
  var longWords = arrayFilter.filter(function(arrayFilter){
    return arrayFilter.length > 6;
  });
  console.log(longWords);
});

// array map
(function(){
  window.mapArray = [1,2,3,4,5,6,7,8,9,10];
  var sum = window.mapArray.map((x)=> {return x + 3});
  console.log(sum);
})();
