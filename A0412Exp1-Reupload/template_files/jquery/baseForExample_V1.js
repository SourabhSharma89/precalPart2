$(document).ready(function(){
						   
 	window.h = $(window).innerHeight();
	window.width1 = $(window).width();
	window.w_Set = $(window).innerWidth();
	window.h_Set = $(window).innerHeight();
	window.ClickToAnsDiv = 0;
	window.ForSolutionShow = 0;
	
	
 	window.calc_btnHeight = $(".KeyPadKeyDevice").innerHeight();
	
    //alert(width1)
	
	$(".keypadKeys").css("padding-bottom",calc_btnHeight/2+"px")

	 
							 window.content_height = .81*h;
							 window.header_height = .07*h;
							 window.footer_height = .1*h;
							 
							
				window.headerHeight = $(".header").innerHeight();
				window.footerHeight = $(".footer").innerHeight();
				window.containerfluidHeight = $(".container-fluid").innerHeight();
				$(".container").css("height",containerfluidHeight-(headerHeight+footerHeight+5)+"px");
				$(".print,.autorun").css("width",footerHeight+"px");
				$(".print,.autorun").css("height",footerHeight+"px");
				window.textFontSize = $(".question").css("font-size");
				$(".input").css("font-size",textFontSize);
				
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/							
							
							
$(".done1,.SpaceBarButton").css({"-webkit-border-radius": "5px","-moz-border-radius": "5px","border-radius": "5px","-webkit-transform": "rotateX(20deg)","background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image":" -webkit-gradient(linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)", "filter": "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffff00', endColorstr='#ff9900')", /* IE6 & IE7 */
    "-ms-filter": "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffff00', endColorstr='#ff9900')"});				
							
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/		
						   

  $(".solution").click(function(){
								
								$(".solutionContainer").hide();
								$(".solutionContainer").fadeIn();
								
								});
  
$(".ClickToAnsDiv,.AreaForKeypadAndInputInDevice").hide();



 
 if(String(navigator.userAgent).indexOf("Mobile") != -1 ){
	 
							//alert("in mobile")
							$(".ClickToAnsDiv").show();
  							$(".section4,.RootInfo").hide();
							$(".new_h").css("width","100%");
							
		if (window.innerHeight > window.innerWidth) {
			
			$(".warning").hide();
			$(".container-fluid").show();
			
			
			
			
		}else{
			
			$(".warning").show();
			$(".container-fluid").hide();
			$(".orient").css({"width":100+"%","height":97+"%"});
			$(".OrientImage").css({"width":w_Set*.6+"px","margin-left":20+"%","height":h+"px"});
		}
							
					var userAgent = navigator.userAgent.toLowerCase();
					const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
						 
						if(isTablet)
						{ 
							
							$(".warning").hide();
							$(".container-fluid").show();
						}
						
 }
 if(String(navigator.userAgent).indexOf("Mobile") != -1 ){
	 
	 $('input[type="text"], textarea').each(function(){
 	 $(this).attr('readonly','readonly');
	 
}); 
	 
 }

 PromptWidth = $(".blankMessage").width();
 solutionBoxWidth = $(".container").width();
 marginLeft = (solutionBoxWidth-PromptWidth)/2;
 $(".blankMessage").css("margin-left",marginLeft+"px");
 
 
 PromptHeight = $(".blankMessage").height();
 solutionBoxHeight = $(".container").height();
 marginTop = (solutionBoxHeight-PromptHeight)/2;
 $(".blankMessage").css("margin-top",marginTop+"px");
 
 
$(".solution").click(function(){                                                                                                                                                                            ClickToAnsDiv = 0;
   ForSolutionShow = 1;		

$(".RootInfo").hide();
	
$(".AreaForKeypadAndInputInDevice").hide();
$(".ClickToAnsDiv").css({"color":"#000"});
});


$(".newSet").click(function(){
						
						if((String(navigator.userAgent).indexOf("Mobile") != -1 )){
					 
						$(".RootInfo").hide();
						
						}else{
							$(".RootInfo").show();
							}
						
						$(".AreaForKeypadAndInputInDevice").hide();
						 ClickToAnsDiv = 0;
						 
						
						});
$(".squareRoot").click(function(){$(".RootInfo").show();});



$(".ClickToAnsDiv").click(function(){
								   
						    window.deleteHeight = $(".KeyPadKeyDevice").css("height");
							window.deletefont = $(".KeyPadKeyDevice").css("font-size");
							deleteHeight = parseInt(deleteHeight);
							
							/*$(".done1,.input").css("height",deleteHeight+"px");
							$(".done1").css("font-size",deletefont);*/
								   
								   
							    if(ClickToAnsDiv==1 && ForSolutionShow == 1){
									  ClickToAnsDiv = 0;
								   	$(".AreaForKeypadAndInputInDevice").hide();
									$(".solutionContainer").show();
									$(".ClickToAnsDiv").css({"color":"#000"});
									$(".input1").focus();	
								  }else  if(ClickToAnsDiv==0){
									  ClickToAnsDiv = 1;
								   	$(".AreaForKeypadAndInputInDevice").show();
									$(".solutionContainer").hide();
									$(".ClickToAnsDiv").css({"color":"#c00"});
									$(".input1").focus()	
								  }else{
									  ClickToAnsDiv = 0;
									   	$(".AreaForKeypadAndInputInDevice").hide();
										$(".ClickToAnsDiv").css({"color":"black"});
									  
								  }
								  
								/*window.deletewidth= $(".keypadKeysDevice .ThreeCommonBtns").width();
							
								$(".done1").css("width",deletewidth+"px");  
								  */
								  
								});


KeypadBoundaryWidth = $(".KeypadBoundary").width();
KeypadBoundaryWidthDevice = $(".AreaForKeypadAndInputInDevice").width();
//alert(KeypadBoundaryWidthDevice)
$(".RootInfo").css({"width":KeypadBoundaryWidth+8+"px"});
$(".RootInfoDevice").css({"width":KeypadBoundaryWidthDevice-17+"px"});

if(String(navigator.userAgent).indexOf("Mobile") != -1 ){if (window.innerHeight < window.innerWidth) {$(".RootInfoDevice").css({"width":KeypadBoundaryWidthDevice-25+"px"});}}




//alert(KeypadBoundaryWidth+"")
					
$(".print").click(function(){

			window.print();

							});


$(".done1").click(function(){

		window.promptDisplay = $(".prompt").css("display")
		
		if(promptDisplay != "none")
		{
			
			$(".prompt").delay(2500).hide(0);	
		}

							});


                 headerHeight = $(".header").innerHeight();
				$(".container").css("height",containerfluidHeight-(headerHeight+footerHeight+5)+"px");



}); 

