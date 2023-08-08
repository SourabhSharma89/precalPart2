$(document).ready(function(){
						  
						         var sb=-10000;
							var autorunVar = 0
							var animCount=0;
							window.checksol=0;
						
					 
							
							
							
							$(".disable").hide();
							
 						    $(".autorun").css('opacity','.4');
						    $(".autorun").attr('disable','true');
						    $(".autorun").css('cursor','default');
							$(".promptComma,.prompt,.blankMessage,.ReducePromt").hide();
							
 							$(".solutionMainSteps,.solutionText").hide();	
							 $(".incorrect,.correct").show();
							 
							 
							
				///////////////////////////////////For Print///////////////////////////////////
				
				 myFunction= function() {
					window.print();
				};
				
				//////////////////////////////For focus on text////////////////////////////////
				
				 
				 $(".newSet").click(function(){
											 
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
					window.checksol=0;	
					
 					$(".solutionMainSteps,.solutionText").hide();
	
					$(".input1").val('');
					$(".incorrect,.correct").hide();
 					$(".blankMessage,.ReducePromt").hide();
 					$(".prompt,.promptComma").hide();
			        $(".autorun").css('opacity','.4');
					$(".autorun").css('cursor','default');
					$(".autorun").prop('disabled',false);
					$(".input1").focus();
					 $(".howTo_div").hide();
					
					
				});


/////////////////////////////////////////////////////////Buttons/////////////////////////////////////////////////////////////////////////////////////////////
				
				
				  $(".done1").click(function(){ 
											 
					$(".Procedure_banner").hide();				   
					
					$(".done1").css({'color':'#660066','box-shadow':'0px 0px 0px #ff0000, 0px 1px 7px #ff0000,  0px 1px 0px #ff0000,  0px 0px 3px #ff0000'});
					$(".newSet,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
					$(".Procedure").css({'color':'black','box-shadow':'none'});
					$(".input1").focus();
													        
				});
						 
						 $(".newSet").click(function(){ 
									window.newVal = 1;
									
									$(".autorun").css('disable','true');				 
									$(".Procedure_banner").hide();				   
				        		    $(".newSet").css('color','#ffff00');
									$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1,.input2").val('');
									$(".solutionContainer,.solutionMainSteps,.middle1,.Graph_main_div").show();
									$(".Step1,.solutionText").hide();
									
									//$(".howTo_div").show();
									resetLine2();
									resetLine1();
									resetSolCountn = 0;
									lineDrawn2 = 0;
									
									$(".resetLine1,.resetLine2").css({"pointer-events" : "none"});
									
								
						});
						    $(".solution").click(function(){ 
														  
									$(".input1").focus();
								//$(".input1").focus();
									window.checksol=1;
									$(".Procedure_banner").hide();
				        		    $(".solution").css('color','#ffff00');
									$(".solution").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
												        
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
							  
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

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

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
	
				randRange = function (min, max) {
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
				                                          }	
				
					var range_startX1 = 1000;
					var range_finX1 = 9999;
					var range_startX2 = 1000000;
					var range_finX2 = 9999999;
					var range_startX3 = 100000;
					var range_finX3 = 999999;
					var range_startX4 = 1000;
					var range_finX4 = 9999;
					var array_Range = 600;
					
					///////////////////////////////////////////////////
					
					var next_val = 0;
				
					var array_Range = 100;
					
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
		
				
				quesGeneration = function(){
					//var R1_Arr = new Array();
	for (var i = 0; i<array_Range; i++) {
		var a1 = [1,4,1,5,2,2,2,3,1];
		var b1 = [3,1,-2,-5,1,4,-2,6,-2];
		var c1 = [4,5,6,10,6,8,-8,-9,2];
		var a2 = [2,3,2,3,1,1,4,4,1];
		var b2 = [-1,-2,1,-6,1,1,2,-6,2];
		var c2 = [1,12,7,-9,4,1,-4,16,6];
		
		//var px1 = [[7,-1,4,0],[0,5,1,1],[0,-3,6,0],[0,-2,2,0],[3,0,0,6],[4,0,0,2],[-4,0,0,4],[-3,0,-5,1],[2,0,0,-1]];
		//var px2 = [[0,-1,2,3],[0,-6,4,0],[0,7,3,1],[-3,0,-5,-1],[4,0,0,4],[1,0,0,1],[-1,0,0,-2],[-2,-4,4,0],[6,0,0,3]];
		
		//var intersectP = [[1,1],[2,-3],[4,-1],[7,5],[2,2],[-2,3],[-2,2],[1,-2],[4,1]];
		
		var x1 = [7,0,0,0,3,4,-4,-3,2];
		var y1 = [-1,5,-3,-2,0,0,0,0,0];
		var x2 = [4,1,6,2,0,0,0,-5,0];
		var y2 = [0,1,0,0,6,2,4,1,-1];
		
		var x_1 = [0,0,0,-3,4,1,-1,-2,6];
		var y_1 = [-1,-6,7,0,0,0,0,-4,0];
		var x_2 = [2,4,3,-5,0,0,0,4,0];
		var y_2 = [3,0,1,-1,4,1,-2,0,3];
		
		var PX = [1,2,4,7,2,-2,-2,1,4];
		var PY = [1,-3,-1,5,2,3,2,-2,1];
		
		var j = Math.floor(Math.random() * a1.length);
		
		//j=1;
		
		if(b1[j] > 0){
			sgn1 = "+";
			b11 = b1[j];
		}
		else{
			sgn1 = "–";
			b11 = -(b1[j]);
		}
		
		if(c1[j] > 0){
			sgn2 = "";
			c11 = c1[j];
		}
		else{
			sgn2 = "–";
			c11 = -(c1[j]);
		}
		
		if(b2[j] > 0){
			sgn3 = "+";
			b21 = b2[j];
		}
		else{
			sgn3 = "–";
			b21 = -(b2[j]);
		}
		
		if(c2[j] > 0){
			sgn4 = "";
			c21 = c2[j];
		}
		else{
			sgn4 = "–";
			c21 = -(c2[j]);
		}
		
		
		
if(true){
	
	Q1_Arr.push(x1[j]+"@"+y1[j]+"@"+x2[j]+"@"+y2[j]+"@"+x_1[j]+"@"+y_1[j]+"@"+x_2[j]+"@"+y_2[j]+"@"+PX[j]+"@"+PY[j]+"@"+a1[j]+"@"+b11+"@"+c11+"@"+a2[j]+"@"+b21+"@"+c21+"@"+sgn1+"@"+sgn2+"@"+sgn3+"@"+sgn4);
	
}
		
	}
	Q2_Arr = Remove_Duplicate_Entry(String(Q1_Arr));	
				//////alert(Q2_Arr+"   Q3_Arr");
				//////alert(String(Q3_Arr).length+"   Q3_Arr");
				
				};
					
			/*/////////////////////////R1_Arr////////////////////////////////*/
		
			nextQuesGeneration = function(){
				$(".solutionContainer,.solutionMainSteps,.middle1,.Graph_main_div").show();
				$(".Step1,.solutionText").hide();
				howVar = 1;
					next_val++;
					
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
				val9 = temp1[8];
				val10 = temp1[9];
				
				val11 = temp1[10];
				val12 = temp1[11];
				val13 = temp1[12];
				val14 = temp1[13];
				val15 = temp1[14];
				val16 = temp1[15];
				val17 = temp1[16];
				val18 = temp1[17];
				val19 = temp1[18];
				val20 = temp1[19];
				
				
				$(".val11").html(val11);
				$(".val12").html(val12);
				$(".val13").html(val13);
				$(".val14").html(val14);
				$(".val15").html(val15);
				$(".val16").html(val16);
				$(".sgn1").html(val17);
				$(".sgn2").html(val18);
				$(".sgn3").html(val19);
				$(".sgn4").html(val20);
				////alert(val20)
				
				
				
				//$(".prompt_New,.blankMessage_New,.incomplete_New").show();
				
				
				
	////////////////////////////
	//"Estimate the difference by rounding each number to the ten - thousands"		
					
////////////////////////////////////////for solution work///////////////////////////////////////////////
				
				
				if(val11 == 1){
					v1 = "";
				}
				else{
					v1 = val11;
				}
				
				if(val12 == 1){
					v2 = "";
				}
				else{
					v2 = val12;
				}
				
				if(val14 == 1){
					v4 = "";
				}
				else{
					v4 = val14;
				}
				
				if(val15 == 1){
					v5 = "";
				}
				else{
					v5 = val15;
				}
				
				$(".v1").html(v1);
				$(".v2").html(v2);
				$(".v4").html(v4);
				$(".v5").html(v5);
				
				
				
			
				
				
				if(val1 < 0){
					X1 = val1.split("-").join("–");
				}
				else{
					X1 = val1;
				}
				
				if(val2 < 0){
					Y1 = val2.split("-").join("–");
				}
				else{
					Y1 = val2;
				}
				
				if(val3 < 0){
					X2 = val3.split("-").join("–");
				}
				else{
					X2 = val3;
				}
				
				if(val4 < 0){
					Y2 = val4.split("-").join("–");
				}
				else{
					Y2 = val4;
				}
				
				if(val5 < 0){
					X_1 = val5.split("-").join("–");
				}
				else{
					X_1 = val5;
				}
				
				if(val6 < 0){
					Y_1 = val6.split("-").join("–");
				}
				else{
					Y_1 = val6;
				}
				
				if(val7 < 0){
					X_2 = val7.split("-").join("–");
				}
				else{
					X_2 = val7;
				}
				
				if(val8 < 0){
					Y_2 = val8.split("-").join("–");
				}
				else{
					Y_2 = val8;
				}
				
				
				
				
				$(".X1").html(X1);
				$(".X2").html(X2);
				$(".Y1").html(Y1);
				$(".Y2").html(Y2);
				$(".X_1").html(X_1);
				$(".X_2").html(X_2);
				$(".Y_1").html(Y_1);
				$(".Y_2").html(Y_2);
				
				
				
				x1_1=val1;
				y1_1=val2;
				x2_1=val3;
				y2_1=val4;
				x3_1=val5;
				y3_1=val6;
				x4_1=val7;
				y4_1=val8;
				
				if(val9 < 0){
					point1 = String(val9).split("-").join("– ");
				}
				else{
					point1 = val9;
				}
				
				if(val10 < 0){
					point2 = String(val10).split("-").join("– ");
				}
				else{
					point2 = val10;
				}
				
				
				$(".point1").html(point1);
				$(".point2").html(point2);
				
				val17=val17.replace("–","-")
				val18=val18.replace("–","-")
				val19=val19.replace("–","-")
				val20=val20.replace("–","-")
				
		if(val1 == -8){
			numX1 = 50;
		}
		else if(val1 == -7){
			numX1 = 75;
		}
		else if(val1 == -6){
			numX1 = 100;
		}
		else if(val1 == -5){
			numX1 = 125;
		}
		else if(val1 == -4){
			numX1 = 150;
		}
		else if(val1 == -3){
			numX1 = 175;
		}
		else if(val1 == -2){
			numX1 = 200;
		}
		else if(val1 == -1){
			numX1 = 225;
		}
		else if(val1 == 0){
			numX1 = 250;
		}
		else if(val1 == 1){
			numX1 = 275;
		}
		else if(val1 == 2){
			numX1 = 300;
		}
		else if(val1 == 3){
			numX1 = 325;
		}
		else if(val1 == 4){
			numX1 = 350;
		}
		else if(val1 == 5){
			numX1 = 375;
		}
		else if(val1 == 6){
			numX1 = 400;
		}
		else if(val1 == 7){
			numX1 = 425;
		}
		else if(val1 == 8){
			numX1 = 450;
		}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		
		
		if(val2 == -8){
			numY1 = 450;
		}
		else if(val2 == -7){
			numY1 = 425;
		}
		else if(val2 == -6){
			numY1 = 400;
		}
		else if(val2 == -5){
			numY1 = 375;
		}
		else if(val2 == -4){
			numY1 = 350;
		}
		else if(val2 == -3){
			numY1 = 325;
		}
		else if(val2 == -2){
			numY1 = 300;
		}
		else if(val2 == -1){
			numY1 = 275;
		}
		else if(val2 == 0){
			numY1 = 250;
		}
		else if(val2 == 1){
			numY1 = 225;
		}
		else if(val2 == 2){
			numY1 = 200;
		}
		else if(val2 == 3){
			numY1 = 175;
		}
		else if(val2 == 4){
			numY1 = 150;
		}
		else if(val2 == 5){
			numY1 = 125;
		}
		else if(val2 == 6){
			numY1 = 100;
		}
		else if(val2 == 7){
			numY1 = 75;
		}
		else if(val2 == 8){
			numY1 = 50;
		}
		
		
////////////////////////////////////////////////////////////////////////////////////////////

		
		
		if(val3 == -8){
			numX2 = 50;
		}
		else if(val3 == -7){
			numX2 = 75;
		}
		else if(val3 == -6){
			numX2 = 100;
		}
		else if(val3 == -5){
			numX2 = 125;
		}
		else if(val3 == -4){
			numX2 = 150;
		}
		else if(val3 == -3){
			numX2 = 175;
		}
		else if(val3 == -2){
			numX2 = 200;
		}
		else if(val3 == -1){
			numX2 = 225;
		}
		else if(val3 == 0){
			numX2 = 250;
		}
		else if(val3 == 1){
			numX2 = 275;
		}
		else if(val3 == 2){
			numX2 = 300;
		}
		else if(val3 == 3){
			numX2 = 325;
		}
		else if(val3 == 4){
			numX2 = 350;
		}
		else if(val3 == 5){
			numX2 = 375;
		}
		else if(val3 == 6){
			numX2 = 400;
		}
		else if(val3 == 7){
			numX2 = 425;
		}
		else if(val3 == 8){
			numX2 = 450;
		}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		
		
		if(val4 == -8){
			numY2 = 450;
		}
		else if(val4 == -7){
			numY2 = 425;
		}
		else if(val4 == -6){
			numY2 = 400;
		}
		else if(val4 == -5){
			numY2 = 375;
		}
		else if(val4 == -4){
			numY2 = 350;
		}
		else if(val4 == -3){
			numY2 = 325;
		}
		else if(val4 == -2){
			numY2 = 300;
		}
		else if(val4 == -1){
			numY2 = 275;
		}
		else if(val4 == 0){
			numY2 = 250;
		}
		else if(val4 == 1){
			numY2 = 225;
		}
		else if(val4 == 2){
			numY2 = 200;
		}
		else if(val4 == 3){
			numY2 = 175;
		}
		else if(val4 == 4){
			numY2 = 150;
		}
		else if(val4 == 5){
			numY2 = 125;
		}
		else if(val4 == 6){
			numY2 = 100;
		}
		else if(val4 == 7){
			numY2 = 75;
		}
		else if(val4 == 8){
			numY2 = 50;
		}
		
					
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		
		if(val5 == -8){
			numX_1 = 50;
		}
		else if(val5 == -7){
			numX_1 = 75;
		}
		else if(val5 == -6){
			numX_1 = 100;
		}
		else if(val5 == -5){
			numX_1 = 125;
		}
		else if(val5 == -4){
			numX_1 = 150;
		}
		else if(val5 == -3){
			numX_1 = 175;
		}
		else if(val5 == -2){
			numX_1 = 200;
		}
		else if(val5 == -1){
			numX_1 = 225;
		}
		else if(val5 == 0){
			numX_1 = 250;
		}
		else if(val5 == 1){
			numX_1 = 275;
		}
		else if(val5 == 2){
			numX_1 = 300;
		}
		else if(val5 == 3){
			numX_1 = 325;
		}
		else if(val5 == 4){
			numX_1 = 350;
		}
		else if(val5 == 5){
			numX_1 = 375;
		}
		else if(val5 == 6){
			numX_1 = 400;
		}
		else if(val5 == 7){
			numX_1 = 425;
		}
		else if(val5 == 8){
			numX_1 = 450;
		}
		
		
		
		
		if(val6 == -8){
			numY_1 = 450;
		}
		else if(val6 == -7){
			numY_1 = 425;
		}
		else if(val6 == -6){
			numY_1 = 400;
		}
		else if(val6 == -5){
			numY_1 = 375;
		}
		else if(val6 == -4){
			numY_1 = 350;
		}
		else if(val6 == -3){
			numY_1 = 325;
		}
		else if(val6 == -2){
			numY_1 = 300;
		}
		else if(val6 == -1){
			numY_1 = 275;
		}
		else if(val6 == 0){
			numY_1 = 250;
		}
		else if(val6 == 1){
			numY_1 = 225;
		}
		else if(val6 == 2){
			numY_1 = 200;
		}
		else if(val6 == 3){
			numY_1 = 175;
		}
		else if(val6 == 4){
			numY_1 = 150;
		}
		else if(val6 == 5){
			numY_1 = 125;
		}
		else if(val6 == 6){
			numY_1 = 100;
		}
		else if(val6 == 7){
			numY_1 = 75;
		}
		else if(val6 == 8){
			numY_1 = 50;
		}
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		if(val7 == -8){
			numX_2 = 50;
		}
		else if(val7 == -7){
			numX_2 = 75;
		}
		else if(val7 == -6){
			numX_2 = 100;
		}
		else if(val7 == -5){
			numX_2 = 125;
		}
		else if(val7 == -4){
			numX_2 = 150;
		}
		else if(val7 == -3){
			numX_2 = 175;
		}
		else if(val7 == -2){
			numX_2 = 200;
		}
		else if(val7 == -1){
			numX_2 = 225;
		}
		else if(val7 == 0){
			numX_2 = 250;
		}
		else if(val7 == 1){
			numX_2 = 275;
		}
		else if(val7 == 2){
			numX_2 = 300;
		}
		else if(val7 == 3){
			numX_2 = 325;
		}
		else if(val7 == 4){
			numX_2 = 350;
		}
		else if(val7 == 5){
			numX_2 = 375;
		}
		else if(val7 == 6){
			numX_2 = 400;
		}
		else if(val7 == 7){
			numX_2 = 425;
		}
		else if(val7 == 8){
			numX_2 = 450;
		}
		
		
		
		
		if(val8 == -8){
			numY_2 = 450;
		}
		else if(val8 == -7){
			numY_2 = 425;
		}
		else if(val8 == -6){
			numY_2 = 400;
		}
		else if(val8 == -5){
			numY_2 = 375;
		}
		else if(val8 == -4){
			numY_2 = 350;
		}
		else if(val8 == -3){
			numY_2 = 325;
		}
		else if(val8 == -2){
			numY_2 = 300;
		}
		else if(val8 == -1){
			numY_2 = 275;
		}
		else if(val8 == 0){
			numY_2 = 250;
		}
		else if(val8 == 1){
			numY_2 = 225;
		}
		else if(val8 == 2){
			numY_2 = 200;
		}
		else if(val8 == 3){
			numY_2 = 175;
		}
		else if(val8 == 4){
			numY_2 = 150;
		}
		else if(val8 == 5){
			numY_2 = 125;
		}
		else if(val8 == 6){
			numY_2 = 100;
		}
		else if(val8 == 7){
			numY_2 = 75;
		}
		else if(val8 == 8){
			numY_2 = 50;
		}
		
		
							
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		
		///////////////For InterSecting point////////////////////////
		
		if(val9 == -8){
			p1 = 50;
		}
		else if(val9 == -7){
			p1 = 75;
		}
		else if(val9 == -6){
			p1 = 100;
		}
		else if(val9 == -5){
			p1 = 125;
		}
		else if(val9 == -4){
			p1 = 150;
		}
		else if(val9 == -3){
			p1 = 175;
		}
		else if(val9 == -2){
			p1 = 200;
		}
		else if(val9 == -1){
			p1 = 225;
		}
		else if(val9 == 0){
			p1 = 250;
		}
		else if(val9 == 1){
			p1 = 275;
		}
		else if(val9 == 2){
			p1 = 300;
		}
		else if(val9 == 3){
			p1 = 325;
		}
		else if(val9 == 4){
			p1 = 350;
		}
		else if(val9 == 5){
			p1 = 375;
		}
		else if(val9 == 6){
			p1 = 400;
		}
		else if(val9 == 7){
			p1 = 425;
		}
		else if(val9 == 8){
			p1 = 450;
		}
		
		
		
		
		if(val10 == -8){
			p2 = 450;
		}
		else if(val10 == -7){
			p2 = 425;
		}
		else if(val10 == -6){
			p2 = 400;
		}
		else if(val10 == -5){
			p2 = 375;
		}
		else if(val10 == -4){
			p2 = 350;
		}
		else if(val10 == -3){
			p2 = 325;
		}
		else if(val10 == -2){
			p2 = 300;
		}
		else if(val10 == -1){
			p2 = 275;
		}
		else if(val10 == 0){
			p2 = 250;
		}
		else if(val10 == 1){
			p2 = 225;
		}
		else if(val10 == 2){
			p2 = 200;
		}
		else if(val10 == 3){
			p2 = 175;
		}
		else if(val10 == 4){
			p2 = 150;
		}
		else if(val10 == 5){
			p2 = 125;
		}
		else if(val10 == 6){
			p2 = 100;
		}
		else if(val10 == 7){
			p2 = 75;
		}
		else if(val10 == 8){
			p2 = 50;
		}
		
		
		
		
		
		
		if (next_val>500){
			next_val = 0;
		}


}
			////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			quesGeneration();
			nextQuesGeneration();  ///// Calling question..
			
				doneButton = function(){
					
					
					/*if($(".txt1").css("display") != "none"){
						
							$(".Done_con").show();
						    doneConHeight = $(".Done_con").height();
							$(".Done_con").css("padding",doneConHeight/2+"px");
					 }
					
					else{*/
						
					
					var k11_text = trimSpaces(document.getElementById("inputText").value).split("–").join("-");
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
					
					score1=0;
					score2=0;
					
					if(val9 < 0){
						ans1 = val9.split("-").join("–");
					}
					else{
						ans1 = val9;
					}
					if(val10 < 0){
						ans2 = val10.split("-").join("–");
					}
					else{
						ans2 = val10;
					}
					
					
					ansX1=numX1;
					ansX2=numX2;
					ansY1=numY1;
					ansY2=numY2;
					
					ansX_1=numX_1;
					ansX_2=numX_2;
					ansY_1=numY_1;
					ansY_2=numY_2;
					
					
					finalAns1 = ((CoOrdinateX1 == ansX1) && (CoOrdinateY1 == ansY1) && (CoOrdinateX2 == ansX2) && (CoOrdinateY2 == ansY2) && (CoOrdinateX_1 == ansX_1) && (CoOrdinateY_1 == ansY_1) && (CoOrdinateX_2 == ansX_2) && (CoOrdinateY_2 == ansY_2));
					
					finalAns2 = ((CoOrdinateX1 == ansX2) && (CoOrdinateY1 == ansY2) && (CoOrdinateX2 == ansX1) && (CoOrdinateY2 == ansY1) && (CoOrdinateX_1 == ansX_1) && (CoOrdinateY_1 == ansY_1) && (CoOrdinateX_2 == ansX_2) && (CoOrdinateY_2 == ansY_2));
					
					finalAns3 = ((CoOrdinateX1 == ansX1) && (CoOrdinateY1 == ansY1) && (CoOrdinateX2 == ansX2) && (CoOrdinateY2 == ansY2) && (CoOrdinateX_1 == ansX_2) && (CoOrdinateY_1 == ansY_2) && (CoOrdinateX_2 == ansX_1) && (CoOrdinateY_2 == ansY_1));
					
					finalAns4 = ((CoOrdinateX1 == ansX2) && (CoOrdinateY1 == ansY2) && (CoOrdinateX2 == ansX1) && (CoOrdinateY2 == ansY1) && (CoOrdinateX_1 == ansX_2) && (CoOrdinateY_1 == ansY_2) && (CoOrdinateX_2 == ansX_1) && (CoOrdinateY_2 == ansY_1));
					
					finalAns5 = ((CoOrdinateX1 == ansX_1) && (CoOrdinateY1 == ansY_1) && (CoOrdinateX2 == ansX_2) && (CoOrdinateY2 == ansY_2) && (CoOrdinateX_1 == ansX1) && (CoOrdinateY_1 == ansY1) && (CoOrdinateX_2 == ansX2) && (CoOrdinateY_2 == ansY2));
					
					finalAns6 = ((CoOrdinateX1 == ansX_2) && (CoOrdinateY1 == ansY_2) && (CoOrdinateX2 == ansX_1) && (CoOrdinateY2 == ansY_1) && (CoOrdinateX_1 == ansX1) && (CoOrdinateY_1 == ansY1) && (CoOrdinateX_2 == ansX2) && (CoOrdinateY_2 == ansY2));
					
					finalAns7 = ((CoOrdinateX1 == ansX_1) && (CoOrdinateY1 == ansY_1) && (CoOrdinateX2 == ansX_2) && (CoOrdinateY2 == ansY_2) && (CoOrdinateX_1 == ansX2) && (CoOrdinateY_1 == ansY2) && (CoOrdinateX_2 == ansX1) && (CoOrdinateY_2 == ansY1));
					
					finalAns8 = ((CoOrdinateX1 == ansX_2) && (CoOrdinateY1 == ansY_2) && (CoOrdinateX2 == ansX_1) && (CoOrdinateY2 == ansY_1) && (CoOrdinateX_1 == ansX2) && (CoOrdinateY_1 == ansY2) && (CoOrdinateX_2 == ansX1) && (CoOrdinateY_2 == ansY1));
				
					val17_1 = String(val17).split("–").join("-");
					val18_1 = String(val18).split("–").join("-");
					val19_1 = String(val19).split("–").join("-");
					val20_1 = String(val20).split("–").join("-");
					
					if(val17_1 == "")
					{
					val17_1 = "+"	
					}
					
					if(val19_1 == "")
					{
					val19_1 = "+"	
					}
					
					
					
					if(val11 == "")
					{
					val11 = "1"	
					}
					if(val12 == "")
					{
					val12 = "1"	
					}
					if(val14 == "")
					{
					val14 = "1"	
					}
					if(val15 == "")
					{
					val15 = "1"	
					}
					
				
					if(val17_1 == "+")
					{
					equation_A = Number(val11*x1_1) + Number(val12*y1_1);
					equation_B = Number(val11*x2_1) + Number(val12*y2_1);
					}
					else
					{
					equation_A = Number(val11*x1_1) - Number(val12*y1_1);	
					equation_B = Number(val11*x2_1) - Number(val12*y2_1);
					}
					
					
					if(val19_1 == "+")
					{
					equation_C = Number(val14*x3_1) + Number(val15*y3_1);
					equation_D = Number(val14*x4_1) + Number(val15*y4_1);
					}
					else
					{
					equation_C = Number(val14*x3_1) - Number(val15*y3_1);
					equation_D = Number(val14*x4_1) - Number(val15*y4_1);
					}
					
					equation_A_1 = val18_1+val13;
					equation_A_2 = val18_1+val13;
					equation_A_3 = val20_1+val16;
					equation_A_4 = val20_1+val16;
					
					
					
				finalAns_Main = ((equation_A == equation_A_1) && (equation_B == equation_A_1) && (equation_C == equation_A_3) && (equation_D == equation_A_4) );
				////alert(CoOrdinateX1)
				//val11 val12  val14 val15
				chk1=Number(val11)*Number(PointX(CoOrdinateX1))
				chk2=Number(val12)*Number(PointY(CoOrdinateY1))
				if(val17=="+"){
				eq1=Number(chk1)+Number(chk2)
				}else{
				eq1=Number(chk1)-Number(chk2)
				}
				//alert(Number(val11)+"  v1 "+Number(PointX(CoOrdinateX1)))
				//alert(Number(val12)+"  v2 "+Number(PointY(CoOrdinateY1)))
				//eq1=`${v1}${PointX(CoOrdinateX1)}${val17}${v2}${PointY(CoOrdinateY1)}`
				verify1=`${val18}${val13}`
				
				//alert(chk1+" "+chk2 +" "+verify1)
				
				chk11=Number(val11)*Number(PointX(CoOrdinateX2))
				chk21=Number(val12)*Number(PointY(CoOrdinateY2))
				if(val17=="+"){
				eq1_1=Number(chk11)+Number(chk21)
				}else{
				eq1_1=Number(chk11)-Number(chk21)
				}
				//eq1_1=`${v1}${PointX(CoOrdinateX2)}${val17}${v2}${PointY(CoOrdinateY2)}`
				verify1_1=`${val18}${val13}`
				
				
				chk1_1=Number(val14)*Number(PointX(CoOrdinateX_1))
				chk2_1=Number(val15)*Number(PointY(CoOrdinateY_1))
				if(val19=="+"){
				eq2=Number(chk1_1)+Number(chk2_1)
				}else{
				eq2=Number(chk1_1)-Number(chk2_1)
				}
				//eq2=`${v4}${PointX(CoOrdinateX_1)}${val19}${v5}${PointY(CoOrdinateY_1)}`
				verify2=`${val18}${val13}`
				
				chk11_1=Number(val14)*Number(PointX(CoOrdinateX_1))
				chk21_1=Number(val15)*Number(PointY(CoOrdinateY_1))
				if(val19=="+"){
				eq2_2=Number(chk11_1)+Number(chk21_1)
				}else{
				eq2_2=Number(chk11_1)-Number(chk21_1)
				}
				//eq2_2=`${v4}${PointX(CoOrdinateX_2)}${val19}${v5}${PointY(CoOrdinateY_2)}=${val20}${val16}`
				verify2_2=`${val20}${val16}`
				
				
				chk1n=Number(val11)*Number(PointX(CoOrdinateX_1))
				chk2n=Number(val12)*Number(PointY(CoOrdinateY_1))
				if(val17=="+"){
				eq12=Number(chk1n)+Number(chk2n)
				}else{
				eq12=Number(chk1n)-Number(chk2n)
				}
				//eq12=`${v1}${PointX(CoOrdinateX_1)}${val17}${v2}${PointY(CoOrdinateY_1)}`
				verify12=`${val18}${val13}`;
				
				chk11n=Number(val11)*Number(PointX(CoOrdinateX_2))
				chk21n=Number(val12)*Number(PointY(CoOrdinateY_2))
				if(val17=="+"){
				eq1_12=Number(chk11n)+Number(chk21n)
				}else{
				eq1_12=Number(chk11n)-Number(chk21n)
				}
				//eq1_12=`${v1}${PointX(CoOrdinateX_2)}${val17}${v2}${PointY(CoOrdinateY_2)}`
				verify1_12=`${val18}${val13}`
				
				chk1_1n=Number(val14)*Number(PointX(CoOrdinateX1))
				chk2_1n=Number(val15)*Number(PointY(CoOrdinateY1))
				if(val19=="+"){
				eq22=Number(chk1_1n)+Number(chk2_1n)
				}else{
				eq22=Number(chk1_1n)-Number(chk2_1n)
				}
				//eq22=`${v4}${PointX(CoOrdinateX1)}${val19}${v5}${PointY(CoOrdinateY1)}`
				verify22=`${val20}${val16}`
				
				
				
				chk11_1n=Number(val14)*Number(PointX(CoOrdinateX2))
				chk21_1n=Number(val15)*Number(PointY(CoOrdinateY2))
				if(val19=="+"){
				eq2_22=Number(chk11_1n)+Number(chk21_1n)
				}else{
				eq2_22=Number(chk11_1n)-Number(chk21_1n)
				}
				//eq2_22=`${v4}${PointX(CoOrdinateX2)}${val19}${v5}${PointY(CoOrdinateY2)}`
				verify2_22=`${val20}${val16}`
				
				
				finalAns_Main_1 = ((eq1==verify1 && eq1_1==verify1_1) && (eq2==verify2 && eq2_2==verify2_2)) || ((eq12==verify12 && eq1_12==verify1_12) && (eq22==verify22 && eq2_22==verify2_22))
				
				//alert(eq1+"  "+verify12+" "+eq1_1+"  "+verify1_12)
				//alert(eq2+"  "+verify22+" "+eq2_2+"  "+verify2_22)
				//alert(eq12+"  "+verify1+" "+eq1_12+"  "+verify1_1)
				//alert(eq22+"  "+verify2+" "+eq2_22+"  "+verify2_2)
				
				//alert(eq1+"  "+eq1_1+" "+eq2+"  "+eq2_2)
				//alert(eq12+"  "+eq1_12+" "+eq22+"  "+eq2_22)
//////////////////////////////////////////////////////////////////////////
					
					k1_text = trimspaces_new(k11_text);
					
				k1_text=k1_text.split("–").join("-")
					 
					
					
					
					var wt_id1 = trimSpaces(k1_text).indexOf("("); 
					var wt_id2 = trimSpaces(k1_text).indexOf(")");
					
					var wt_id3 = trimSpaces(k1_text).indexOf(",");
					
					if(wt_id3!=-1){
						  
						  check1=k1_text.substring(0, wt_id3)
						  check2=k1_text.substring(wt_id3+1, wt_id3.length)
						  
						  var wt_id1_1 = trimSpaces(check1).indexOf("(");
						  var wt_id1_2 = trimSpaces(check2).indexOf(")");
						  
						   if(wt_id1_1!=-1){
							   
							    check1_1=check1.substring(0, wt_id1_1+1)+""+Number(check1.substring(wt_id1_1+1, check1.length))
						   }else{
							    check1_1=Number(check1);
						   }
						   
						   
						   if(wt_id1_2!=-1){
							   
							    check1_2=Number(check2.substring(check2, check2.length-1))+")"
                               // ////alert(check1_2+"   check1_2")
						   }else{
							    check1_2=Number(check2);
						   }
																	  
						
						 //check1_2=Number(check2.substring(0, check2.length-1))+")"
						 
						 
						k11_text=check1_1+","+check1_2
						
						k11_text_new=Remove_braces(k11_text)
						
						 // if()
						
						//////alert("  g")
					}else{
						k11_text=k1_text;
						k11_text_new=k1_text;
					}
					finalInputAns = "("+ans1+","+ans2+")";
					
					finalInputAns1 = ans1+","+ans2;
					
					finalInputAns=finalInputAns.split("–").join("-")
					finalInputAns1=finalInputAns1.split("–").join("-")
					//////alert(finalInputAns+"  "+finalInputAns1)
					 
					//////alert(k11_text+"  "+finalInputAns) 
					 
					
					if(k11_text==finalInputAns){
						score1=1;
						$(".Wrt1").css("opacity","1");
						$(".Wrng1").css("opacity","0");
                    }else{
						score1=0;
						$(".Wrt1").css("opacity","0");
						$(".Wrng1").css("opacity","1");
					}
					
					
						
					if(finalAns1 || finalAns2 || finalAns3 || finalAns4 || finalAns5 || finalAns6 || finalAns7 || finalAns8 || (finalAns_Main) || (finalAns_Main_1) ){
						score2=1;
						$(".Wrt2").css("opacity","1");
						$(".Wrng2").css("opacity","0");
						
					}else{
						score2=0;
						$(".Wrt2").css("opacity","0");
						$(".Wrng2").css("opacity","1");
					}
                    
					
					
					finalScore=Number(Number(score1)+Number(score2))/2;
				//	////alert(score2+"  "+score1+"   "+finalScore)
					   if(k1_text == "" && (CoOrdinateX2 == 0 || CoOrdinateX_2 == 0)) {
							$(".Wrng1,.Wrt1,.Wrng2,.Wrt2").css("opacity","0");
							$(".enter").html("Enter the");
							$(".value").html("value");
							$(".blankMessage_New").show().delay(2500).hide(0);
							$(".incomplete_New").hide()
							
						}
						else if(k1_text == "") {
							$(".Wrng1,.Wrt1,.Wrng2,.Wrt2").css("opacity","0");
							$(".enter").html("Enter the");
							$(".value").html("value");
							$(".blankMessage_New").show().delay(2500).hide(0);
							$(".incomplete_New").hide()
							
						}
						else if((CoOrdinateX2 == 0 || CoOrdinateX_2 == 0)) {
							$(".Wrng1,.Wrt1,.Wrng2,.Wrt2").css("opacity","0");
							$(".enter").html("Plot the");
							$(".value").html("graph");
							$(".blankMessage_New").show().delay(2500).hide(0);
							$(".incomplete_New").hide()
							
						}
						
						else{
						
							/*if((!finalAns1 || !finalAns2 || !finalAns3 || !finalAns4 || !finalAns5 || !finalAns6 || !finalAns7 || !finalAns8) && (trimzero(k1_text) == finalInputAns)){
								$(".Wrt1").css("opacity","1");
								$(".Wrng1").css("opacity","0");
								
							}
							else{
								$(".Wrng1").css("opacity","1");
								$(".Wrt1").css("opacity","0");
								
							}
							if((finalAns1 || finalAns2 || finalAns3 || finalAns4 || finalAns5 || finalAns6 || finalAns7 || finalAns8) && (trimzero(k1_text) != finalInputAns)){
								$(".Wrt2").css("opacity","1");
								$(".Wrng2").css("opacity","0");
							}
							else{
								$(".Wrng2").css("opacity","1");
								$(".Wrt2").css("opacity","0");
							}*/
							if((k1_text.charAt(0)!="(" && k11_text_new == finalInputAns1 && k1_text.charAt(k1_text.length-1)==")")||(k1_text.charAt(0)=="(" && k11_text_new == finalInputAns1 && k1_text.charAt(k1_text.length-1)!=")")||(k1_text.charAt(0)!="(" && k11_text_new == finalInputAns1 && k1_text.charAt(k1_text.length-1)!=")")){
								
							//$(".prompt,.blankMessage").hide();
							$(".enter").html("Place Parenthesis ((,)) ");
							$(".value").html("appropriately");
							$(".incomplete_New").show().delay(2500).hide(0);
							$(".Wrng1,.Wrt1,.Wrng2,.Wrt2").css("opacity","0");
							
							
							}else if (finalScore==1){
							//	////alert(" in final")
								$(".remark,.correct").show().fadeOut(3000);
								//$(".Wrng1,.Wrt1,.Wrng2,.Wrt2").css("opacity","0");
								//$(".Wrt1,.Wrt2").css("opacity","1");
								
							}else if(finalScore>0 && finalScore<1){
								$(".remark,.P_correct").show().fadeOut(3000);
								
							}
							else{		
								$(".remark,.incorrect").show().fadeOut(3000);
								//$(".Wrng1,.Wrt1,.Wrng2,.Wrt2").css("opacity","0");
								//$(".Wrng1,.Wrng2").css("opacity","1");
								
							}
						
						}
					 
					//}
					
					
				 }
							  
			 /*showSolution = function(){
				 count = 2;
				 sb=0;
				 autorunVar = 1  ////0 when in teacher mode
				 howVar = 2;
				 
				     $(".correct,.incorrect,.blankMessage,.prompt,.promptComma").hide();
					 $(".autorun").css('opacity','0.4');
					 $(".autorun").attr('disabled','disabled');	
					 $(".autorun").css('cursor','default');
					 $(".solutionMainSteps,.solutionText").hide();

 					 $(".solutionMainSteps,.solutionText,.Step1,.Step2").show().css({"display":"inline-block"});
					 
					 $(".howTo_div").hide();
					 resetSolCountn = 1;
					 lineDrawn2 = 1;
					 $(".resetLine1,.resetLine2").css({"pointer-events" : "auto"});
					 
					 if(CoOrdinateX1 > 0 || CoOrdinateX_1 > 0){
					 	$(".crcl,.crcl2,.crcl3,.crcl4,.crcl5").css("opacity" , "0");
						$(".final_line,.final_line2,.final_line3,.final_line4,.crcle1,.crcle2,.crcle3,.crcle4,.interSectionPoint").css("display","none");
					 }
						
						interxsectPoint1 = p1;
						interxsectPoint2 = p2;
					  	
					    CoOrdinateX1=numX1;
						CoOrdinateX2=numX2;
						CoOrdinateY1=numY1;
						CoOrdinateY2=numY2;
						
						CoOrdinateX_1=numX_1;
						CoOrdinateX_2=numX_2;
						CoOrdinateY_1=numY_1;
						CoOrdinateY_2=numY_2;
						
						LineDrawSol();
						
						LineDrawSol2();
						
						
						$(".crcle1").attr({"cx":CoOrdinateX1,"cy":CoOrdinateY1});
						$(".crcle2").attr({"cx":CoOrdinateX2,"cy":CoOrdinateY2});
						$(".crcle3").attr({"cx":CoOrdinateX_1,"cy":CoOrdinateY_1});
						$(".crcle4").attr({"cx":CoOrdinateX_2,"cy":CoOrdinateY_2});
						$(".interSectionPoint").attr({"cx":interxsectPoint1,"cy":interxsectPoint2});
						
						$(".crcle1,.crcle2,.crcle3,.crcle4,.interSectionPoint").css("display","inline-block");
						
						
						document.querySelector(".txt1").innerHTML = "A("+val1+","+val2+")";
						document.querySelector(".txt2").innerHTML = "B("+val3+","+val4+")";
						document.querySelector(".txt3").innerHTML = "I("+val9+","+val10+")";
						document.querySelector(".txt4").innerHTML = "X("+val5+","+val6+")";
						document.querySelector(".txt5").innerHTML = "Y("+val7+","+val8+")";
						
						$(".txt1,.txt2,.txt3,.txt4,.txt5").css("display","inline-block");
						$(".txt1").attr({"x":Number(CoOrdinateX1)+5, "y":Number(CoOrdinateY1)+25});
						$(".txt2").attr({"x":Number(CoOrdinateX2)+5, "y":Number(CoOrdinateY2)+25});
						$(".txt3").attr({"x":Number(interxsectPoint1)+5, "y":Number(interxsectPoint2)+25});
						$(".txt4").attr({"x":Number(CoOrdinateX_1)+5, "y":Number(CoOrdinateY_1)+25});
						$(".txt5").attr({"x":Number(CoOrdinateX_2)+5, "y":Number(CoOrdinateY_2)+25});
						
			}*/
					
			showSolution = function(){
				//$(".solutionMainSteps,.middle1").show();
				  $(".crcl1,.crcl2,.crcl3,.crcl4,.crcl5,.crcl6").css("opacity" , "0");
						$(".final_line,.final_line2,.final_line3,.final_line4,.crcle1,.crcle2,.crcle3,.crcle4,.crcle5,.crcle6").css("display","none");
				 count = 2;
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
			   
			   		$(".howTo_div").hide();
					 resetSolCountn = 1;
					 lineDrawn2 = 1;
					 $(".resetLine1,.resetLine2").css({"pointer-events" : "auto"});
					 
					 if(CoOrdinateX1 > 0 || CoOrdinateX_1 > 0){
					 	$(".crcl,.crcl2,.crcl3,.crcl4,.crcl5").css("opacity" , "0");
						$(".final_line,.final_line2,.final_line3,.final_line4,.crcle1,.crcle2,.crcle3,.crcle4,.interSectionPoint").css("display","none");
					 }
						
						interxsectPoint1 = p1;
						interxsectPoint2 = p2;
					  	
					    CoOrdinateX1=numX1;
						CoOrdinateX2=numX2;
						CoOrdinateY1=numY1;
						CoOrdinateY2=numY2;
						
						CoOrdinateX_1=numX_1;
						CoOrdinateX_2=numX_2;
						CoOrdinateY_1=numY_1;
						CoOrdinateY_2=numY_2;
						
						LineDrawSol();
						
						LineDrawSol2();
						
						
						$(".crcle1").attr({"cx":CoOrdinateX1,"cy":CoOrdinateY1});
						$(".crcle2").attr({"cx":CoOrdinateX2,"cy":CoOrdinateY2});
						$(".crcle3").attr({"cx":CoOrdinateX_1,"cy":CoOrdinateY_1});
						$(".crcle4").attr({"cx":CoOrdinateX_2,"cy":CoOrdinateY_2});
						$(".interSectionPoint").attr({"cx":interxsectPoint1,"cy":interxsectPoint2});
						
						$(".crcle1,.crcle2,.crcle3,.crcle4,.interSectionPoint").css("display","inline-block");
						
						
						document.querySelector(".txt1").innerHTML = "A("+val1+","+val2+")";
						document.querySelector(".txt2").innerHTML = "B("+val3+","+val4+")";
						document.querySelector(".txt3").innerHTML = "I("+val9+","+val10+")";
						document.querySelector(".txt4").innerHTML = "X("+val5+","+val6+")";
						document.querySelector(".txt5").innerHTML = "Y("+val7+","+val8+")";
						
						$(".txt1,.txt2,.txt3,.txt4,.txt5").css("display","inline-block");
						$(".txt1").attr({"x":Number(CoOrdinateX1)+5, "y":Number(CoOrdinateY1)+25});
						$(".txt2").attr({"x":Number(CoOrdinateX2)+5, "y":Number(CoOrdinateY2)+25});
						$(".txt3").attr({"x":Number(interxsectPoint1)+5, "y":Number(interxsectPoint2)+25});
						$(".txt4").attr({"x":Number(CoOrdinateX_1)+5, "y":Number(CoOrdinateY_1)+25});
						$(".txt5").attr({"x":Number(CoOrdinateX_2)+5, "y":Number(CoOrdinateY_2)+25});
			
			}	
/////////////////////////////////////////////////////////////////////////////////////////////	

/*/////////////////////////////////////////////////////////////////////////*/
	
}); //////end of Main/////////


