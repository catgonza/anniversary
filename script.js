function displayRandomImages()   
{  
   //array of images with image location, height, and width  
   var imageArray = [  
   {   
     //address URL of the image  
     src: "4.png",  
     //size for the image to be display on webpage  
     width: "680",  
     height: "680"  
   },   
   {  
     src: "22.png",  
     width: "680",  
     height: "680"  
   },   
      {  
     src: "2.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "10.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "20.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "17.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "14.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "6.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "16.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "12.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "9.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "21.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "15.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "11.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "24.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "18.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "23.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "5.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "13.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "8.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "19.png",  
     width: "680",  
     height: "680"  
   }, 
      {  
     src: "7.png",  
     width: "680",  
     height: "680"  
   }, 
   {  
     src: "3.png",  
     width: "680",  
     height: "680"  
   },  
   {  
     src: "1.png",  
     width: "680",  
     height: "680"  
    } ];  
      
    //find the length of the array of images  
    var arrayLength = imageArray.length;  
    var newArray = [];  
    for (var i = 0; i < arrayLength; i++) {  
        newArray[i] = new Image();  
        newArray[i].src = imageArray[i].src;  
        newArray[i].width = imageArray[i].width;  
        newArray[i].height = imageArray[i].height;  
    }  
     
  // create random image number  
  function getRandomNum(min, max)   
  {  
      // generate and return a random number for the image to be displayed   
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;  
      return newArray[imgNo];  
  }    
  
  // 0 is first image and (preBuffer.length - 1) is last image of the array  
  var newImage = getRandomNum(0, newArray.length - 1);  
   
  // remove the previous images  
  var images = document.getElementsByTagName('img');  
  var l = images.length;  
  for (var p = 0; p < l; p++) {  
     images[0].parentNode.removeChild(images[0]);  
  }  
  // display the new random image    
  document.body.appendChild(newImage);  
}  
