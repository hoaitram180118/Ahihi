// JavaScript Document
function layngayhienhanh(){
		var d=new Date()
		var thu=d.getDay()
			if(thu==0){ thu="chúa nhật"}
			if(thu==1){ thu="Thứ hai"}
			if(thu==2){ thu="Thứ ba"}
			if(thu==3){ thu="Thứ tư"}
			if(thu==4){ thu="Thứ năm"}
			if(thu==5){ thu="Thứ sáu"}
			if(thu==6){ thu="Thứ bảy"}
		var ngay=d.getDate()
		var thang=d.getMonth()+1
		var nam=d.getFullYear()	
		
document.getElementById("ngayThangNam").innerHTML
	=thu+", "+ngay+"/"+thang+"/"+nam
		
	}