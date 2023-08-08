// JavaScript Document

$(document).ready(function(){
	
	$(".solutionMainSteps,.middle1,.Graph_main_div").show();
	$(".Step1,.solutionText").hide();
	$(".resetLine1,.resetLine2").css({"pointer-events" : "none"});
	
	
		middleFunction =  function(){
			$(".middle1").css("margin-top",0+"px");	
			
			$(".solutionMainSteps,.middle1,.Step1,.Graph_main_div").show().css({"display":"inline-block"});
			 var hk=$(".middle1").height();
			 var hk1=$(".container").height();
			 var sol_txt=$(".solutionText").height();
			 
			 var mar = (hk1-hk)/2;
			 if(hk < hk1){
				 $(".middle1").css("margin-top",20+"px");
			 }
			 else
			 {
				 $(".middle1").css("margin-top",20+"px");
			 }
			 $(".Content00").hide();
			
			
			 if (checkMobile){ 
				$(".middle1").css("margin-top",sol_txt+"px");
			 }
			 
			 $(".Step1,.solutionText").hide();
   			
		}
		   
		  
		  middleFunction();
		  
		  
	

		  
	
	
	
if(checkMobile == false)
			{
			$(".howTo_div,.howTo").hide();
			
			}
			else
			{
			
			}
						
			 $(".newSet").click(function(){
				if(checkMobile == false)
				{
				$(".howTo_div,.howTo").hide();
				
				}
				else
				{
				
				}
						 
										 
				 })
			 
			 
			  $(".solution").click(function(){
				if(checkMobile == false)
				{
				$(".howTo_div,.howTo").hide();
				
				}
				else
				{
				
				}
						 
										 
				 })
			  
			  if(checkMobile){
				  $(".AreaForKeypadAndInputInDevice").show();
			  }
	ClickNum = ()=>{
								$(".AreaForKeypadAndInputInDevice").show();
								window.deleteHeight = $(".KeyPadKeyDevice").css("height");
								window.deletefont = $(".KeyPadKeyDevice").css("font-size");
								deleteHeight = parseInt(deleteHeight);
								$(".done1,.input").css("height",deleteHeight+"px");
								$(".done1").css("font-size",deletefont);     
								window.deletewidth= $(".keypadKeysDevice .ThreeCommonBtns").width();
								localStorage.setItem("width1",deletewidth);
								$(".done1").css("width",localStorage.getItem("width1")+"px"); 
							}
							if(!checkMobile){
							
							}else{
								$(".newSet").click(function(){ 
							$(".AreaForKeypadAndInputInDevice").show();
							});
							setTimeout(ClickNum,10);
							}
							$(".ClickToAnsDiv").click(function(){
							$(".done1").css("width",localStorage.getItem("width1")+"px"); 

								
							});
	
})
