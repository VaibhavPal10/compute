

  function Input(){
      let inp=document.querySelector('#giveInput').value;
      
      if (inp<5 ){
      
        document.querySelector('#finaloutput').innerHTML='sorry :( \n no discount below order of 5\nYour total cost is $'+ inp*10;
        

      

  }

  else if(inp>=5){

      if(inp<=10){
        
        document.querySelector('#finaloutput').innerHTML='On this order, you will get a discount of 10% !!!! Your total cost is $'+inp*9+' for '+inp+' coffee bags.';
      }

      else{
       
        document.querySelector('#finaloutput').innerHTML='congrats!!!\n You are getting a discount of 20% !!!! Your total cost is $'+inp*8+' for '+inp+' coffee bags.' ;
      }
    }

    document.querySelector('#finaloutput-2').innerHTML='this is where 2nd code will be effective'+inp;    
  
  }
      