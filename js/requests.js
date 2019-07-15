var URL_GLOBAL = "http://dabimexico.lojadabi.com.br/";
function Request(controller, metodo, formData, json, callBack){

    var request = new XMLHttpRequest();

    try{
      request.open("POST", "http://dabimexico.lojadabi.com.br/"+controller+"/"+metodo);
      //   request.open("POST", "http://localhost:8080/www/"+controller+"/"+metodo);
    }catch(error){

    }
    try{
      request.send(formData);
    }catch(error){
      alert(error)
    }



    request.onreadystatechange = function () {
      
     if (request.readyState === 4) {

      if (request.status === 200) {

        var json_decode = function(data){
                        
	        try{
	            return JSON.parse(data);
	               
	        }catch(error){
	            
	            // console.warn('Json server failed:' + data);
	            return false;
	        }

        };


        if(json){
            var obj = json_decode(request.responseText);
         
            request.abort()
            callBack.response(obj);

        }else{

            callBack.response(request.responseText);
            request.abort()
        }
        
               
                    
        }
          
        // console.info(request);

       }
       

    };
    
};

function REQUEST_API(url, callBack){

  var request = new XMLHttpRequest();

    try{
      request.open("GET", url);
      // request.setRequestHeader('Content-Type', 'application/json');
      //   request.setRequestHeader('Content-Type', 'Access-Control-Allow-Headers');
    }catch(error){

    }
      
    try{
      request.send();
      
    }catch(error){
      alert(error)
    }
        
        

    request.onreadystatechange = function () {
      
     if (request.readyState === 4) {

      if (request.status === 200) {

        var json_decode = function(data){
                        
          try{
              return JSON.parse(data);
                 
          }catch(error){
              
              // console.warn('Json server failed:' + data);
              return false;
          }

        };
        
            var obj = json_decode(request.responseText);
         
            request.abort()
            callBack.response(obj);
                    
        }
          
        // console.info(request);

       }
       

    };

}