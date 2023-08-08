$(document).ready(function(){
						
						
						
						
						
						
					 width  = ($(".solutionMainSteps").width()-($(".Graph_main_div").width()-($(".Btn_td1").width()*2)))/2;
	                  $(".Graph_main_div").css("left",-width+"px" );
	
	                  if(checkMobile)
						{
							$(".howTo").hide();
							var port = window.matchMedia("(orientation:portrait)")	
							if(port.matches){
								 width  = ($(".solutionMainSteps").width()-($(".Graph_main_div").width()-($(".Btn_td1").width()*2)))/2.3;
								 $(".Graph_main_div").css("left",-width+10+"px" );
							}else{
							}
						}
						else{
							//$(".Graph_main_div").css("width","31%");
							//$(".howTo_div").css("left","4%");
						}
						
						
						window.howVar = 1;
	
						$(".howTo_div").hide();	
						$(".howToForDevice").hide();
						 
						$(".howTo_button").click(function(){
							if(howVar == 1)	{						  
								$(".howTo_div").toggle();
							}
							else{
								$(".howTo_div").toggle();
								$(".solutionContainer,.solutionMainSteps,.middle1,.Step1").toggle();	
								$(".solutionContainer,.solutionMainSteps,.middle1,.Graph_main_div").show();	
								$(".Graph_main_div").removeClass('graph_anim').addClass('extraclass');
							}
							 
						}) 
						
						$(".step_cross_img").click(function(){
							if(howVar == 1)	{								
								$(".howTo_div").hide();	
							}
							else{
								$(".howTo_div").hide();	
								$(".solutionContainer,.solutionMainSteps,.middle1,.Step1").toggle();	
								$(".solutionContainer,.solutionMainSteps,.middle1,.Graph_main_div").show();	
								$(".Graph_main_div").removeClass('graph_anim').addClass('extraclass');
							}
						})
						
						
						
						
						
						
						ht=$(".solutionText").height();	
						
						//$(".howTo_div").css({"top":ht+"px"});
						
						
						window.ScreenHeight = $(window).innerHeight();
						window.ScreenWidth = $(window).innerWidth();
						
						if(ScreenWidth > 1600 && ScreenHeight<720){
							//$(".Graph_main_div").css("width","31%");
							//$(".howTo").css("right","28%");
							
						}
						
												
						$(".Cross_Img1").click(function(){
							$(".Done_con").hide();						
						})
						
						$(".ClickToAnsDiv").click(function(){
							$(".howTo").toggle(); 
							$(".howTo_div").hide();
							if(window.checksol==1){
							$(".Graph_main_div").removeClass('graph_anim').addClass('extraclass');
							}else{
							}
						});
						
						var userAgent = navigator.userAgent.toLowerCase();
					const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
						
						if(isTablet)
						{
							 var mql = window.matchMedia("screen and (min-width: 1286px) and (max-width: 1400px) and (orientation:landscape)")
							 if (mql.matches){ 
								//$(".inputAndDoneSpace").css({"margin-top" : 0+"%","width":"55%"});
								//$(".howToForDevice").css({"position":"absolute","bottom":"4%"});
								//$(".ClickToAnsDiv").css("margin-top","1%");
								//$(".remark").css({"position":"absolute","bottom":"-22%","left":"50%","z-index":"10"});
							 }
						}
						
						
						
						var mql2 = window.matchMedia("(orientation:portrait)")
						 if (mql2.matches){ 
							$(".button_div").css("display","none");
							$(".buttonDivForDevice").css("display","inline-block");
							
						 }
						 
						 divHeight = $(".howTo").height();
						// $(".howTo_div").css("top",divHeight+10+"px");
						
						 if(checkMobile)
						{
							
							var port = window.matchMedia("(orientation:portrait)")	
							if(port.matches){
								//$(".howTo_div").css("top",divHeight+10+"px");
							}else{
							}
						}
						else{
							
						}
						
						
	/*************************************How to plot graph for device*****************************************************/					
						
						if (String(navigator.userAgent).indexOf("Mobile") != -1){ 
							
							 $(".howTo").hide();
							 $(".howToForDevice").show().css("display","inline-block");
							 
							 $(".ClickToAnsDiv").click(function(){
								$(".howTo_div").hide();
								$(".howTo").hide();
								$(".solutionContainer").show();
							});
							 
							 $(".howToForDevice .howTo_button").click(function(){
								$(".AreaForKeypadAndInputInDevice").hide();
								ClickToAnsDiv = 0;
								$(".ClickToAnsDiv").css({"color":"black"});
								
							});
					    }	
						
										
						
						
	/**************************************************End Graph File****************************************************************************/				
						
						
						
			
						
						
					
				
		 });