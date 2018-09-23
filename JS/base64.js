function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log(reader.result)
      document.getElementById("conteudoBase64").innerHTML =reader.result; 
    }
    reader.readAsDataURL(file);
   
  }

  