function displayRandomImages()   
{  
   //array of images with image location, height, and width  
   var imageArray = [  
   {   
     //address URL of the image  
     src: "4.png",  
     //size for the image to be display on webpage  
     width: "680",  
     height: "600"  
   },   
   {  
     src: "2.png",  
     width: "680",  
     height: "600"  
   },   
   {  
     src: "3.png",  
     width: "680",  
     height: "600"  
   },  
   {  
     src: "1.png",  
     width: "680",  
     height: "600"  
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
