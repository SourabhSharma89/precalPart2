//START:Changed from Bangalore Team
var CurrQuestionIndex = 0;
//END:Changed from Bangalore Team


$(document).ready(function(){
						  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
		
	window.checkMobile=isMobileDevice();		  
						   //////////////NFR///////////////////
						   
						    $(document).keydown(function(objEvent) {
												 
							
						  if(DoneClicked == 1)
						  {
							  
							 $(function() {
					  
									// gather all inputs of selected types
									var inputs = $('.tab,.done1,.calc'), inputTo;
									
									// bind on keydown
									inputs.on('keydown', function(e) {
																
										// if we pressed the tab
										if (e.keyCode == 9 || e.which == 9) {
											
											// prevent default tab action
											e.preventDefault();
								
											if (e.shiftKey) {
												// get previous input based on the current input
												inputTo = inputs.get(inputs.index(this) - 1);
											} else {
												// get next input based on the current input
												inputTo = inputs.get(inputs.index(this) + 1);
											}
								
											// move focus to inputTo, otherwise focus first input
											if (inputTo) {
												inputTo.focus();
											} else {
												inputs[0].focus();
											}
										}
									});
								});
						  }
						  else if(DoneClicked == 0)
						  {
							  
    
						  }
						  })
						   var DoneClicked = 0
						   $(".section1").hide();
						   $(".footer").css("pointer-events","none");
						   $(".newSet,.Procedure").hide();
						   $(".solution").css('visibility','hidden');
						   var attempted_num = 1;
						   var next_val = 0;
						    window.SolutionOpt = 0;
						   //////////////For NFR closed//////////
						    //////////////For NFR closed//////////
						         var sb=-10000;
							var autorunVar = 0
							var animCount=0;
							window.checksol=0;
							$(".Wrng, .Wrt").hide();
							
						
					 $(".disable").hide();
							$(".howTo_div").css('left','4%');
							
							
 						    $(".autorun").css('opacity','.4');
						    $(".autorun").attr('disable','true');
						    $(".autorun").css('cursor','default');
							$(".promptComma,.prompt,.blankMessage,.ReducePromt,.prompt_New").hide();
							
 							$(".solutionMainSteps,.solutionText").hide();	
							$(".incorrect,.correct").show();
							 
				///////////////////////////////////For Print///////////////////////////////////
				
				 myFunction= function() {
					window.print();
				};
				
				
			
				////////////////////////////For focus on text//////////////////////////////
				
				 
				/* $(".newSet").click(function(){
											 
						 sb=-10000;///set this as initial value..	
								
 					$(".solutionMainSteps,.solutionText").hide();
	
					$(".input1").val('');
					$(".incorrect,.correct").hide();
 					$(".blankMessage,.ReducePromt").hide();
 					$(".prompt,.promptComma").hide();
			        $(".autorun").css('opacity','.4');
					$(".autorun").css('cursor','default');
					$(".autorun").prop('disabled',false);
					$(".input1").focus();
					
					
					
				});*/


/////////////////////////////////////////////////////////Buttons/////////////////////////////////////////////////////////////////////////////////////////////
				
				
				  $(".done1").click(function(){ 
											 
									$(".Procedure_banner").hide();				   
				        		    
									$(".done1").css({'color':'#660066','box-shadow':'0px 0px 0px #ff0000, 0px 1px 7px #ff0000,  0px 1px 0px #ff0000,  0px 0px 3px #ff0000'});
									$(".newSet,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1").focus();
													        
														});
						 
						  $(".newSet").click(function(){ 
													  $(".Wrng, .Wrt,.remark").hide();
									sb=-10000;///set this as initial value..
					    animCount=1
						if(animCount==1){	
						  $(".Graph_main_div").removeClass('graph_anim');
						  $(".Graph_main_div").removeClass('extraclass');
						  animCount=0;
						}
						
					  if(checkMobile)
					  {
					
					  }else{
						 // $(".howTo_div").css("left","4%");
					  }	
					  window.newVal = 1;
									
									////////// for NFR//////				 
									
									////////// for NFR//////
									DoneClicked = 0	
									CurrQuestionIndex=0
									next_val++;
									nextQuesGeneration();
									attempted_num++;
									$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").val('')
									$(".done1").css("pointer-events","auto")
									$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").css("pointer-events","auto")
									$(".calc").css("pointer-events","auto");
									/*$(".newSet,.solution").hide();*/
									$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").attr("disabled",false)
									document.getElementById("FB_TxtBox").innerHTML =""
								//	document.getElementById("FB_TxtBox").innerHTML =""
									////////// for NFR End//////
									
 																	
									$(".autorun").css('disable','true');				 
									$(".Procedure_banner, .solutionMain, .solutionMain").hide();				   
				        		    $(".newSet").css('color','#ffff00');
									$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".done1,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									
									
									////////// for NFR //////
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});                           ////////// for NFR End ////// 
									
									
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									////////// for NFR //////
									$(".input1").focus();
									////////// for NFR //////
   
													        $(".solutionContainer,.solutionMainSteps,.middle1,.Graph_main_div").show();
									$(".Step1,.solutionText").hide();
									$(".mini_tablBtn").css({"border":"1.5px solid #cc00009e;","box-shadow":" 0px 0px 0px 0px red"});
					if(!checkMobile){
									$(".ZtableDivMain,.mini_tablBtn").show();
									//$(".mini_tblsolu").css({"left":"unset","top":"13.2em","right":"-2em"})
									}
									//$(".howTo_div").show();
									
									resetLine1();
									
														});
						    $(".solution").click(function(){ 
									window.checksol=1;					  
									$(".input1").focus();
									$(".howTo_div").hide(); 
									$(".Procedure_banner").hide();
				        		    $(".solution").css('color','#ffff00');
									$(".solution").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".ZtableDivMain,.mini_tablBtn").hide();
		                            $(".mini_tablBtn").css({"border":"1.5px solid #cc00009e;","box-shadow":" 0px 0px 0px 0px red"});
												        
														});
							
							 $(".Procedure").click(function(){ 
															
															$(".input1").focus();
															 autorunVar = 1; 
															 sb=-1;
															 
									$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
									$(".solutionMainSteps,.solutionText").hide();
 									$(".autorun").css('opacity','.4');
									$(".autorun").css('disable','true');
									$(".autorun").css('cursor','default');
									$(".autorun").attr('disabled',true);
 				        		    $(".Procedure").css('color','red');
									$(".Procedure").css({'color':'red','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.solution").css({'color':'white','box-shadow':'none'});

									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure_banner").fadeIn();	
							
						});
							  
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

						   $(".Cross_PB").click(function(){
														 
								$(".Procedure_banner").hide();	
								$(".input1").focus();
								
							});	
							 
	 					   $(".Cross_BM").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								
							});	

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/				
	
				randRange = function (min, max) {
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
			   }
			   
               
			   area=function(polygon) {
				var total = 0;
				for (var i = 0; i < polygon.length; i++) {
					var addX = polygon[i][0];
					var addY = polygon[i === polygon.length - 1 ? 0 : i + 1][1];
					var subX = polygon[i === polygon.length - 1 ? 0 : i + 1][0];
					var subY = polygon[i][1];
					total += (addX * addY * 0.5) - (subX * subY * 0.5);
				}
				return Math.abs(total);
			}
			
			
				
					var range_startX1 = 1000;
					var range_finX1 = 9999;
					var range_startX2 = 1000000;
					var range_finX2 = 9999999;
					var range_startX3 = 100000;
					var range_finX3 = 999999;
					var range_startX4 = 1000;
					var range_finX4 = 9999;
					var array_Range = 100;
					
					///////////////////////////////////////////////////
					
					var next_val = 0;
				
					var array_Range = 500;
					
					
					var R1_Arr = new Array();
					var R2_Arr = new Array();
					var R3_Arr = new Array();
					var R4_Arr = new Array();

					var R5_Arr = new Array();
					var R11_Arr = new Array();
					var R1_indexArr = new Array();
					
					Q1_Arr = new Array();
					Q2_Arr = new Array();
					Q3_Arr = new Array();
					Q4_Arr = new Array();	
					Q5_Arr = new Array();	
					Q6_Arr = new Array();
					Q7_Arr = new Array();	
				
					var temp_str;
					var ta1;
					var ta2;
					var ta3;
					var ta4;
					var ta5;
					var ta6;
					var ta7;
					var ta8;
					var q1_txt;
					var counter = 0;
					var wt_id1;
					var m;
					var c;
				
				quesGeneration = function(){
					//var R1_Arr = new Array();
	/*for (var i = 0; i<=Number(50); i++) {

		num1 = randRange(-8, 8);   //x1
		num2 = randRange(-8, 8);   //y1
		num3 = randRange(-8, 8);   //x2
		num4 = randRange(-8, 8);   //y2
		num5 = randRange(-8, 8);   //x3
		num6 = randRange(-8, 8);   //y3
		num7 = randRange(-8, 8);   //x4
		num8 = randRange(-8, 8);   //y4
		yTest = randRange(1, 3);
		var polygons = [[num1, num2], [num3, num4], [num5, num6], [num7, num8]];
		AreaRequired = area(polygons)
		Length1 = Math.sqrt((num3-num1)**2+(num4-num2)**2)
		Length2 = Math.sqrt((num5-num3)**2+(num6-num4)**2)
		Length3 = Math.sqrt((num7-num5)**2+(num8-num6)**2)
		Length4 = Math.sqrt((num7-num1)**2+(num8-num2)**2)
		
		midpointx1 = (num1+num5)/2
		midpointx2 = (num3+num7)/2
		midpointy1 = (num2+num6)/2
		midpointy2 = (num4+num8)/2
		
		ycal1 = 2*yTest-num2;
		ycal2 = 2*yTest-num4;
		ycal3 = 2*yTest-num6;
		ycal4 = 2*yTest-num8;
		
		
		////alert(AreaRequired)
		
		//Length1>=4 && Length2>=4 && Length3>=4 && Length4>=4
		
if( midpointx1==midpointx2  && midpointy1==midpointy2 && AreaRequired>=20 && num2<=0 && num4<0 && num6<0 && num8<0 && Math.abs(num2)>1&& Math.abs(num4)>1&& Math.abs(num6)>1&& Math.abs(num8)>1 && Math.abs(num1)>1&& Math.abs(num3)>1&& Math.abs(num5)>1&& Math.abs(num7)>1 && Math.abs(ycal1)<=8  && Math.abs(ycal2)<=8  && Math.abs(ycal3)<=8  && Math.abs(ycal4)<=8 ){
			Q1_Arr.push(num1+"@"+num2+"@"+num3+"@"+num4+"@"+num5+"@"+num6+"@"+num7+"@"+num8+"@"+yTest+"@"+ycal1+"@"+ycal2+"@"+ycal3+"@"+ycal4);
		}
		else{
			i--;
		}
	}
	
	Q2_Arr = [...new Set(Q1_Arr)]	
				//////alert(Q2_Arr+"   Q3_Arr");
				//////alert((Q2_Arr).length+"   ");
				
				console.log(Q2_Arr+"   Q2_Arr "+Q2_Arr.length)*/
				
				
				
				Q2_Arr=["4@-3@-3@-2@-5@-5@2@-6@1@5@4@7@8@1","6@-2@-6@-4@-7@-6@5@-4@1@4@6@8@6@2","7@-4@-4@-4@-6@-2@5@-2@2@8@8@6@6@3","6@-5@-2@-5@-3@-2@5@-2@1@7@7@4@4@4","4@-2@5@-4@-5@-6@-6@-4@1@4@6@8@6@5","4@-6@4@-2@-3@-2@-3@-6@1@8@4@4@8@6","5@-3@-6@-2@-7@-4@4@-5@1@5@4@6@7@7","-6@-2@5@-2@4@-4@-7@-4@2@6@6@8@8@8","7@-3@-5@-4@-6@-6@6@-5@1@5@6@8@7@9","-5@-4@6@-4@7@-2@-4@-2@1@6@6@4@4@10","5@-6@6@-4@-7@-4@-8@-6@1@8@6@6@8@11","2@-3@6@-6@-2@-5@-6@-2@1@5@8@7@4@12","-6@-5@-7@-2@6@-3@7@-6@1@7@4@5@8@13","3@-6@-7@-6@-5@-4@5@-4@1@8@8@6@6@14","-3@-6@5@-4@3@-2@-5@-4@1@8@6@4@6@15","2@-2@-6@-3@-3@-6@5@-5@1@4@5@8@7@16","-6@-4@-7@-6@5@-4@6@-2@1@6@8@6@4@17","-2@-6@-4@-3@2@-2@4@-5@1@8@5@4@7@18","5@-4@5@-2@-5@-4@-5@-6@1@6@4@6@8@19","-4@-4@6@-4@5@-2@-5@-2@2@8@8@6@6@20","-5@-5@7@-6@7@-4@-5@-3@1@7@8@6@5@21","7@-4@6@-6@-7@-4@-6@-2@1@6@8@6@4@22","-4@-2@5@-2@4@-5@-5@-5@1@4@4@7@7@23","5@-5@4@-3@-8@-4@-7@-6@1@7@5@6@8@24","-5@-2@-5@-4@6@-4@6@-2@2@6@8@8@6@25","-5@-2@5@-2@6@-5@-4@-5@1@4@4@7@7@26","-7@-6@-4@-3@8@-2@5@-5@1@8@5@4@7@27","3@-6@-7@-6@-7@-2@3@-2@1@8@8@4@4@28","6@-4@-3@-2@-5@-4@4@-6@1@6@4@6@8@29","2@-2@4@-5@-2@-6@-4@-3@1@4@7@8@5@30","-2@-2@8@-2@7@-5@-3@-5@1@4@4@7@7@31","-7@-5@8@-5@7@-2@-8@-2@1@7@7@4@4@32","6@-5@-5@-5@-7@-2@4@-2@1@7@7@4@4@33","-4@-4@7@-3@6@-5@-5@-6@1@6@5@7@8@34","7@-6@-4@-6@-3@-2@8@-2@1@8@8@4@4@35","4@-3@-5@-2@-4@-5@5@-6@1@5@4@7@8@36","4@-5@-6@-4@-6@-2@4@-3@1@7@6@4@5@37"]
			
		
		
			//Q2_Arr = random_Array(String(Q2_Arr));
				};
					
			/*/////////////////////////R1_Arr////////////////////////////////*/
		
			/*/////////////////////////R1_Arr////////////////////////////////*/
		
			var loadingString = [];
				window.loadingValues = function () {
				
				//START:Changed from Bangalore Team 
				// loadingValues.fired = true;
				//END:Changed from Bangalore Team 
				
				// next_val = 25;
				loadingString = [next_val];
				////////////////alert(next_val+"  == next_val")
				return loadingString;
				
				}
				var dataURL;	
				
				var GCFnum;
				
				
			nextQuesGeneration = function(){
					if (CurrQuestionIndex != 0) {
						next_val = Number(CurrQuestionIndex);
			}
			else {
						next_val = next_val;
			}	
				
				
				$(".solutionContainer,.solutionMainSteps,.middle1,.Graph_main_div").show();
				$(".Step1,.solutionText").hide();
				
				
				function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
		
	window.checkMobile=isMobileDevice();	
				
				if(checkMobile == false)
				{
				$(".howTo_div,.howTo").hide();
				
				}
				else
				{
				
				}
				
				
				howVar = 1;
			
					//next_val++;
				
				if (next_val>=((Q2_Arr.length)-1)) {
					next_val = 1;
				}
				temp1 = String(Q2_Arr[next_val]).split("@");
				val1 = temp1[0];
				val2 = temp1[1];
				val3 = temp1[2];
				val4 = temp1[3];
				val5 = temp1[4];
				val6 = temp1[5];
				val7 = temp1[6];
				val8 = temp1[7];
				yTest = temp1[8];
				ycal1 = temp1[9];
				ycal2 = temp1[10];
				ycal3 = temp1[11];
				ycal4 = temp1[12];
				valR1 = val1;valR2 = ycal1;valR3 = val3;valR4 = ycal2;valR5 = val5;valR6 = ycal3;valR7 = val7;valR8 = ycal4;
				//valR1 = Number(-1)*val1;valR2 = val2;valR3 = Number(-1)*val3;valR4 = val4;valR5 = Number(-1)*val5;valR6 = val6;valR7 = Number(-1)*val7;valR8 = val8;
				$(".yTest").html(yTest)
				$(".ques1").html(ConvertSmalltoBig(val1));$(".ques2").html(ConvertSmalltoBig(val2));
				$(".Ans1").html(ConvertSmalltoBig(valR1));$(".Ans2").html(ConvertSmalltoBig(valR2));
				
				$(".ques3").html(ConvertSmalltoBig(val3));$(".ques4").html(ConvertSmalltoBig(val4));
				$(".Ans3").html(ConvertSmalltoBig(valR3));$(".Ans4").html(ConvertSmalltoBig(valR4));
				
				$(".ques5").html(ConvertSmalltoBig(val5));$(".ques6").html(ConvertSmalltoBig(val6));
				$(".Ans5").html(ConvertSmalltoBig(valR5));$(".Ans6").html(ConvertSmalltoBig(valR6));
				
				$(".ques7").html(ConvertSmalltoBig(val7));$(".ques8").html(ConvertSmalltoBig(val8));
				$(".Ans7").html(ConvertSmalltoBig(valR7));$(".Ans8").html(ConvertSmalltoBig(valR8));
		////Q1////////////////////////////////////////////////////////////////////////////		
		//val1 = -3;val2 = -8;val3 = -3;val4 = -1;val5 = 1;val6 = 0;val7 = 1;val8 = -7;
		//valR1 = -3;valR2 = 8;valR3 = -3;valR4 = 1;valR5 = 1;valR6 = 0;valR7 = 1;valR8 = 7;
		/////Q2/////////////////////////////////////////////////////////////////////////////
		//val1 = -8;val2 = -8;val3 = -2;val4 = -4;val5 = -6;val6 = 1;val7 = -8;val8 = -4;
		//valR1 = 8;valR2 = -8;valR3 = 2;valR4 = -4;valR5 = 6;valR6 = 1;valR7 = 8;valR8 = -4;
		//val1 = -8;val2 = -8;val3 = -2;val4 = -4;val5 = -6;val6 = 1;val7 = -8;val8 = -4;
		//val1 = -8;val2 = -8;val3 = -8;val4 = -2;val5 = -3;val6 = 1;val7 = -3;val8 = -4;
				
		num11 = xCordinateFun((val1));num21 = yCordinateFun((val2));num31 = xCordinateFun((val3));num41 = yCordinateFun((val4));
		num51 = xCordinateFun((val5));num61 = yCordinateFun((val6));num71 = xCordinateFun((val7));num81 = yCordinateFun((val8));
		
		numR11 = xCordinateFun((valR1));numR21 = yCordinateFun((valR2));numR31 = xCordinateFun((valR3));numR41 = yCordinateFun((valR4));
		numR51 = xCordinateFun((valR5));numR61 = yCordinateFun((valR6));numR71 = xCordinateFun((valR7));numR81 = yCordinateFun((valR8))

		CoOrdinateX1=num11;CoOrdinateY1=num21;CoOrdinateX2=num31;CoOrdinateY2=num41;
		CoOrdinateX3=num51;CoOrdinateY3=num61;CoOrdinateX4=num71;CoOrdinateY4=num81;
		
		CoOrdinateRX1=numR11;CoOrdinateRY1=numR21;CoOrdinateRX2=numR31;CoOrdinateRY2=numR41;
		CoOrdinateRX3=numR51;CoOrdinateRY3=numR61;CoOrdinateRX4=numR71;CoOrdinateRY4=numR81;
		point=""; point1="";
		
					      point = CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+CoOrdinateX4+","+CoOrdinateY4+" "+CoOrdinateX1+","+CoOrdinateY1;
						  
						  point1 = CoOrdinateRX1+","+CoOrdinateRY1+" "+CoOrdinateRX2+","+CoOrdinateRY2+" "+CoOrdinateRX3+","+CoOrdinateRY3+" "+CoOrdinateRX4+","+CoOrdinateRY4+" "+CoOrdinateRX1+","+CoOrdinateRY1;
						  
						  $(".poly1").attr({"points":point});
						  $(".poly2").attr({"points":point1});
						  $(".poly1,.poly2").css("display","inline-block");
					$(".crcle1").attr({"cx":Number(CoOrdinateX1),"cy":Number(CoOrdinateY1)})
					$(".crcle2").attr({"cx":Number(CoOrdinateX2),"cy":Number(CoOrdinateY2)})
					$(".crcle3").attr({"cx":Number(CoOrdinateX3),"cy":Number(CoOrdinateY3)})
					$(".crcle4").attr({"cx":Number(CoOrdinateX4),"cy":Number(CoOrdinateY4)})
					$(".crcle11").attr({"cx":Number(CoOrdinateRX1),"cy":Number(CoOrdinateRY1)})
					$(".crcle21").attr({"cx":Number(CoOrdinateRX2),"cy":Number(CoOrdinateRY2)})
					$(".crcle31").attr({"cx":Number(CoOrdinateRX3),"cy":Number(CoOrdinateRY3)})
					$(".crcle41").attr({"cx":Number(CoOrdinateRX4),"cy":Number(CoOrdinateRY4)})
					$(".crcle1,.crcle2,.crcle3,.crcle4,.crcle11,.crcle21,.crcle31,.crcle41").css("display","inline-block");
					document.querySelector(".txt1").innerHTML = "B";
					document.querySelector(".txt2").innerHTML = "C";
					document.querySelector(".txt3").innerHTML = "D";
					document.querySelector(".txt4").innerHTML = "E";
					document.querySelector(".txt11").innerHTML = "B'";
					document.querySelector(".txt21").innerHTML = "C'";
					document.querySelector(".txt31").innerHTML = "D'";
					document.querySelector(".txt41").innerHTML = "E'";
					if(val1<0){
						if(val2==-1){	
						$(".txt1").attr({"x":Number(CoOrdinateX1)-Number(25), "y":Number(CoOrdinateY1)+Number(20)})
						}else if(val2==0){	
						$(".txt1").attr({"x":Number(CoOrdinateX1)-Number(25), "y":Number(CoOrdinateY1)-Number(10)})
						}else{
						$(".txt1").attr({"x":Number(CoOrdinateX1)-Number(25), "y":Number(CoOrdinateY1)+Number(10)})	
						}
					}else{
						if(val2==-1){
					    $(".txt1").attr({"x":Number(CoOrdinateX1)+Number(10), "y":Number(CoOrdinateY1)+Number(20)})
						}else if(val2==0){	
						$(".txt1").attr({"x":Number(CoOrdinateX1)-Number(10), "y":Number(CoOrdinateY1)-Number(10)})
						}else{
						$(".txt1").attr({"x":Number(CoOrdinateX1)+Number(10), "y":Number(CoOrdinateY1)+Number(10)})	
						}
					}
					if(val3<0){
						if(val4==-1){	
						$(".txt2").attr({"x":Number(CoOrdinateX2)-Number(25), "y":Number(CoOrdinateY2)+Number(20)})
						}else if(val4==0){	
						$(".txt2").attr({"x":Number(CoOrdinateX2)-Number(25), "y":Number(CoOrdinateY2)-Number(10)})
						}else{
						$(".txt2").attr({"x":Number(CoOrdinateX2)-Number(25), "y":Number(CoOrdinateY2)+Number(10)})	
						}
					}else{
						if(val4==-1){
					    $(".txt2").attr({"x":Number(CoOrdinateX2)+Number(10), "y":Number(CoOrdinateY2)+Number(20)})
						}else if(val4==0){	
						$(".txt2").attr({"x":Number(CoOrdinateX2)-Number(10), "y":Number(CoOrdinateY2)-Number(10)})
						}else{
						$(".txt2").attr({"x":Number(CoOrdinateX2)+Number(10), "y":Number(CoOrdinateY2)+Number(10)})	
						}
					}
					if(val5<0){
						if(val6==-1){	
						$(".txt3").attr({"x":Number(CoOrdinateX3)-Number(25), "y":Number(CoOrdinateY3)+Number(20)})
						}else if(val6==0){	
						$(".txt3").attr({"x":Number(CoOrdinateX3)-Number(25), "y":Number(CoOrdinateY3)-Number(10)})
						}else{
						$(".txt3").attr({"x":Number(CoOrdinateX3)-Number(25), "y":Number(CoOrdinateY3)+Number(10)})	
						}
					}else{
						if(val6==-1){
					    $(".txt3").attr({"x":Number(CoOrdinateX3)+Number(10), "y":Number(CoOrdinateY3)+Number(20)})
						}else if(val6==0){	
						$(".txt3").attr({"x":Number(CoOrdinateX3)-Number(10), "y":Number(CoOrdinateY3)-Number(10)})
						}else{
						$(".txt3").attr({"x":Number(CoOrdinateX3)+Number(10), "y":Number(CoOrdinateY3)+Number(10)})	
						}
					}
					if(val7<0){
						if(val8==-1){	
						$(".txt4").attr({"x":Number(CoOrdinateX4)-Number(25), "y":Number(CoOrdinateY4)+Number(20)})
						}else if(val8==0){	
						$(".txt4").attr({"x":Number(CoOrdinateX4)-Number(25), "y":Number(CoOrdinateY4)-Number(10)})
						}else{
						$(".txt4").attr({"x":Number(CoOrdinateX4)-Number(25), "y":Number(CoOrdinateY4)+Number(10)})	
						}
					}else{
						if(val8==-1){
					    $(".txt4").attr({"x":Number(CoOrdinateX4)+Number(10), "y":Number(CoOrdinateY4)+Number(20)})
						}else if(val8==0){	
						$(".txt4").attr({"x":Number(CoOrdinateX4)-Number(10), "y":Number(CoOrdinateY4)-Number(10)})
						}else{
						$(".txt4").attr({"x":Number(CoOrdinateX4)+Number(10), "y":Number(CoOrdinateY4)+Number(10)})	
						}
					}
					
					if(valR1<0){
						if(valR2==-1){	
						$(".txt11").attr({"x":Number(CoOrdinateRX1)-Number(25), "y":Number(CoOrdinateRY1)+Number(20)})
						}else if(valR2==0){	
						$(".txt11").attr({"x":Number(CoOrdinateRX1)-Number(25), "y":Number(CoOrdinateRY1)-Number(10)})
						}else{
						$(".txt11").attr({"x":Number(CoOrdinateRX1)-Number(25), "y":Number(CoOrdinateRY1)+Number(10)})	
						}
					}else{
						if(valR2==-1){
					    $(".txt11").attr({"x":Number(CoOrdinateRX1)+Number(10), "y":Number(CoOrdinateRY1)+Number(20)})
						}else if(valR2==0){	
						$(".txt11").attr({"x":Number(CoOrdinateRX1)-Number(10), "y":Number(CoOrdinateRY1)-Number(10)})
						}else{
						$(".txt11").attr({"x":Number(CoOrdinateRX1)+Number(10), "y":Number(CoOrdinateRY1)+Number(10)})	
						}
					}
					if(valR3<0){
						if(valR4==-1){	
						$(".txt21").attr({"x":Number(CoOrdinateRX2)-Number(25), "y":Number(CoOrdinateRY2)+Number(20)})
						}else if(valR4==0){	
						$(".txt21").attr({"x":Number(CoOrdinateRX2)-Number(25), "y":Number(CoOrdinateRY2)-Number(10)})
						}else{
						$(".txt21").attr({"x":Number(CoOrdinateRX2)-Number(25), "y":Number(CoOrdinateRY2)+Number(10)})	
						}
					}else{
						if(valR4==-1){
					    $(".txt21").attr({"x":Number(CoOrdinateRX2)+Number(10), "y":Number(CoOrdinateRY2)+Number(20)})
						}else if(valR4==0){	
						$(".txt21").attr({"x":Number(CoOrdinateRX2)-Number(10), "y":Number(CoOrdinateRY2)-Number(10)})
						}else{
						$(".txt21").attr({"x":Number(CoOrdinateRX2)+Number(10), "y":Number(CoOrdinateRY2)+Number(10)})	
						}
					}
					if(valR5<0){
						if(valR6==-1){	
						$(".txt31").attr({"x":Number(CoOrdinateRX3)-Number(25), "y":Number(CoOrdinateRY3)+Number(20)})
						}else if(valR6==0){	
						$(".txt31").attr({"x":Number(CoOrdinateRX3)-Number(25), "y":Number(CoOrdinateRY3)-Number(10)})
						}else{
						$(".txt31").attr({"x":Number(CoOrdinateRX3)-Number(25), "y":Number(CoOrdinateRY3)+Number(10)})	
						}
					}else{
						if(valR6==-1){
					    $(".txt31").attr({"x":Number(CoOrdinateRX3)+Number(10), "y":Number(CoOrdinateRY3)+Number(20)})
						}else if(valR6==0){	
						$(".txt31").attr({"x":Number(CoOrdinateRX3)-Number(10), "y":Number(CoOrdinateRY3)-Number(10)})
						}else{
						$(".txt31").attr({"x":Number(CoOrdinateRX3)+Number(10), "y":Number(CoOrdinateRY3)+Number(10)})	
						}
					}
					if(valR7<0){
						if(valR8==-1){	
						$(".txt41").attr({"x":Number(CoOrdinateRX4)-Number(25), "y":Number(CoOrdinateRY4)+Number(20)})
						}else if(valR8==0){	
						$(".txt41").attr({"x":Number(CoOrdinateRX4)-Number(25), "y":Number(CoOrdinateRY4)-Number(10)})
						}else{
						$(".txt41").attr({"x":Number(CoOrdinateRX4)-Number(25), "y":Number(CoOrdinateRY4)+Number(10)})	
						}
					}else{
						if(valR8==-1){
					    $(".txt41").attr({"x":Number(CoOrdinateRX4)+Number(10), "y":Number(CoOrdinateRY4)+Number(20)})
						}else if(valR8==0){	
						$(".txt41").attr({"x":Number(CoOrdinateRX4)-Number(10), "y":Number(CoOrdinateRY4)-Number(10)})
						}else{
						$(".txt41").attr({"x":Number(CoOrdinateRX4)+Number(10), "y":Number(CoOrdinateRY4)+Number(10)})	
						}
					}
					
					
					$(".txt1,.txt2,.txt3,.txt4").css({"display":"inline-block","color":"blue"})
					$(".txt11,.txt21,.txt31,.txt41").css({"display":"inline-block","color":"blue"})
					
					$(".txt11,.txt21,.txt31,.txt41").css({"display":"none"})
					$(".poly2").css("display","none");
					$(".crcle11,.crcle21,.crcle31,.crcle41").css("display","none");
						
			}
			////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			quesGeneration();
			
					next_val = Number(randRange(0, (Q2_Arr).length-1));

			
			nextQuesGeneration();  ///// Calling question..
			
				doneButtonMain = function(){
					
					
					/*if($(".txt1").css("display") != "none"){
						
							$(".Done_con").show();
						    doneConHeight = $(".Done_con").height();
							$(".Done_con").css("padding",doneConHeight/2+"px");
					 }
					 else{*/
						
					 $(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt,.prompt_New").hide();
					 
					ans1 = num11;
					 ans2 = num21;
					 ans3 = num31;
					 ans4 = num41;
					 
					
					 ans5_11 = num511;
					 ////alert(num611)
					 ans6_11 = num611;
					 
					 ans5_12 = num512;
					 ans6_12 = num612;
					 
					 
					/*k12_text = k11_text.split("=");
					 k13_text = k12_text[1].split(""+ansSign+"");
					 k14_text = trimzero(""+k13_text[1]+"");
					 k15_text = trimzero(""+k13_text[0]+"");
					 k1_text = String('y').concat('=').concat(k15_text).concat(ansSign).concat(k14_text);                     
					 ////alert(k1_text)
					 */
					 
					/*if((CoOrdinateX1 == ans1) && (CoOrdinateY1 == ans2) && (CoOrdinateX2 == ans3) && (CoOrdinateY2 == ans4) && (CoOrdinateX3 == ans5) && (CoOrdinateY3 == ans6)){
						var final_ans1 = 1;
					}
					else{
						final_ans1 = 2;
					}*/
					
				
					finalAns1 = ((CoOrdinateX1 == ans1) && (CoOrdinateY1 == ans2) && (CoOrdinateX2 == ans3) && (CoOrdinateY2 == ans4));
					
					
					
					finalAns2 = ((CoOrdinateX1 == ans3) && (CoOrdinateY1 == ans4) && (CoOrdinateX2 == ans1) && (CoOrdinateY2 == ans2));
					
				
					finalAns3 = ((CoOrdinateX1 == ans3) && (CoOrdinateX2 == ans1));
					
					
					finalAns4 = ((CoOrdinateX1 == ans1) && (CoOrdinateY1 == ans2) && (CoOrdinateX2 == ans5_11) && (CoOrdinateY2 == ans6_11));
					
					
					finalAns5 = ((CoOrdinateX1 == ans5_11) && (CoOrdinateY1 == ans6_11) && (CoOrdinateX2 == ans1) && (CoOrdinateY2 == ans2));
					
					
					
					finalAns6 = ((CoOrdinateX1 == ans1) && (CoOrdinateY1 == ans2) && (CoOrdinateX2 == ans5_12) && (CoOrdinateY2 == ans6_12));
					
					
					finalAns7 = ((CoOrdinateX1 == ans5_12) && (CoOrdinateY1 == ans6_12) && (CoOrdinateX2 == ans1) && (CoOrdinateY2 == ans2));
					
					
					
					
					
					
					//////alert(finalAns1 +"||"+ finalAns2 +"||"+ finalAns3 +"||"+ finalAns4 +"||"+ finalAns5 +"||"+ finalAns6)
					
				//	var final_ans2 = String('y').concat('=').concat(ans13).concat(ans11).concat('x').concat(ansSign).concat(ans12);
				  	
					
///////////////////////////////////////////////////////////////////////////////////////////////////////////
					 if(CoOrdinateX1 == 0) {
							$(".blankMessage_New").show().delay(2500).hide(0);	
							
						}
					else if (finalAns1 || finalAns2 || finalAns4 || finalAns5  || finalAns6 || finalAns7){
								$(".remark,.correct").show().fadeOut(2000);
							
							}
							
							else{		
								$(".remark,.incorrect").show().fadeOut(2000);
								
							}
						}
					 //}
					
					 	 //////////////////////////////////For FR///////////////////////////////////////////////
					//////////////////////////////////For NFR///////////////////////////////////////////////
				reviewMode = false;
				var Qid;
				var FBOpt;
				var HOpt;
				var SOpt;
				var VOpt;
				var MOpt;
				var EOpt;
				readQuesID();
				setModes();
				
				//$(".calc").css("pointer-events","auto");
				function setModes() {
					
					/*if (SOpt == 0 && FBOpt == 1 && EOpt == 1) {
						$(".solution").show();
						//show solution button
					} else {
						$(".solution").hide();
						// hide solution button
						//$(".newSet").hide();
						
					}*/
					//////////Fot NFR //////////
					  /*  SOpt = 3; 
						FBOpt = 2; 
						EOpt = 1;*/
						if (SOpt == 0 && FBOpt == 1 && EOpt == 1) {
							///////quiz mode///////////////////
							$(".solution").css('visibility','hidden');
							
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 1 && FBOpt == 2 && EOpt == 1) {
							///////////////practice mode///////////////
							//$(".newSet").show();
							$(".solution").show();
							$(".solution").css('visibility','visible');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 0 && FBOpt == 2 && EOpt == 1) {
							//////////////home work///////////////////
							$(".solution").css('visibility','hidden');
						    $(".calc").css("pointer-events","auto");
						} else if (SOpt == 2 && FBOpt == 2 && EOpt == 1) {
							//////////////////NFR/////////////////////////
							$(".solution").css('visibility','hidden');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 1 && FBOpt == 2 && EOpt == 0) {
							  ////////////////after submit solution mode////////
								$(".solution").show();
								$(".solution").css('visibility','visible');
								$(".newSet").hide();
								
								$(".calc").css("pointer-events","none");
								$(".done1").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").attr("disabled",true)
								DoneClicked = 1;
								
								$(".done1").click(function(){ 
                        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
                        });
						        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
								
							 
						}else if (SOpt == 3 && FBOpt == 2 && EOpt == 1) {        ////////////////educo testing mode////////
							  
								$(".solution").show();
								$(".solution").css('visibility','visible');
								$(".newSet").show();
								$(".newSet").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto");
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").css("pointer-events","auto");
								
								DoneClicked = 1;
								//$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").attr("disabled",false);
								/*$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								});  */                                          ////////////////End educo testing mode////////
								
							 
						} else {
							/////////////////////rest/////////////////////
							/*$(".solution").hide();
							$(".calc").css("pointer-events","none");
							$(".done1").css("pointer-events","none");
							$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").css("pointer-events","none");*/
					
						}
					
				}
				//////////////////
				
				// ML -- Read QuestionID
				//////////////////alert(Qid.length+"  == Qid.length")
				if (Qid.length<=0) {
					//////////////////alert(Qid.length+"  == Qid.length")
					setPreviewMode();
				}
				/*$(".QuesDiv").show();
				$(".LoadingDiv").hide();  */                 ///////////It should be closed while uploading the file
				//function setstuValues(ans, evals) {
				window.setstuValues = function setstuValues(ans, evals) {
					//8thMar2018 BLR Comments
					//Start
					
					
					$("#QuesDiv").show();
        			$("#LoadingDiv").hide();
					
					//End
					
					////////////////alert(FBOpt+" == FBOpt")
					$(".remark,.respond").css("display","inline-block")
					if (FBOpt == 2) {
						if (evals == "true") {
							
							$(".respond").html("Correct");
							$(".respond").css('color','#339966');
							
								
							
					     }else if (evals == "partial") {
							
							 $(".respond").html("Partially Correct");
							$(".respond").css('color','#0000CC');	
							
					     } else {
							
							 $(".respond").html("Incorrect");
							 $(".respond").css('color','#FF0000');
								
							
						 }
					}
					if (FBOpt == 1) {
						
						$(".respond").html("Responded");
						$(".respond").css('color','#339966');
						
						
						
					}
					preloadans(ans);
				}
				
				
				 //START:Changed from Bangalore Team 
					window.setQuesIndex = function setQuesIndex(QuesIndex) {
						//////////////////alert("setQuesIndex:" + QuesIndex)
						CurrQuestionIndex = QuesIndex;
				
						//8thMar2018 BLR Comments
						//Start
					
						
						 $("#QuesDiv").show();
       					 $("#LoadingDiv").hide();
						
						//End
						
						nextQuesGeneration();
					}
					//END:Changed from Bangalore Team 

				//ExternalInterface.addCallback("setstuValues", this, setstuValues);
				//PageMethods.setstuValues();
				//setstuValues();
				function setPreviewMode() {
					reviewMode = true;
					//$(".done1").css('cursor', 'default').prop('disabled',true);
					//$("#inputText").prop("disabled",true);//or we can use document.getElementById("inputText").disabled = true;
					
					//$(".done1").css('cursor','pointer').prop('disabled',false);
					//$("#inputText").prop("disabled",false);
				
					// disable done button in review mode
					//reset.enabled = false;
					// wherever applicable
					$(".solution").show();
					$(".solution").css('visibility','visible');
					// show solution in review mode
				}
				//ExternalInterface.addCallback("setPreviewMode",this,setPreviewMode);
				//PageMethods.setPreviewMode();
				//setPreviewMode();
				function readQuesID() {
					try {
						var sQid = window.location.href.substr(window.location.href.indexOf("?"));
						var QArr;
						//////////////////alert(sQid+"  == sQid")
						//var sQid = "http://localhost/EducoTestPrep/HTMLFRQuestionCheck/131-B0132Exp3AL.html?Qid=101$h=0$s=0$f=2"
						QArr = sQid.split("$");
						////Below code are used for opening the file without loader//////
						if (QArr.length < 2) {
									$("#QuesDiv").show();
									$("#LoadingDiv").hide();
						}
						////////////////////////////.. End ..//////////////////////////////

 						Qid = QArr[0].substr(QArr[0].indexOf("Qid")+4);
						FBOpt = QArr[3].substr(QArr[0].indexOf("f")+3);
						HOpt = QArr[1].substr(QArr[0].indexOf("h")+3);
						SOpt = QArr[2].substr(QArr[0].indexOf("s")+3);
						VOpt = QArr[4].substr(QArr[0].indexOf("v")+3);
						MOpt = QArr[5].substr(QArr[0].indexOf("m")+3);
						EOpt = QArr[6].substr(QArr[0].indexOf("e")+3);
					} catch (ex) {
					}
				}
				
				////////////////////// NFR Closed ////////////
				//////////////////////////////////////////////
		
				function preloadans(strfrmServer) {
					////////////////////alert(strfrmServer+"  == strfrmServer inside preloadans")
				
					//////////////For Checking Through 'Local Storage' ///////////////////////////
					////////////////////alert("localStorage.getItem(key) == "+localStorage.getItem("key"));
					
					/*if(localStorage.getItem("key") != null && localStorage.getItem("key") != undefined){
						var tx1 = localStorage.getItem("key").split("@serverString@");
						//////////////////alert("tx1 1//// == "+tx1);
					}*/
					//var tx1 = localStorage.getItem("key").split("@");
					//strfrmServer = localStorage.getItem("key")
					//////////////////////////////////////////////////////////////////////////////
				
					if(strfrmServer != undefined){
						////////////////////alert("strfrmServer 2 == "+strfrmServer);
						
						
						var tx1 = strfrmServer.split('@serverString@');
						////////////////////alert("tx1  == "+tx1);	
						temp1 = String(tx1[0]).split(",");
					//////////////NFR////////////////////
						final_score = String(tx1[1]);
						//////////////NFR//////////////////
						Attempted_score = String(tx1[2]);
						$(".input1").val(String(tx1[3]))
						$(".input2").val(String(tx1[4]))
						$(".input3").val(String(tx1[5]))
						$(".input4").val(String(tx1[6]))
						$(".input5").val(String(tx1[7]))
						$(".input6").val(String(tx1[8]))
						$(".input7").val(String(tx1[9]))
						$(".input8").val(String(tx1[10]))
						score1=String(tx1[11])
						score2=String(tx1[12])
						score3=String(tx1[13])
						score4=String(tx1[14])
						finalScore = String(tx1[15])
						//alert(score1) 
						if (FBOpt != 1) {
							
						if(score1==1){
							$(".Wrt1").show();
							$(".Wrng1").hide();
							
						}else{
							
							$(".Wrt1").hide();
							$(".Wrng1").show();
						}
						
						if(score2==1){
							$(".Wrt2").show();
							$(".Wrng2").hide();
							
						}else{
							
							$(".Wrt2").hide();
							$(".Wrng2").show();
						}
						
						if(score3==1){
							$(".Wrt3").show();
							$(".Wrng3").hide();
							
						}else{
							
							$(".Wrt3").hide();
							$(".Wrng3").show();
						}
						if(score4==1){
							$(".Wrt4").show();
							$(".Wrng4").hide();
							
						}else{
							
							$(".Wrt4").hide();
							$(".Wrng4").show();
						}
						
						
						}
						
						val1 = temp1[0];
				val2 = temp1[1];
				val3 = temp1[2];
				val4 = temp1[3];
				val5 = temp1[4];
				val6 = temp1[5];
				val7 = temp1[6];
				val8 = temp1[7];
				yTest = temp1[8];
				ycal1 = temp1[9];
				ycal2 = temp1[10];
				ycal3 = temp1[11];
				ycal4 = temp1[12];
				valR1 = val1;valR2 = ycal1;valR3 = val3;valR4 = ycal2;valR5 = val5;valR6 = ycal3;valR7 = val7;valR8 = ycal4;
				//valR1 = Number(-1)*val1;valR2 = val2;valR3 = Number(-1)*val3;valR4 = val4;valR5 = Number(-1)*val5;valR6 = val6;valR7 = Number(-1)*val7;valR8 = val8;
				$(".yTest").html(yTest)
				$(".ques1").html(ConvertSmalltoBig(val1));$(".ques2").html(ConvertSmalltoBig(val2));
				$(".Ans1").html(ConvertSmalltoBig(valR1));$(".Ans2").html(ConvertSmalltoBig(valR2));
				
				$(".ques3").html(ConvertSmalltoBig(val3));$(".ques4").html(ConvertSmalltoBig(val4));
				$(".Ans3").html(ConvertSmalltoBig(valR3));$(".Ans4").html(ConvertSmalltoBig(valR4));
				
				$(".ques5").html(ConvertSmalltoBig(val5));$(".ques6").html(ConvertSmalltoBig(val6));
				$(".Ans5").html(ConvertSmalltoBig(valR5));$(".Ans6").html(ConvertSmalltoBig(valR6));
				
				$(".ques7").html(ConvertSmalltoBig(val7));$(".ques8").html(ConvertSmalltoBig(val8));
				$(".Ans7").html(ConvertSmalltoBig(valR7));$(".Ans8").html(ConvertSmalltoBig(valR8));
		////Q1////////////////////////////////////////////////////////////////////////////		
		//val1 = -3;val2 = -8;val3 = -3;val4 = -1;val5 = 1;val6 = 0;val7 = 1;val8 = -7;
		//valR1 = -3;valR2 = 8;valR3 = -3;valR4 = 1;valR5 = 1;valR6 = 0;valR7 = 1;valR8 = 7;
		/////Q2/////////////////////////////////////////////////////////////////////////////
		//val1 = -8;val2 = -8;val3 = -2;val4 = -4;val5 = -6;val6 = 1;val7 = -8;val8 = -4;
		//valR1 = 8;valR2 = -8;valR3 = 2;valR4 = -4;valR5 = 6;valR6 = 1;valR7 = 8;valR8 = -4;
		//val1 = -8;val2 = -8;val3 = -2;val4 = -4;val5 = -6;val6 = 1;val7 = -8;val8 = -4;
		//val1 = -8;val2 = -8;val3 = -8;val4 = -2;val5 = -3;val6 = 1;val7 = -3;val8 = -4;
				
		num11 = xCordinateFun((val1));num21 = yCordinateFun((val2));num31 = xCordinateFun((val3));num41 = yCordinateFun((val4));
		num51 = xCordinateFun((val5));num61 = yCordinateFun((val6));num71 = xCordinateFun((val7));num81 = yCordinateFun((val8));
		
		numR11 = xCordinateFun((valR1));numR21 = yCordinateFun((valR2));numR31 = xCordinateFun((valR3));numR41 = yCordinateFun((valR4));
		numR51 = xCordinateFun((valR5));numR61 = yCordinateFun((valR6));numR71 = xCordinateFun((valR7));numR81 = yCordinateFun((valR8))

		CoOrdinateX1=num11;CoOrdinateY1=num21;CoOrdinateX2=num31;CoOrdinateY2=num41;
		CoOrdinateX3=num51;CoOrdinateY3=num61;CoOrdinateX4=num71;CoOrdinateY4=num81;
		
		CoOrdinateRX1=numR11;CoOrdinateRY1=numR21;CoOrdinateRX2=numR31;CoOrdinateRY2=numR41;
		CoOrdinateRX3=numR51;CoOrdinateRY3=numR61;CoOrdinateRX4=numR71;CoOrdinateRY4=numR81;
		point=""; point1="";
		
					      point = CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+CoOrdinateX4+","+CoOrdinateY4+" "+CoOrdinateX1+","+CoOrdinateY1;
						  
						  point1 = CoOrdinateRX1+","+CoOrdinateRY1+" "+CoOrdinateRX2+","+CoOrdinateRY2+" "+CoOrdinateRX3+","+CoOrdinateRY3+" "+CoOrdinateRX4+","+CoOrdinateRY4+" "+CoOrdinateRX1+","+CoOrdinateRY1;
						  
						  $(".poly1").attr({"points":point});
						  $(".poly2").attr({"points":point1});
						  $(".poly1,.poly2").css("display","inline-block");
					$(".crcle1").attr({"cx":Number(CoOrdinateX1),"cy":Number(CoOrdinateY1)})
					$(".crcle2").attr({"cx":Number(CoOrdinateX2),"cy":Number(CoOrdinateY2)})
					$(".crcle3").attr({"cx":Number(CoOrdinateX3),"cy":Number(CoOrdinateY3)})
					$(".crcle4").attr({"cx":Number(CoOrdinateX4),"cy":Number(CoOrdinateY4)})
					$(".crcle11").attr({"cx":Number(CoOrdinateRX1),"cy":Number(CoOrdinateRY1)})
					$(".crcle21").attr({"cx":Number(CoOrdinateRX2),"cy":Number(CoOrdinateRY2)})
					$(".crcle31").attr({"cx":Number(CoOrdinateRX3),"cy":Number(CoOrdinateRY3)})
					$(".crcle41").attr({"cx":Number(CoOrdinateRX4),"cy":Number(CoOrdinateRY4)})
					$(".crcle1,.crcle2,.crcle3,.crcle4,.crcle11,.crcle21,.crcle31,.crcle41").css("display","inline-block");
					document.querySelector(".txt1").innerHTML = "B";
					document.querySelector(".txt2").innerHTML = "C";
					document.querySelector(".txt3").innerHTML = "D";
					document.querySelector(".txt4").innerHTML = "E";
					document.querySelector(".txt11").innerHTML = "B'";
					document.querySelector(".txt21").innerHTML = "C'";
					document.querySelector(".txt31").innerHTML = "D'";
					document.querySelector(".txt41").innerHTML = "E'";
					if(val1<0){
						if(val2==-1){	
						$(".txt1").attr({"x":Number(CoOrdinateX1)-Number(25), "y":Number(CoOrdinateY1)+Number(20)})
						}else if(val2==0){	
						$(".txt1").attr({"x":Number(CoOrdinateX1)-Number(25), "y":Number(CoOrdinateY1)-Number(10)})
						}else{
						$(".txt1").attr({"x":Number(CoOrdinateX1)-Number(25), "y":Number(CoOrdinateY1)+Number(10)})	
						}
					}else{
						if(val2==-1){
					    $(".txt1").attr({"x":Number(CoOrdinateX1)+Number(10), "y":Number(CoOrdinateY1)+Number(20)})
						}else if(val2==0){	
						$(".txt1").attr({"x":Number(CoOrdinateX1)-Number(10), "y":Number(CoOrdinateY1)-Number(10)})
						}else{
						$(".txt1").attr({"x":Number(CoOrdinateX1)+Number(10), "y":Number(CoOrdinateY1)+Number(10)})	
						}
					}
					if(val3<0){
						if(val4==-1){	
						$(".txt2").attr({"x":Number(CoOrdinateX2)-Number(25), "y":Number(CoOrdinateY2)+Number(20)})
						}else if(val4==0){	
						$(".txt2").attr({"x":Number(CoOrdinateX2)-Number(25), "y":Number(CoOrdinateY2)-Number(10)})
						}else{
						$(".txt2").attr({"x":Number(CoOrdinateX2)-Number(25), "y":Number(CoOrdinateY2)+Number(10)})	
						}
					}else{
						if(val4==-1){
					    $(".txt2").attr({"x":Number(CoOrdinateX2)+Number(10), "y":Number(CoOrdinateY2)+Number(20)})
						}else if(val4==0){	
						$(".txt2").attr({"x":Number(CoOrdinateX2)-Number(10), "y":Number(CoOrdinateY2)-Number(10)})
						}else{
						$(".txt2").attr({"x":Number(CoOrdinateX2)+Number(10), "y":Number(CoOrdinateY2)+Number(10)})	
						}
					}
					if(val5<0){
						if(val6==-1){	
						$(".txt3").attr({"x":Number(CoOrdinateX3)-Number(25), "y":Number(CoOrdinateY3)+Number(20)})
						}else if(val6==0){	
						$(".txt3").attr({"x":Number(CoOrdinateX3)-Number(25), "y":Number(CoOrdinateY3)-Number(10)})
						}else{
						$(".txt3").attr({"x":Number(CoOrdinateX3)-Number(25), "y":Number(CoOrdinateY3)+Number(10)})	
						}
					}else{
						if(val6==-1){
					    $(".txt3").attr({"x":Number(CoOrdinateX3)+Number(10), "y":Number(CoOrdinateY3)+Number(20)})
						}else if(val6==0){	
						$(".txt3").attr({"x":Number(CoOrdinateX3)-Number(10), "y":Number(CoOrdinateY3)-Number(10)})
						}else{
						$(".txt3").attr({"x":Number(CoOrdinateX3)+Number(10), "y":Number(CoOrdinateY3)+Number(10)})	
						}
					}
					if(val7<0){
						if(val8==-1){	
						$(".txt4").attr({"x":Number(CoOrdinateX4)-Number(25), "y":Number(CoOrdinateY4)+Number(20)})
						}else if(val8==0){	
						$(".txt4").attr({"x":Number(CoOrdinateX4)-Number(25), "y":Number(CoOrdinateY4)-Number(10)})
						}else{
						$(".txt4").attr({"x":Number(CoOrdinateX4)-Number(25), "y":Number(CoOrdinateY4)+Number(10)})	
						}
					}else{
						if(val8==-1){
					    $(".txt4").attr({"x":Number(CoOrdinateX4)+Number(10), "y":Number(CoOrdinateY4)+Number(20)})
						}else if(val8==0){	
						$(".txt4").attr({"x":Number(CoOrdinateX4)-Number(10), "y":Number(CoOrdinateY4)-Number(10)})
						}else{
						$(".txt4").attr({"x":Number(CoOrdinateX4)+Number(10), "y":Number(CoOrdinateY4)+Number(10)})	
						}
					}
					
					if(valR1<0){
						if(valR2==-1){	
						$(".txt11").attr({"x":Number(CoOrdinateRX1)-Number(25), "y":Number(CoOrdinateRY1)+Number(20)})
						}else if(valR2==0){	
						$(".txt11").attr({"x":Number(CoOrdinateRX1)-Number(25), "y":Number(CoOrdinateRY1)-Number(10)})
						}else{
						$(".txt11").attr({"x":Number(CoOrdinateRX1)-Number(25), "y":Number(CoOrdinateRY1)+Number(10)})	
						}
					}else{
						if(valR2==-1){
					    $(".txt11").attr({"x":Number(CoOrdinateRX1)+Number(10), "y":Number(CoOrdinateRY1)+Number(20)})
						}else if(valR2==0){	
						$(".txt11").attr({"x":Number(CoOrdinateRX1)-Number(10), "y":Number(CoOrdinateRY1)-Number(10)})
						}else{
						$(".txt11").attr({"x":Number(CoOrdinateRX1)+Number(10), "y":Number(CoOrdinateRY1)+Number(10)})	
						}
					}
					if(valR3<0){
						if(valR4==-1){	
						$(".txt21").attr({"x":Number(CoOrdinateRX2)-Number(25), "y":Number(CoOrdinateRY2)+Number(20)})
						}else if(valR4==0){	
						$(".txt21").attr({"x":Number(CoOrdinateRX2)-Number(25), "y":Number(CoOrdinateRY2)-Number(10)})
						}else{
						$(".txt21").attr({"x":Number(CoOrdinateRX2)-Number(25), "y":Number(CoOrdinateRY2)+Number(10)})	
						}
					}else{
						if(valR4==-1){
					    $(".txt21").attr({"x":Number(CoOrdinateRX2)+Number(10), "y":Number(CoOrdinateRY2)+Number(20)})
						}else if(valR4==0){	
						$(".txt21").attr({"x":Number(CoOrdinateRX2)-Number(10), "y":Number(CoOrdinateRY2)-Number(10)})
						}else{
						$(".txt21").attr({"x":Number(CoOrdinateRX2)+Number(10), "y":Number(CoOrdinateRY2)+Number(10)})	
						}
					}
					if(valR5<0){
						if(valR6==-1){	
						$(".txt31").attr({"x":Number(CoOrdinateRX3)-Number(25), "y":Number(CoOrdinateRY3)+Number(20)})
						}else if(valR6==0){	
						$(".txt31").attr({"x":Number(CoOrdinateRX3)-Number(25), "y":Number(CoOrdinateRY3)-Number(10)})
						}else{
						$(".txt31").attr({"x":Number(CoOrdinateRX3)-Number(25), "y":Number(CoOrdinateRY3)+Number(10)})	
						}
					}else{
						if(valR6==-1){
					    $(".txt31").attr({"x":Number(CoOrdinateRX3)+Number(10), "y":Number(CoOrdinateRY3)+Number(20)})
						}else if(valR6==0){	
						$(".txt31").attr({"x":Number(CoOrdinateRX3)-Number(10), "y":Number(CoOrdinateRY3)-Number(10)})
						}else{
						$(".txt31").attr({"x":Number(CoOrdinateRX3)+Number(10), "y":Number(CoOrdinateRY3)+Number(10)})	
						}
					}
					if(valR7<0){
						if(valR8==-1){	
						$(".txt41").attr({"x":Number(CoOrdinateRX4)-Number(25), "y":Number(CoOrdinateRY4)+Number(20)})
						}else if(valR8==0){	
						$(".txt41").attr({"x":Number(CoOrdinateRX4)-Number(25), "y":Number(CoOrdinateRY4)-Number(10)})
						}else{
						$(".txt41").attr({"x":Number(CoOrdinateRX4)-Number(25), "y":Number(CoOrdinateRY4)+Number(10)})	
						}
					}else{
						if(valR8==-1){
					    $(".txt41").attr({"x":Number(CoOrdinateRX4)+Number(10), "y":Number(CoOrdinateRY4)+Number(20)})
						}else if(valR8==0){	
						$(".txt41").attr({"x":Number(CoOrdinateRX4)-Number(10), "y":Number(CoOrdinateRY4)-Number(10)})
						}else{
						$(".txt41").attr({"x":Number(CoOrdinateRX4)+Number(10), "y":Number(CoOrdinateRY4)+Number(10)})	
						}
					}
					
					
					$(".txt1,.txt2,.txt3,.txt4").css({"display":"inline-block","color":"blue"})
					$(".txt11,.txt21,.txt31,.txt41").css({"display":"inline-block","color":"blue"})
					
					$(".txt11,.txt21,.txt31,.txt41").css({"display":"none"})
					$(".poly2").css("display","none");
					$(".crcle11,.crcle21,.crcle31,.crcle41").css("display","none");
										
						//CoOrdinateX1
						//ans1 = String(tx1[6]);
						//ans2 = String(tx1[7]);
						//ClickToAnsDiv = String(tx1[19]);
						
						
						
						
					//////// For NFR //////////////
					
				
						if (SOpt == 2) {
								$(".solution").show();
								$(".calc").css("pointer-events","none");
								$(".done1").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").attr("disabled",true)
								
                                DoneClicked = 1;
								$(".done1").click(function(){ 
                        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
                        });
						        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
						
						if (final_score == 1) {
								$(".solution").css('visibility','hidden');
								$(".newSet").css('visibility','hidden');
								$(".newSet").hide();
						} else {
								$(".solution").css('visibility','visible');
								$(".solution").show();
								$(".newSet").css('visibility','visible');
								$(".newSet").show();
								$(".newSet").click(function(){
								$(".newSet,.solution").css('visibility','hidden');
								});
								
								}
		
							}
						}
						
					 
						
						/////// Closed NFR //////////////
						
						if (SOpt == 3) {        /////////for educo testing mode////////
							////////////////alert("hi")
								
								$(".solution").show();
								$(".newSet").show();
								$(".newSet,.solution").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").attr("disabled",false)
								
                                DoneClicked = 1;
								$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								})
								/*if (final_score == 1) {
										$(".solution").show();
										$(".newSet").show();
								} else {
										$(".solution").show();
										$(".newSet").show();
										
								}*/
		
							}                  /////////End for educo testing mode////////
				}
				////////////////////////////////////////////////////
				
				
				////////////////////////////////////////////////////
				doneButton = function() {
						
					////////////////////alert("In Final Submit")
					////////////////alert(numerator_Arr+"   ")
					var Responseflag="false";
					
					var FeedbackFlag = "false";
					var FeedbackText = "Incorrect";
					$(".respond").html("")
					
					
					feed_flag = 0;
					
					//////// For NFR //////////////
					final_score = 0;
					finalScore = 0;
					Attempted_score = attempted_num;
					/////// Closed NFR //////////////
					/////// Closed NFR //////////////
					////alert()
					
					
					
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
					var k1_text = document.getElementById("inputText").value;
					var k2_text = document.getElementById("inputText1").value;
					var k3_text = document.getElementById("inputText2").value;
					var k4_text = document.getElementById("inputText3").value;
					var k5_text = document.getElementById("inputText4").value;
					var k6_text = document.getElementById("inputText5").value;
					var k7_text = document.getElementById("inputText6").value;
					var k8_text = document.getElementById("inputText7").value;
				    ent_ans1 = trimzero(k1_text).split("–").join("-");ent_ans2 = trimzero(k2_text).split("–").join("-");
					ent_ans3 = trimzero(k3_text).split("–").join("-");ent_ans4 = trimzero(k4_text).split("–").join("-");
					ent_ans5 = trimzero(k5_text).split("–").join("-");ent_ans6 = trimzero(k6_text).split("–").join("-");
					ent_ans7 = trimzero(k7_text).split("–").join("-");ent_ans8 = trimzero(k8_text).split("–").join("-");
					
					var finalScore = 0; var score1 = 0; var score2 = 0; var score3 = 0; var score4 = 0;
					
					if(ent_ans1 == valR1 && ent_ans2 == valR2){score1 = 1;}else{score1 = 0;}
					if(ent_ans3 == valR3 && ent_ans4 == valR4){score2 = 1;}else{score2 = 0;}
					if(ent_ans5 == valR5 && ent_ans6 == valR6){score3 = 1;}else{score3 = 0;}
					if(ent_ans7 == valR7 && ent_ans8 == valR8){score4 = 1;}else{score4 = 0;}
					////alert(ent_ans1+" "+valR1)
					////alert(score1 +" "+score2+" "+score3+" "+score4)
				//	alert()
					finalScore = Number(Number(score1)+Number(score2)+Number(score3)+Number(score4))/4;
					////alert(FinalScore)
					
					
						
						if (FBOpt != 1) {
							
						if(score1==1){
							$(".Wrt1").show();
							$(".Wrng1").hide();
							
						}else{
							
							$(".Wrt1").hide();
							$(".Wrng1").show();
						}
						
						if(score2==1){
							$(".Wrt2").show();
							$(".Wrng2").hide();
							
						}else{
							
							$(".Wrt2").hide();
							$(".Wrng2").show();
						}
						
						if(score3==1){
							$(".Wrt3").show();
							$(".Wrng3").hide();
							
						}else{
							
							$(".Wrt3").hide();
							$(".Wrng3").show();
						}
						if(score4==1){
							$(".Wrt4").show();
							$(".Wrng4").hide();
							
						}else{
							
							$(".Wrt4").hide();
							$(".Wrng4").show();
						}
						
						
						}
						
						if ((finalScore<1) && (finalScore>0)) {
		                     FeedbackText = "";
		                     FeedbackFlag = "partial";
	                    }
					
///////////////////////////////////////////////////////////////////////////////////////////////////////////
					 if(ent_ans1 == "" && ent_ans2 == "" && ent_ans3 == "" && ent_ans4 == "" && ent_ans5 == "" && ent_ans6 == "" && ent_ans7 == "" && ent_ans8 == "") {
						$(".Wrt,.Wrng").hide();
						$(".prompt_New").hide();
						$(".blankMessage_New").show();
						$(".incomplete_New").hide();
						
			
						$(".what_new").hide();

						Responseflag="false";
						var FeedbackText = "";
						$(".respond").html("")
						////////// for NFR //////
						$(".done1").click(function(){ 
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
												});
						/////////////for NFR/////////////
						
					}else if(ent_ans1 == "" || ent_ans2 == "" || ent_ans3 == "" || ent_ans4 == "" || ent_ans5 == "" || ent_ans6 == "" || ent_ans7 == "" || ent_ans8 == "") {
						$(".Wrt,.Wrng").hide();
						$(".prompt_New").hide();
						$(".blankMessage_New").show();
						$(".incomplete_New").hide();
					
						$(".what_new").hide();

						Responseflag="true";
						var FeedbackText = "";
						$(".remark,.respond").show().css("display","inline-block")
						$(".respond").html("")
						////////// for NFR //////
						$(".done1").click(function(){ 
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
												});
						/////////////for NFR/////////////
						
					}else {
						
						Responseflag="true";
						
				         if (finalScore==1) {
							
							FeedbackFlag = "true";
							FeedbackText = "Correct";
							//////// For NFR //////////////
							final_score = 1;
							$(".respond").css('color','#339966');
							/////// Closed NFR //////////////
						}else if ((finalScore>0) && (finalScore<1)) {
			
							FeedbackText = "Partially Correct";
			                FeedbackFlag = "partial";
							$(".respond").css('color','#0000CC');
							
						}  else {
							FeedbackFlag = "false";
							FeedbackText = "Incorrect";
							$(".respond").css('color','#FF0000');
						}
								
							/////////////////////////////////////////////
						///////////////////////////////
						//////// For NFR //////////////
						if(feed_flag!=1){
					
								if (SOpt == 2) {
										$(".solution").show();
										$(".calc").css("pointer-events","none");
										$(".done1").css("pointer-events","none")
										$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").css({"pointer-events":"none"})
										$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").attr("disabled",true)
										DoneClicked = 1;
								$(".done1").click(function(){ 
								$(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
								});
								$(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
										
								$(".tab").focus();		
								
										
										
								if (final_score == 1) {
										$(".solution").css('visibility','hidden');
										$(".newSet").css('visibility','hidden');
				
								} else {

									//////////////alert('')
										$(".solution").css('visibility','visible');
										//$(".solution").css('visibility','visible');
										$(".newSet").css('visibility','visible');
										$(".newSet,.solution").show();
										$(".newSet").click(function(){
								        $(".newSet,.solution").css('visibility','hidden');
								
															
								});
							}
				
								}
								
								
								if (SOpt == 3) {                    /////////for educo testing mode////////
							
								$(".solution").show();
								$(".newSet").show();
								$(".newSet,.solution").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8,.crcl").attr("disabled",false)
								
								
								$(".crcl").css("pointer-events","none")
								$(".crcl").attr("disabled",true)
								
								
                                //DoneClicked = 1;
								$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								});
								/*if (final_score == 1) {
										$(".solution").show();
										$(".newSet").show();
								} else {
										$(".solution").show();
										$(".newSet").show();
										
								 }*/
						}   
							}
						
						/////// Closed NFR //////////////
						//if (feed_flag != 1) {
							//////////////////alert(FBOpt+"  == FBOpt")
							if (FBOpt == 2 || FBOpt == undefined) {
								// if feedback is enabled
								$('.respond').html(FeedbackText);
								
							} else {
								
								$('.respond').html("Responded");
								 $(".respond").css('color','#339966');
								
							}
						//}
					}
					/*Construct a string out of user answer so that 
					when this string is passed back to this file, it can be parsed
					to reproduce the user answer. Keep the string as small as possible
					*/
					//////////////For Checking Through 'Local Storage' ///ss_an1////////////////////////
					//////////////////alert(ta1+" == ta1")
					
					
					
					/*localStorage.removeItem("key")
					////////////////alert(ta1+" ta1 "+ta2+" ta2 "+aa_final+" "+aa1_final+q1_text+numb)
					
					localStorage.setItem("key",$('.input1').val()+"@serverString@"+val1+"@serverString@"+final_score+"@serverString@"+Attempted_score);
					//////////////////alert("jjjj")
					localStorage.getItem("key");*/
					
					
					////////////////alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
 					
			//////////////////////////////////////////////////////////////////
					
					
					
					
					if(Responseflag == "false"){
						
						
						 $(".respond").html('')
						 $(".input1").html('')
						 $(".input2").html('')
						
						var FeedbackText = "";
						
						
						
					}else{
						
						
						
					/*localStorage.removeItem("key")
					
					//////alert($(temp1+"")
					
					localStorage.setItem("key",temp1+"@serverString@"+final_score+"@serverString@"+Attempted_score+"@serverString@"+$('.input1').val()+"@serverString@"+$('.input2').val()+"@serverString@"+$('.input3').val()+"@serverString@"+$('.input4').val()+"@serverString@"+$('.input5').val()+"@serverString@"+$('.input6').val()+"@serverString@"+$('.input7').val()+"@serverString@"+$('.input8').val()+"@serverString@"+score1+"@serverString@"+score2+"@serverString@"+score3+"@serverString@"+score4+"@serverString@"+finalScore);
					////////////////alert("jjjj")

					localStorage.getItem("key");*/
					
					
					
					////alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
					
					
					
					var answerString = temp1+"@serverString@"+final_score+"@serverString@"+Attempted_score+"@serverString@"+$('.input1').val()+"@serverString@"+$('.input2').val()+"@serverString@"+$('.input3').val()+"@serverString@"+$('.input4').val()+"@serverString@"+$('.input5').val()+"@serverString@"+$('.input6').val()+"@serverString@"+$('.input7').val()+"@serverString@"+$('.input8').val()+"@serverString@"+score1+"@serverString@"+score2+"@serverString@"+score3+"@serverString@"+score4+"@serverString@"+finalScore;
					
					//ExternalInterface.call("writeans",Qid,answerString,FeedbackFlag);
					//////////////////alert("answerString == "+answerString);
					//writeans(Qid,answerString,FeedbackFlag);
 					//8thMar2018 BLR Comments
					//Start
					//////////alert(final_score+"  final_score")
					//////alert(finalScore)
					score = finalScore;
				   //	if (FeedbackFlag == 'true'){
					//	score = finalScore;
					//}else if (FeedbackFlag == 'partial'){
					//	score = finalScore;
					//}else{
					//	score = finalScore;
					//}
					parent.writeans(Qid, answerString, FeedbackFlag, score, Attempted_score);
					
					}
					
					//End
					
				};
						
				$(".calc_btn,.back,.delete,.clear,.solution").each(function (i) { $(this).attr('tabindex', -1); })	
						
						
				// preloadans(localStorage.getItem("key"));		
				  
				  
			 /*showSolution = function(){
				 
				 sb=0;
				 
				 
				 //////alert(sol_clk)
				 
				 autorunVar = 1  ////0 when in teacher mode
				 howVar = 2;
				     $(".correct,.incorrect,.blankMessage,.prompt,.promptComma").hide();
					 $(".autorun").css('opacity','0.4');
					 $(".autorun").attr('disabled','disabled');
					 $(".autorun").css('cursor','default');
					 $(".solutionMainSteps,.solutionText").hide();
					 
 					 $(".solutionMainSteps,.solutionText,.Graph_main_div,.Step1,.middle1").show().css({"display":"inline-block"});
					 $(".howTo").show(); 
					 
					 
					 $(".crcl").css("pointer-events", "none");
			
					$(".crcl").hover(function(){
						$(".crcl").css("cursor" , "default");
					});
					 
						CoOrdinateX1=num11;
						CoOrdinateX2=num31;
						CoOrdinateY1=num21;
						CoOrdinateY2=num41;
					 
					  if(CoOrdinateX1 > 0){
					 	$(".crcl,.crcl2,.crcl3").css("opacity" , "0");
						$(".final_line,.final_line2,.crcle1,.crcle2").css("display","none");
					 }
						
						LineDrawSol();
					 
					 	$(".crcle1").attr({"cx":CoOrdinateX1,"cy":CoOrdinateY1});
						$(".crcle2").attr({"cx":CoOrdinateX2,"cy":CoOrdinateY2});

						$(".crcle1,.crcle2").css("display","inline-block");
						
						
					
					 
					  	//$(".done_btn").css({"pointer-events" : "none"});
						
					  
						
						document.querySelector(".txt1").innerHTML = "A("+val1+","+val2+")";
						document.querySelector(".txt2").innerHTML = "B("+val3+","+val4+")";
						//document.querySelector(".txt3").innerHTML = "C("+val5+","+val6+")";
						
						$(".txt1,.txt2").css("display","inline-block");
						$(".txt1").attr({"x":Number(CoOrdinateX1)+10, "y":Number(CoOrdinateY1)+20});
						$(".txt2").attr({"x":Number(CoOrdinateX2)+10, "y":Number(CoOrdinateY2)+20});
						
						 point = CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX1+","+CoOrdinateY2+" "+CoOrdinateX2+","+CoOrdinateY2;
						  
						  $(".poly1").attr({"points":point});
						  $(".poly1").css("display","inline-block");
						  
						  
						
						
			}*/
			
			showSolution = function(){
				  $(".crcl1,.crcl2,.crcl3,.crcl4,.crcl5,.crcl6").css("opacity" , "0");
						$(".final_line,.final_line2,.final_line3,.final_line4").css("display","none");
				 count = 3;
				 resetSolCountn = 1;
				 lineDrawn2 = 1;
				 sb=0;
				 autorunVar = 1  ////0 when in teacher mode
				  howVar = 2;
				 $(".howTo_div").hide();
				 animCount++;
				
				    if(animCount==1){
				      $(".disable").show();
				      setTimeout(function(){
					    $(".Graph_main_div").addClass('graph_anim');	
					    $(".solutionText").hide();
				    });
				  
				    setTimeout(function(){
					   sb=0;
				       autorunVar = 1  ////0 when in teacher mode
				       howVar = 2;
				     $(".correct,.incorrect,.blankMessage,.prompt,.promptComma").hide();
					 $(".autorun").css('opacity','0.4');
					 $(".autorun").attr('disabled','disabled');	
					 $(".autorun").css('cursor','default');
					 $(".solutionMainSteps,.solutionText").hide();

 					 $(".solutionMainSteps,.solutionText,.Step1").show().css({"display":"inline-block"});
					 $(".howTo").show(); 
					 $(".howTo_div").hide();
					 $(".resetLine1,.resetLine2").css({"pointer-events" : "auto"});
				     
					 if(checkMobile)
					  {
						$(".howTo").hide();
					  }
					 sol();	
						
								 
				    },1800);
				 
				    setTimeout(function(){
					   $(".disable").hide();	
					  
					   if(checkMobile)
					  {
					
					  }else{
						  $(".howTo_div").css("left","32%");
					  }
				    },2000);
				 
				}
				
				else{
					  if(checkMobile)
					  {
					
					  }else{
						  $(".howTo_div").css("left","32%");
					  }
					  $(".Graph_main_div").removeClass('graph_anim').addClass('extraclass');
					  $(".solutionMainSteps,.solutionText,.Step1").show().css({"display":"inline-block"});
					  sol();
				}
				
				
				
				
			}
			
				
			
			function sol(){
			   if(checkMobile)
					  {
						  $(".howTo").show();
						   $(".howTo_Device").hide()
					
					  }else{
						   $(".howTo").hide();
						   $(".howTo_Device").hide()
					  }
			 
			  
					
					 
					 $(".crcl").css("pointer-events", "none");
			
					$(".crcl").hover(function(){
						$(".crcl").css("cursor" , "default");
					});
					 
						
					 
					  if(CoOrdinateX1 > 0){
					 	$(".crcl,.crcl2,.crcl3").css("opacity" , "0");
						$(".final_line,.final_line2,.crcle1,.crcle2").css("display","none");
					 }
						
					num11 = xCordinateFun((val1));num21 = yCordinateFun((val2));num31 = xCordinateFun((val3));num41 = yCordinateFun((val4));
		num51 = xCordinateFun((val5));num61 = yCordinateFun((val6));num71 = xCordinateFun((val7));num81 = yCordinateFun((val8));
		
		numR11 = xCordinateFun((valR1));numR21 = yCordinateFun((valR2));numR31 = xCordinateFun((valR3));numR41 = yCordinateFun((valR4));
		numR51 = xCordinateFun((valR5));numR61 = yCordinateFun((valR6));numR71 = xCordinateFun((valR7));numR81 = yCordinateFun((valR8))

		CoOrdinateX1=num11;CoOrdinateY1=num21;CoOrdinateX2=num31;CoOrdinateY2=num41;
		CoOrdinateX3=num51;CoOrdinateY3=num61;CoOrdinateX4=num71;CoOrdinateY4=num81;
		
		CoOrdinateRX1=numR11;CoOrdinateRY1=numR21;CoOrdinateRX2=numR31;CoOrdinateRY2=numR41;
		CoOrdinateRX3=numR51;CoOrdinateRY3=numR61;CoOrdinateRX4=numR71;CoOrdinateRY4=numR81;
		point=""; point1="";
		
					      point = CoOrdinateX1+","+CoOrdinateY1+" "+CoOrdinateX2+","+CoOrdinateY2+" "+CoOrdinateX3+","+CoOrdinateY3+" "+CoOrdinateX4+","+CoOrdinateY4+" "+CoOrdinateX1+","+CoOrdinateY1;
						  
						  point1 = CoOrdinateRX1+","+CoOrdinateRY1+" "+CoOrdinateRX2+","+CoOrdinateRY2+" "+CoOrdinateRX3+","+CoOrdinateRY3+" "+CoOrdinateRX4+","+CoOrdinateRY4+" "+CoOrdinateRX1+","+CoOrdinateRY1;
						  
						  $(".poly1").attr({"points":point});
						  $(".poly2").attr({"points":point1});
						  $(".poly1,.poly2").css("display","inline-block");
					$(".crcle1").attr({"cx":Number(CoOrdinateX1),"cy":Number(CoOrdinateY1)})
					$(".crcle2").attr({"cx":Number(CoOrdinateX2),"cy":Number(CoOrdinateY2)})
					$(".crcle3").attr({"cx":Number(CoOrdinateX3),"cy":Number(CoOrdinateY3)})
					$(".crcle4").attr({"cx":Number(CoOrdinateX4),"cy":Number(CoOrdinateY4)})
					$(".crcle11").attr({"cx":Number(CoOrdinateRX1),"cy":Number(CoOrdinateRY1)})
					$(".crcle21").attr({"cx":Number(CoOrdinateRX2),"cy":Number(CoOrdinateRY2)})
					$(".crcle31").attr({"cx":Number(CoOrdinateRX3),"cy":Number(CoOrdinateRY3)})
					$(".crcle41").attr({"cx":Number(CoOrdinateRX4),"cy":Number(CoOrdinateRY4)})
					$(".crcle1,.crcle2,.crcle3,.crcle4,.crcle11,.crcle21,.crcle31,.crcle41").css("display","inline-block");
					document.querySelector(".txt1").innerHTML = "B";
					document.querySelector(".txt2").innerHTML = "C";
					document.querySelector(".txt3").innerHTML = "D";
					document.querySelector(".txt4").innerHTML = "E";
					document.querySelector(".txt11").innerHTML = "B";
					document.querySelector(".txt21").innerHTML = "C'";
					document.querySelector(".txt31").innerHTML = "D'";
					document.querySelector(".txt41").innerHTML = "E'";
					if(val1<0){
						if(val2==-1){	
						$(".txt1").attr({"x":Number(CoOrdinateX1)-Number(25), "y":Number(CoOrdinateY1)+Number(20)})
						}else if(val2==0){	
						$(".txt1").attr({"x":Number(CoOrdinateX1)-Number(25), "y":Number(CoOrdinateY1)-Number(10)})
						}else{
						$(".txt1").attr({"x":Number(CoOrdinateX1)-Number(25), "y":Number(CoOrdinateY1)+Number(10)})	
						}
					}else{
						if(val2==-1){
					    $(".txt1").attr({"x":Number(CoOrdinateX1)+Number(10), "y":Number(CoOrdinateY1)+Number(20)})
						}else if(val2==0){	
						$(".txt1").attr({"x":Number(CoOrdinateX1)-Number(10), "y":Number(CoOrdinateY1)-Number(10)})
						}else{
						$(".txt1").attr({"x":Number(CoOrdinateX1)+Number(10), "y":Number(CoOrdinateY1)+Number(10)})	
						}
					}
					if(val3<0){
						if(val4==-1){	
						$(".txt2").attr({"x":Number(CoOrdinateX2)-Number(25), "y":Number(CoOrdinateY2)+Number(20)})
						}else if(val4==0){	
						$(".txt2").attr({"x":Number(CoOrdinateX2)-Number(25), "y":Number(CoOrdinateY2)-Number(10)})
						}else{
						$(".txt2").attr({"x":Number(CoOrdinateX2)-Number(25), "y":Number(CoOrdinateY2)+Number(10)})	
						}
					}else{
						if(val4==-1){
					    $(".txt2").attr({"x":Number(CoOrdinateX2)+Number(10), "y":Number(CoOrdinateY2)+Number(20)})
						}else if(val4==0){	
						$(".txt2").attr({"x":Number(CoOrdinateX2)-Number(10), "y":Number(CoOrdinateY2)-Number(10)})
						}else{
						$(".txt2").attr({"x":Number(CoOrdinateX2)+Number(10), "y":Number(CoOrdinateY2)+Number(10)})	
						}
					}
					if(val5<0){
						if(val6==-1){	
						$(".txt3").attr({"x":Number(CoOrdinateX3)-Number(25), "y":Number(CoOrdinateY3)+Number(20)})
						}else if(val6==0){	
						$(".txt3").attr({"x":Number(CoOrdinateX3)-Number(25), "y":Number(CoOrdinateY3)-Number(10)})
						}else{
						$(".txt3").attr({"x":Number(CoOrdinateX3)-Number(25), "y":Number(CoOrdinateY3)+Number(10)})	
						}
					}else{
						if(val6==-1){
					    $(".txt3").attr({"x":Number(CoOrdinateX3)+Number(10), "y":Number(CoOrdinateY3)+Number(20)})
						}else if(val6==0){	
						$(".txt3").attr({"x":Number(CoOrdinateX3)-Number(10), "y":Number(CoOrdinateY3)-Number(10)})
						}else{
						$(".txt3").attr({"x":Number(CoOrdinateX3)+Number(10), "y":Number(CoOrdinateY3)+Number(10)})	
						}
					}
					if(val7<0){
						if(val8==-1){	
						$(".txt4").attr({"x":Number(CoOrdinateX4)-Number(25), "y":Number(CoOrdinateY4)+Number(20)})
						}else if(val8==0){	
						$(".txt4").attr({"x":Number(CoOrdinateX4)-Number(25), "y":Number(CoOrdinateY4)-Number(10)})
						}else{
						$(".txt4").attr({"x":Number(CoOrdinateX4)-Number(25), "y":Number(CoOrdinateY4)+Number(10)})	
						}
					}else{
						if(val8==-1){
					    $(".txt4").attr({"x":Number(CoOrdinateX4)+Number(10), "y":Number(CoOrdinateY4)+Number(20)})
						}else if(val8==0){	
						$(".txt4").attr({"x":Number(CoOrdinateX4)-Number(10), "y":Number(CoOrdinateY4)-Number(10)})
						}else{
						$(".txt4").attr({"x":Number(CoOrdinateX4)+Number(10), "y":Number(CoOrdinateY4)+Number(10)})	
						}
					}
					
					if(valR1<0){
						if(valR2==-1){	
						$(".txt11").attr({"x":Number(CoOrdinateRX1)-Number(25), "y":Number(CoOrdinateRY1)+Number(20)})
						}else if(valR2==0){	
						$(".txt11").attr({"x":Number(CoOrdinateRX1)-Number(25), "y":Number(CoOrdinateRY1)-Number(10)})
						}else{
						$(".txt11").attr({"x":Number(CoOrdinateRX1)-Number(25), "y":Number(CoOrdinateRY1)+Number(10)})	
						}
					}else{
						if(valR2==-1){
					    $(".txt11").attr({"x":Number(CoOrdinateRX1)+Number(10), "y":Number(CoOrdinateRY1)+Number(20)})
						}else if(valR2==0){	
						$(".txt11").attr({"x":Number(CoOrdinateRX1)-Number(10), "y":Number(CoOrdinateRY1)-Number(10)})
						}else{
						$(".txt11").attr({"x":Number(CoOrdinateRX1)+Number(10), "y":Number(CoOrdinateRY1)+Number(10)})	
						}
					}
					if(valR3<0){
						if(valR4==-1){	
						$(".txt21").attr({"x":Number(CoOrdinateRX2)-Number(25), "y":Number(CoOrdinateRY2)+Number(20)})
						}else if(valR4==0){	
						$(".txt21").attr({"x":Number(CoOrdinateRX2)-Number(25), "y":Number(CoOrdinateRY2)-Number(10)})
						}else{
						$(".txt21").attr({"x":Number(CoOrdinateRX2)-Number(25), "y":Number(CoOrdinateRY2)+Number(10)})	
						}
					}else{
						if(valR4==-1){
					    $(".txt21").attr({"x":Number(CoOrdinateRX2)+Number(10), "y":Number(CoOrdinateRY2)+Number(20)})
						}else if(valR4==0){	
						$(".txt21").attr({"x":Number(CoOrdinateRX2)-Number(10), "y":Number(CoOrdinateRY2)-Number(10)})
						}else{
						$(".txt21").attr({"x":Number(CoOrdinateRX2)+Number(10), "y":Number(CoOrdinateRY2)+Number(10)})	
						}
					}
					if(valR5<0){
						if(valR6==-1){	
						$(".txt31").attr({"x":Number(CoOrdinateRX3)-Number(25), "y":Number(CoOrdinateRY3)+Number(20)})
						}else if(valR6==0){	
						$(".txt31").attr({"x":Number(CoOrdinateRX3)-Number(25), "y":Number(CoOrdinateRY3)-Number(10)})
						}else{
						$(".txt31").attr({"x":Number(CoOrdinateRX3)-Number(25), "y":Number(CoOrdinateRY3)+Number(10)})	
						}
					}else{
						if(valR6==-1){
					    $(".txt31").attr({"x":Number(CoOrdinateRX3)+Number(10), "y":Number(CoOrdinateRY3)+Number(20)})
						}else if(valR6==0){	
						$(".txt31").attr({"x":Number(CoOrdinateRX3)-Number(10), "y":Number(CoOrdinateRY3)-Number(10)})
						}else{
						$(".txt31").attr({"x":Number(CoOrdinateRX3)+Number(10), "y":Number(CoOrdinateRY3)+Number(10)})	
						}
					}
					if(valR7<0){
						if(valR8==-1){	
						$(".txt41").attr({"x":Number(CoOrdinateRX4)-Number(25), "y":Number(CoOrdinateRY4)+Number(20)})
						}else if(valR8==0){	
						$(".txt41").attr({"x":Number(CoOrdinateRX4)-Number(25), "y":Number(CoOrdinateRY4)-Number(10)})
						}else{
						$(".txt41").attr({"x":Number(CoOrdinateRX4)-Number(25), "y":Number(CoOrdinateRY4)+Number(10)})	
						}
					}else{
						if(valR8==-1){
					    $(".txt41").attr({"x":Number(CoOrdinateRX4)+Number(10), "y":Number(CoOrdinateRY4)+Number(20)})
						}else if(valR8==0){	
						$(".txt41").attr({"x":Number(CoOrdinateRX4)-Number(10), "y":Number(CoOrdinateRY4)-Number(10)})
						}else{
						$(".txt41").attr({"x":Number(CoOrdinateRX4)+Number(10), "y":Number(CoOrdinateRY4)+Number(10)})	
						}
					}
					
					
					$(".txt1,.txt2,.txt3,.txt4").css({"display":"inline-block","color":"blue"})
					$(".txt11,.txt21,.txt31,.txt41").css({"display":"inline-block","color":"blue"})
					
					/*$(".txt11,.txt21,.txt31,.txt41").css({"display":"none"})
					$(".poly2").css("display","none");
					$(".crcle11,.crcle21,.crcle31,.crcle41").css("display","none");	*/
			}
			
				
		$(".mini_tablBtn").click(function(){
							$(".mini_tblsolu").toggle();
							if($(".mini_tblsolu").css("display")=='block'){
								$(".mini_tablBtn").css({"border":"1.5px solid #fb4f4f9e","box-shadow":" 1px 1px 1px 1px red"});
							}else{
								$(".mini_tablBtn").css({"border":"1.5px solid #cc00009e;","box-shadow":" 0px 0px 0px 0px red"});
							}
							
							});	
						
	                        $(".cross_img").click(function(){
							$(".mini_tblsolu").hide();
							$(".mini_tablBtn").css({"border":"1.5px solid #cc00009e;","box-shadow":" 0px 0px 0px 0px red"});
						    });	
			

//////////////////////////////////////////////////////////////////////////////	

/*/////////////////////////////////////////////////////////////////////////*/
		
}); //////end of Main/////////


