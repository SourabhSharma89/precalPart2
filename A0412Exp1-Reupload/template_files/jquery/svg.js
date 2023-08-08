
$(document).ready(function(){
	
	$(".solutionMainSteps,.middle1,.Graph_main_div").hide();
	$(".Step1,.solutionText").hide();
	$(".resetLine1,.resetLine2").css({"pointer-events" : "none"});
	window.count=0;
	var cn;
	
	/*window.x1_1="";
	window.x2_1="";
	window.x3_1="";
	window.x4_1="";
	window.y1_1="";
	window.y2_1="";
	window.y3_1="";
	window.y4_1="";*/
	
	
	
	var res=0;
	var res1=0;
	var res2=0;
	var res3=0;
	
	var res01=0
	var res11=0;
	var res21=0;
	var res31=0;
	
	var x1_res = 0;
	var y1_res = 0;
	
	var res4=0;
	var res5=0;
	var res6=0;
	var res7=0;
	
	var res41=0;
	var res51=0;
	var res61=0;
	var res71=0;
	
	var x2_res = 0;
	var y2_res = 0;
	
	var res_0=0;
	var res_1=0;
	var res_2=0;
	var res_3=0;
	
	var res_01=0;
	var res_11=0;
	var res_21=0;
	var res_31=0;
	
	var x_1_res = 0;
	var y_1_res = 0;
	
	var res_4=0;
	var res_5=0;
	var res_6=0;
	var res_7=0;
	
	var res_41=0;
	var res_51=0;
	var res_61=0;
	var res_71=0;
	
	var x_2_res = 0;
	var y_2_res = 0;
	
	var cord1=0;
	var cord2=0;
	
	window.CoOrdinateX1=0;
	window.CoOrdinateX2=0;
	window.CoOrdinateY1=0;
	window.CoOrdinateY2=0;

	window.CoOrdinateX_1=0;
	window.CoOrdinateX_2=0;
	window.CoOrdinateY_1=0;
	window.CoOrdinateY_2=0;
	var x1_new=0;
	var x2_new=0;
	var y1_new=0;
	var y2_new=0;
	var x_1_new=0;
	var x_2_new=0;
	var y_1_new=0;
	var y_2_new=0;
	
	var resetCount = 0;
	window.resetSolCountn = 0;
	window.lineDrawn2 = 0;
	
	window.LineIntersectPoint = null;
	window.LineIntersectPointX=null;
	window.LineIntersectPointY=null;
	
	var count2 = 0;
	
	
	$(".crcl").css("opacity" , "0");
	
	$(".crcl").hover(function(){
		$(".crcl").css("cursor" , "pointer");
	});
	
	$(".crcl").click(function(){
		$(".howTo_div").hide();
		$(".resetLine1").css({"pointer-events" : "auto"});
		
	})
	
	
	
	ReturnClass = function(className){
		cn = String(className).split('$');
	}
	
	
/////////////For mouseover show Co-ordinates/////////////////////////////////////////////
	
	 if (String(navigator.userAgent).indexOf("Mobile") == -1){
		ReturnClass1 = function(className1){
			cn11 = String(className1).split('$');
			cn1 = cn11[0];
			cn2 = cn11[1];
			Co_Ordinates = "<b>"+cn1+",</b><b>"+cn2+"</b>"
			$(".ShowCoOrdinates").html(Co_Ordinates);
		}
	
		$(".crcl").mouseover(function(e){
			$(".ShowCoOrdinates").show();
			$(".ShowCoOrdinates").offset({left:e.pageX-35,top:e.pageY+10});
		})
		
		$(".crcl").mouseout(function(){
			$(".ShowCoOrdinates").hide();
		})
	 }
		
	 else{
		ReturnClass1 = function(className1){
			cn11 = String(className1).split('$');
			cn1 = cn11[0];
			cn2 = cn11[1];
		}
	 }
	 
	
	
///////////////////////////////////////////////////////////////////////////////////////////////////////

	
	
	
	$(document).on('mouseover click', '.crcl', function (event) {
		if (event.type === "click") {
			 cord1=cn11[0];
			 cord2=cn11[1];
		}
	});
	
	
	
	
	
/////////////////////for mouse click //////////////////////////////////////////////////////////////////
	
	
	$(".crcl").click(function(){
		$(this).css("opacity" , "1");
		count++;
		$(".interSectionPoint").hide();		
		if(count == 1){
			$(this).css("opacity" , "1");
			$(this).addClass('crcl2');
			Ordnt1 = String(cn).split("@");
			CoOrdinateX1 = Ordnt1[0];
			CoOrdinateY1 = Ordnt1[1];
			
			x1_1 = cn1;
			y1_1 = cn2;
			
		}
		
		  if(count == 2){
			  $(this).css("opacity" , "1");
			$(this).addClass('crcl3');
			Ordnt2 = String(cn).split("@");
			CoOrdinateX2 = Ordnt2[0];
			CoOrdinateY2 = Ordnt2[1]; 
			
			x2_1 = cn1;
			y2_1 = cn2;	
			
			if(CoOrdinateX1 == CoOrdinateX2 && CoOrdinateY1 == CoOrdinateY2){
				count=0;
				CoOrdinateX1=0;
				CoOrdinateY1=0;
				CoOrdinateX2=0;
				CoOrdinateY2=0;
				$(this).css("opacity" , "0");
			}
		}
		 if(count == 2){
		 	LineDrawSol();
			count2 = 1;
		 }
		 
		 if(count2 == 1){
			$(".crcl2,.crcl3").css("pointer-events", "auto");
			if(count == 3){
				Ordnt = String(cn).split("@");
				CoOrdinateX3 = Ordnt[0];
				CoOrdinateY3 = Ordnt[1];
				if(CoOrdinateX2 == CoOrdinateX3 && CoOrdinateY2 == CoOrdinateY3){
					count=1;
					$(this).css("opacity" , "0");
					$(".final_line,.final_line2").css("display","none");
					$(".crcl").css("pointer-events", "auto");
				}
				else if(CoOrdinateX1 == CoOrdinateX3 && CoOrdinateY1 == CoOrdinateY3){
					count=1;
					CoOrdinateX1 = CoOrdinateX2;
					CoOrdinateY1 = CoOrdinateY2;
					$(this).css("opacity" , "0");
					$(".final_line,.final_line2").css("display","none");
					$(".crcl").css("pointer-events", "auto");
				}
				
			}
			
			
		}
		
		
		 
		 if(count == 3){
			 $(this).css("opacity" , "1");
			 $(this).addClass('crcl4');
			Ordnt1 = String(cn).split("@");
			CoOrdinateX_1 = Ordnt1[0];
			CoOrdinateY_1 = Ordnt1[1];
			
			x3_1 = cn1;
			y3_1 = cn2;	
		}
		
		 if(count == 4){
			 $(this).css("opacity" , "1");
			$(this).addClass('crcl5');
			Ordnt2 = String(cn).split("@");
			CoOrdinateX_2 = Ordnt2[0];
			CoOrdinateY_2 = Ordnt2[1];
			
			x4_1 = cn1;
			y4_1 = cn2;	
			
			if(CoOrdinateX_1 == CoOrdinateX_2 && CoOrdinateY_1 == CoOrdinateY_2){
				count=2;
				CoOrdinateX_1=0;
				CoOrdinateY_1=0;
				CoOrdinateX_2=0;
				CoOrdinateY_2=0;
				$(this).css("opacity" , "0");
			}
		}
		 if(count == 4){
		 	LineDrawSol2();
			count2 = 2;
		 }
		 
		 
		 if(count2 == 2){
			$(".crcl4,.crcl5").css("pointer-events", "auto");
			if(count == 5){
				Ordnt = String(cn).split("@");
				CoOrdinateX_3 = Ordnt[0];
				CoOrdinateY_3 = Ordnt[1];
				if(CoOrdinateX_2 == CoOrdinateX_3 && CoOrdinateY_2 == CoOrdinateY_3){
					count=3;
					$(this).css("opacity" , "0");
					$(".final_line3,.final_line4,.interSectionPoint").css("display","none");
					$(".crcl").css("pointer-events", "auto");
				}
				else if(CoOrdinateX_1 == CoOrdinateX_3 && CoOrdinateY_1 == CoOrdinateY_3){
					count=3;
					CoOrdinateX_1 = CoOrdinateX_2;
					CoOrdinateY_1 = CoOrdinateY_2;
					$(this).css("opacity" , "0");
					$(".final_line3,.final_line4,.interSectionPoint").css("display","none");
					$(".crcl").css("pointer-events", "auto");
				}
				
			}
			
			
		}
	
	});

	
	

////////////////////////////// mouse click End//////////////////////////////////////////////////////////
 
	
///////////////////////////////////LineDraw For Solution///////////////////////////////////
window.LineDrawSol = function(){
	
			differenceX1 = CoOrdinateX2 - CoOrdinateX1;
			differenceY1 = CoOrdinateY2 - CoOrdinateY1;
			
			x1_new = CoOrdinateX1 - (differenceX1)*25;
			y1_new = CoOrdinateY1 - (differenceY1)*25;
			
			x2_new = CoOrdinateX1 - (differenceX1)*-25;
			y2_new = CoOrdinateY1 - (differenceY1)*-25;
			
		 function lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,bX1,bY1,bX2,bY2){
			
			var Va=((bX2-bX1)*(y1_new-bY1) - (bY2-bY1) * (x1_new-bX1) )/ ( (bY2-bY1)*(CoOrdinateX2-x1_new) - (bX2-bX1)*(CoOrdinateY2-y1_new))
			var Vb=((CoOrdinateX2-x1_new)*(y1_new-bY1) - (CoOrdinateY2-y1_new)*(x1_new-bX1))/( (bY2-bY1)*(CoOrdinateX2-x1_new) - (bX2-bX1)*(CoOrdinateY2-y1_new))			
							//alert(Va+" == "+Vb)
						
				if(Va>0 && Va<1 && Vb>0 && Vb<1)
				{
				
					var ma=(CoOrdinateY2-y1_new)/(CoOrdinateX2-x1_new)
					var mb=(bY2-bY1)/(bX2-bX1)
					if(CoOrdinateX2!=x1_new&&bX2!=bX1) 
					{
						var x=(x1_new*ma-y1_new-bX1*mb+bY1)/(ma-mb)
						var y=ma*(x-x1_new)+y1_new
					}
					else if(CoOrdinateX2==x1_new)
					{
						var x=x1_new
						var y=mb*(x-bX1)+bY1
					}
					else if(bX2==bX1)
					{
						var x=bX1
						var y=ma*(x-x1_new)+y1_new
					}
					return [x,y]
				}
				
				else{
					return 0;
				}
			}
				  
		
			 res = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,50,50,50,450);  // Left line
			
			 res1 = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,50,50,450,50);  // Top Line
			
			 res2 = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,450,50,450,450); // Right Line
			
			 res3 = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,50,450,450,450); // Bottom Line
			 
			 res01 = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,30,50,60,50);  // Top Left corner line
			
			 res11 = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,430,50,460,50);  // Top right corner Line
			
			 res21 = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,30,450,60,450); //Bottom Left corner Line
			
			 res31 = lineIntersect(x1_new,y1_new,CoOrdinateX2,CoOrdinateY2,430,450,460,450); // Bottom Right corner Line
			
			if(res != 0){
				 x1_res = res[0];
				 y1_res = res[1];
			}
			else if(res1 != 0){
				 x1_res = res1[0];
				 y1_res = res1[1];
			}
			else if(res2 != 0){
				 x1_res = res2[0];
				 y1_res = res2[1];
			}
			else if(res3 != 0){
				 x1_res = res3[0];
				 y1_res = res3[1];
			}
			
			
			/*///////////////for Corner side///////////////////*/
			
			else if(res01 != 0){
				 x1_res = res01[0];
				 y1_res = res01[1];
			}
			else if(res11 != 0){
				 x1_res = res11[0];
				 y1_res = res11[1];
			}
			else if(res21 != 0){
				 x1_res = res21[0];
				 y1_res = res21[1];
			}
			else if(res31 != 0){
				 x1_res = res31[0];
				 y1_res = res31[1];
			}
			
			
			 //alert(res01+" = "+res11+" = "+res21+" = "+res31)
			
			 
			 function lineIntersect2(x2_new,y2_new,CoOrdinateX1,CoOrdinateY1,CX1,CY1,CX2,CY2){
				
				var Va=((CX2-CX1)*(y2_new-CY1) - (CY2-CY1) * (x2_new-CX1) )/ ( (CY2-CY1)*(CoOrdinateX1-x2_new) - (CX2-CX1)*(CoOrdinateY1-y2_new))
				var Vb=((CoOrdinateX1-x2_new)*(y2_new-CY1) - (CoOrdinateY1-y2_new)*(x2_new-CX1))/( (CY2-CY1)*(CoOrdinateX1-x2_new) - (CX2-CX1)*(CoOrdinateY1-y2_new))			
							//alert(Va+" == "+Vb)
						
				if(Va>0 && Va<1 && Vb>0 && Vb<1)
				{
				
					var ma=(CoOrdinateY1-y2_new)/(CoOrdinateX1-x2_new)
					var mb=(CY2-CY1)/(CX2-CX1)
					if(CoOrdinateX1!=x2_new&&CX2!=CX1) 
					{
						var x=(x2_new*ma-y2_new-CX1*mb+CY1)/(ma-mb)
						var y=ma*(x-x2_new)+y2_new
					}
					else if(CoOrdinateX1==x2_new)
					{
						var x=x2_new
						var y=mb*(x-CX1)+CY1
					}
					else if(CX2==CX1)
					{
						var x=CX1
						var y=ma*(x-x2_new)+y2_new
					}
					return [x,y]
				}
				
				else{
					return 0;
				}
			}
				  
		
			 res4 = lineIntersect2(x2_new,y2_new,CoOrdinateX1,CoOrdinateY1,50,50,50,450);  // Left line
			
			 res5 = lineIntersect2(x2_new,y2_new,CoOrdinateX1,CoOrdinateY1,50,50,450,50);  // Top Line
			
			 res6 = lineIntersect2(x2_new,y2_new,CoOrdinateX1,CoOrdinateY1,450,50,450,450); // Right Line
			
			 res7 = lineIntersect2(x2_new,y2_new,CoOrdinateX1,CoOrdinateY1,50,450,450,450); // Bottom Line
			 
			 res41 = lineIntersect2(x2_new,y2_new,CoOrdinateX1,CoOrdinateY1,30,50,60,50);  // Top Left corner line
			
			 res51 = lineIntersect2(x2_new,y2_new,CoOrdinateX1,CoOrdinateY1,430,50,460,50);  // Top right corner Line
			
			 res61 = lineIntersect2(x2_new,y2_new,CoOrdinateX1,CoOrdinateY1,30,450,60,450); //Bottom Left corner Line
			
			 res71 = lineIntersect2(x2_new,y2_new,CoOrdinateX1,CoOrdinateY1,430,450,460,450); // Bottom Right corner Line
			
			if(res4 != 0){
				 x2_res = res4[0];
				 y2_res = res4[1];
			}
			else if(res5 != 0){
				 x2_res = res5[0];
				 y2_res = res5[1];
			}
			else if(res6 != 0){
				 x2_res = res6[0];
				 y2_res = res6[1];

			}
			else if(res7 != 0){
				 x2_res = res7[0];
				 y2_res = res7[1];
			}
			
			
			/*///////////////for Corner side///////////////////*/
			
			else if(res41 != 0){
				 x2_res = res41[0];
				 y2_res = res41[1];
			}
			else if(res51 != 0){
				 x2_res = res51[0];
				 y2_res = res51[1];
			}
			else if(res61 != 0){
				 x2_res = res61[0];
				 y2_res = res61[1];
			}
			else if(res71 != 0){
				 x2_res = res71[0];
				 y2_res = res71[1];
			}
			
			//alert(res41+" = "+res51+" = "+res61+" = "+res71)
			
		
		
		  
		  
		 $(".final_line").attr({"x1":CoOrdinateX1,"y1": CoOrdinateY1,"x2": x2_res,"y2": y2_res});
		 $(".final_line2").attr({"x1":CoOrdinateX2,"y1": CoOrdinateY2,"x2": x1_res,"y2": y1_res});
		 $(".final_line,.final_line2").show();
		
		
			if(lineDrawn2 == 1){
				if(count==2){
					$(".crcl").css({"pointer-events" : "none"});
					
				}
			}
			
			
			$(".resetLine1,.resetLine2").css({"pointer-events" : "auto"});
			
	
}


//////////////////////////////LineDraw for solution End//////////////////////////////////////////////////////////
 

///////////////////////////////////////LineDraw2 for solution Start//////////////////////////////////////////////		

window.LineDrawSol2 = function(){
			
			 lineDrawn2 = 1;
			
			differenceX_1 = CoOrdinateX_2 - CoOrdinateX_1;
			differenceY_1 = CoOrdinateY_2 - CoOrdinateY_1;
			
			
			x_1_new = CoOrdinateX_1 - (differenceX_1)*25;
			y_1_new = CoOrdinateY_1 - (differenceY_1)*25;
			
			x_2_new = CoOrdinateX_1 - (differenceX_1)*-25;
			y_2_new = CoOrdinateY_1 - (differenceY_1)*-25;
			
			
			 function lineIntersect3(x_1_new,y_1_new,CoOrdinateX_2,CoOrdinateY_2,bX1,bY1,bX2,bY2){
				
				var Va=((bX2-bX1)*(y_1_new-bY1) - (bY2-bY1) * (x_1_new-bX1) )/ ( (bY2-bY1)*(CoOrdinateX_2-x_1_new) - (bX2-bX1)*(CoOrdinateY_2-y_1_new))
				var Vb=((CoOrdinateX_2-x_1_new)*(y_1_new-bY1) - (CoOrdinateY_2-y_1_new)*(x_1_new-bX1))/( (bY2-bY1)*(CoOrdinateX_2-x_1_new) - (bX2-bX1)*(CoOrdinateY_2-y_1_new))			
							//alert(Va+" == "+Vb)
						
				if(Va>0 && Va<1 && Vb>0 && Vb<1)
				{
					var ma=(CoOrdinateY_2-y_1_new)/(CoOrdinateX_2-x_1_new)
					var mb=(bY2-bY1)/(bX2-bX1)
					if(CoOrdinateX_2!=x_1_new&&bX2!=bX1)
					{
						var x=(x_1_new*ma-y_1_new-bX1*mb+bY1)/(ma-mb)
						var y=ma*(x-x_1_new)+y_1_new
					}
					else if(CoOrdinateX_2==x_1_new)
					{
						var x=x_1_new
						var y=mb*(x-bX1)+bY1
					}
					else if(bX2==bX1)
					{
						var x=bX1
						var y=ma*(x-x_1_new)+y_1_new
					}
					return [x,y]
				}
				
				else{
					return 0;
				}
			}
				  
		
			 res_0 = lineIntersect3(x_1_new,y_1_new,CoOrdinateX_2,CoOrdinateY_2,50,50,50,450);  // Left line
			
			 res_1 = lineIntersect3(x_1_new,y_1_new,CoOrdinateX_2,CoOrdinateY_2,50,50,450,50);  // Top Line
			
			 res_2 = lineIntersect3(x_1_new,y_1_new,CoOrdinateX_2,CoOrdinateY_2,450,50,450,450); // Right Line
			
			 res_3 = lineIntersect3(x_1_new,y_1_new,CoOrdinateX_2,CoOrdinateY_2,50,450,450,450); // Bottom Line
			 
			 res_01 = lineIntersect3(x_1_new,y_1_new,CoOrdinateX_2,CoOrdinateY_2,30,50,60,50);  // Top Left corner line
			
			 res_11 = lineIntersect3(x_1_new,y_1_new,CoOrdinateX_2,CoOrdinateY_2,430,50,460,50);  // Top right corner Line
			
			 res_21 = lineIntersect3(x_1_new,y_1_new,CoOrdinateX_2,CoOrdinateY_2,30,450,60,450); //Bottom Left corner Line
			
			 res_31 = lineIntersect3(x_1_new,y_1_new,CoOrdinateX_2,CoOrdinateY_2,430,450,460,450); // Bottom Right corner Line
			
			if(res_0 != 0){
				 x_1_res = res_0[0];
				 y_1_res = res_0[1];
			}
			else if(res_1 != 0){
				 x_1_res = res_1[0];
				 y_1_res = res_1[1];
			}
			else if(res_2 != 0){
				 x_1_res = res_2[0];
				 y_1_res = res_2[1];
			}
			else if(res_3 != 0){
				 x_1_res = res_3[0];
				 y_1_res = res_3[1];
			}
			
			
			/*///////////////for Corner side///////////////////*/
			
			else if(res_01 != 0){
				 x_1_res = res_01[0];
				 y_1_res = res_01[1];
			}
			else if(res_11 != 0){
				 x_1_res = res_11[0];
				 y_1_res = res_11[1];
			}
			else if(res_21 != 0){
				 x_1_res = res_21[0];
				 y_1_res = res_21[1];
			}
			else if(res_31 != 0){
				 x_1_res = res_31[0];
				 y_1_res = res_31[1];
			}
			
			
			 //alert(res_01+" = "+res_11+" = "+res_21+" = "+res_31)
			
			
			 
			 function lineIntersect4(x_2_new,y_2_new,CoOrdinateX_1,CoOrdinateY_1,CX1,CY1,CX2,CY2){
				
				var Va=((CX2-CX1)*(y_2_new-CY1) - (CY2-CY1) * (x_2_new-CX1) )/ ( (CY2-CY1)*(CoOrdinateX_1-x_2_new) - (CX2-CX1)*(CoOrdinateY_1-y_2_new))
				var Vb=((CoOrdinateX_1-x_2_new)*(y_2_new-CY1) - (CoOrdinateY_1-y_2_new)*(x_2_new-CX1))/( (CY2-CY1)*(CoOrdinateX_1-x_2_new) - (CX2-CX1)*(CoOrdinateY_1-y_2_new))			
							//alert(Va+" == "+Vb)
						
				if(Va>0 && Va<1 && Vb>0 && Vb<1)
				{
				
					var ma=(CoOrdinateY_1-y_2_new)/(CoOrdinateX_1-x_2_new)
					var mb=(CY2-CY1)/(CX2-CX1)
					if(CoOrdinateX_1!=x_2_new&&CX2!=CX1) 
					{
						var x=(x_2_new*ma-y_2_new-CX1*mb+CY1)/(ma-mb)
						var y=ma*(x-x_2_new)+y_2_new
					}
					else if(CoOrdinateX_1==x_2_new)
					{
						var x=x_2_new
						var y=mb*(x-CX1)+CY1
					}
					else if(CX2==CX1)
					{
						var x=CX1
						var y=ma*(x-x_2_new)+y_2_new
					}
					return [x,y]
				}
				
				else{
					return 0;
				}
			}
				  
		
			 res_4 = lineIntersect4(x_2_new,y_2_new,CoOrdinateX_1,CoOrdinateY_1,50,50,50,450);  // Left line
			
			 res_5 = lineIntersect4(x_2_new,y_2_new,CoOrdinateX_1,CoOrdinateY_1,50,50,450,50);  // Top Line
			
			 res_6 = lineIntersect4(x_2_new,y_2_new,CoOrdinateX_1,CoOrdinateY_1,450,50,450,450); // Right Line
			
			 res_7 = lineIntersect4(x_2_new,y_2_new,CoOrdinateX_1,CoOrdinateY_1,50,450,450,450); // Bottom Line
			 
			 res_41 = lineIntersect4(x_2_new,y_2_new,CoOrdinateX_1,CoOrdinateY_1,30,50,60,50);  // Top Left corner line
			
			 res_51 = lineIntersect4(x_2_new,y_2_new,CoOrdinateX_1,CoOrdinateY_1,430,50,460,50);  // Top right corner Line
			
			 res_61 = lineIntersect4(x_2_new,y_2_new,CoOrdinateX_1,CoOrdinateY_1,30,450,60,450); //Bottom Left corner Line
			
			 res_71 = lineIntersect4(x_2_new,y_2_new,CoOrdinateX_1,CoOrdinateY_1,430,450,460,450); // Bottom Right corner Line
			 
			
			if(res_4 != 0){
				 x_2_res = res_4[0];
				 y_2_res = res_4[1];
			}
			else if(res_5 != 0){
				 x_2_res = res_5[0];
				 y_2_res = res_5[1];
			}
			else if(res_6 != 0){
				 x_2_res = res_6[0];
				 y_2_res = res_6[1];
			}
			else if(res_7 != 0){
				 x_2_res = res_7[0];
				 y_2_res = res_7[1];
			}
			
			/*///////////////for Corner side///////////////////*/
			
			else if(res_41 != 0){
				 x_2_res = res_41[0];
				 y_2_res = res_41[1];
			}
			else if(res_51 != 0){
				 x_2_res = res_51[0];
				 y_2_res = res_51[1];
			}
			else if(res_61 != 0){
				 x_2_res = res_61[0];
				 y_2_res = res_61[1];
			}
			else if(res_71 != 0){
				 x_2_res = res_71[0];
				 y_2_res = res_71[1];
			}
			
			//alert(res_41+" = "+res_51+" = "+res_61+" = "+res_71)
			
			
			
			$(".final_line3").attr({"x1":CoOrdinateX_1,"y1": CoOrdinateY_1,"x2": x_2_res,"y2": y_2_res});
			 $(".final_line4").attr({"x1":CoOrdinateX_2,"y1": CoOrdinateY_2,"x2": x_1_res,"y2": y_1_res});
			 $(".final_line3,.final_line4").show();
			
		  
		  
		   function Line1IntersectLine2(x1_res,y1_res,x2_res,y2_res,CX1,CY1,CX2,CY2){
				
				var Va=((CX2-CX1)*(y1_res-CY1) - (CY2-CY1) * (x1_res-CX1) )/ ( (CY2-CY1)*(x2_res-x1_res) - (CX2-CX1)*(y2_res-y1_res))
				var Vb=((x2_res-x1_res)*(y1_res-CY1) - (y2_res-y1_res)*(x1_res-CX1))/( (CY2-CY1)*(x2_res-x1_res) - (CX2-CX1)*(y2_res-y1_res))			
							//alert(Va+" == "+Vb)
						
				if(Va>0 && Va<1 && Vb>0 && Vb<1)
				{
				
					var ma=(y2_res-y1_res)/(x2_res-x1_res)
					var mb=(CY2-CY1)/(CX2-CX1)
					if(x2_res!=x1_res&&CX2!=CX1) 
					{
						var x=(x1_res*ma-y1_res-CX1*mb+CY1)/(ma-mb)
						var y=ma*(x-x1_res)+y1_res
					}
					else if(x2_res==x1_res)
					{
						var x=x1_res
						var y=mb*(x-CX1)+CY1
					}
					else if(CX2==CX1)
					{
						var x=CX1
						var y=ma*(x-x1_res)+y1_res
					}
					return [x,y]
				}
				
				else{
					return 0;
				}
			}
				  
		
			 LineIntersectPoint = Line1IntersectLine2(x1_res,y1_res,x2_res,y2_res,x_1_res,y_1_res,x_2_res,y_2_res); 
		  	 
			 LineIntersectPointX = LineIntersectPoint[0];
			 LineIntersectPointY = LineIntersectPoint[1];
			 
			 
			 $(".crcl").css("pointer-events", "none");
			 
			
}


///////////////////////////////////LineDraw For Solution End///////////////////////////////////



///////////////////////////////////Reset///////////////////////////////////////////////
	
	window.resetLine1 = function(){
		count=0;
		
		resetCount = 1;
		
		CoOrdinateX1=0;
		CoOrdinateX2=0;
		CoOrdinateY1=0;
		CoOrdinateY2=0;
		
		$(".txt1,.txt2,.txt3").css("display","none");
		$(".Wrng1,.Wrt1,.Wrng2,.Wrt2").css("opacity","0");
		$(".crcl").css("pointer-events", "auto");
		$(".done_btn").css({"pointer-events" : "auto"});
		$(".Done_con").hide();
		$(".crcl").hover(function(){
			$(".crcl").css("cursor" , "pointer");
		});
		
		$(".crcl2,.crcl3").css("opacity" , "0");
		$(".final_line,.final_line2,.crcle1,.crcle2,.interSectionPoint").css("display","none");
		
	}
	
	window.resetLine2 = function(){
		if(count==0){
			count = 0;
		}
		else{
			count = 2;
		}
		if(resetSolCountn==2){
			resetSolCountn=3;
		}
		
		CoOrdinateX_1=0;
		CoOrdinateX_2=0;
		CoOrdinateY_1=0;
		CoOrdinateY_2=0;
		
		
		$(".txt3,.txt4,.txt5").css("display","none");
		$(".Wrng1,.Wrt1,.Wrng2,.Wrt2").css("opacity","0");
		$(".crcl").css("pointer-events", "auto");
		$(".done_btn").css({"pointer-events" : "auto"});
		$(".Done_con").hide();
		$(".crcl").hover(function(){
			$(".crcl").css("cursor" , "pointer");
		});
		
		$(".crcl4,.crcl5").css("opacity" , "0");
		$(".final_line3,.final_line4,.crcle3,.crcle4,.interSectionPoint").css("display","none");
		
		
	}
	
	
	$(".resetLine1").click(function(){
		resetLine1();
	})
	
	$(".resetLine2").click(function(){
		resetLine2();
		lineDrawn2 = 0;
	})
	
////////////////////////////////////////////////////////////////////////////////////////
	
});
