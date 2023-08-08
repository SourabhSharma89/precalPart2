// JavaScript Document

$(document).ready(function(){
		
		var contnr=$(".container").height();
	//	$(".solutionContainer").css("height",contnr+"px");
		
	$(".solution").click(function(){
								  
								  middleFunction =  function(){
			$(".middle1").css("margin-top",0+"px");	
			$(".solutionMainSteps,.middle1,.Step1,.Graph_main_div").show().css({"display":"inline-block"});
			 var hk=$(".middle1").height();
			 var hk1=$(".container").height();
			 var sol=$(".solutionText").height();
			 
			 var mar = (hk1-(hk+sol))/2;
			 if(mar < sol){
			 	mar  = sol;
			 }
			 if(hk < hk1){
				 $(".middle1").css("margin-top",sol+5+"px");
			 }
			 else
			 {
				 $(".middle1").css("margin-top",sol+"px");
			 }
			 $(".Content00").hide();
			 
			 var mql = window.matchMedia("(orientation:portrait)")
			 if (mql.matches){ 
				$(".middle1").css("margin-top",sol+"px");
			 }
			
		}
		//middleFunction();
						  })
		
		   
		  
		  
	
		
})
