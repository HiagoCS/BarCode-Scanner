$(document).on("click", "#rc", function(){
   cordova.plugins.barcodeScanner.scan(
      function (result) {
        if(result.cancelled == false){
          $('#add').html("<div style='color:green; margin-left:3.5pc; margin-top:1pc;' class='col-12 fas fa-check'>Resultado: " + result.text +"</div><div class='row' id='add2'></div>");
          $('#add2').html("<div style='color:green; margin-left:4.5pc;' class='col-12 fas fa-check'>Formato: " + result.format +"</div>");
          var my_media = new Media("lib/sounds/onsucess.mp3");
        }
        else{
          $('#add').html("<div style='color:red; margin-left:8.5pc;margin-top:1pc;' class='col-12 fas fa-ban'>Cancelado</div>");
        } 
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      });

});