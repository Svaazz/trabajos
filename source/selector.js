function persona(){
	var i = document.getElementById("hep");
	var b = document.getElementById("hep1");
	var h = document.getElementById("hep2");
	var p = document.getElementById("pers");
	
	} else if (i.value < 30){
		p.innerHTML = "No vales pa na";
		return;

	} else if (i.value >= 90 && b.value >= 90 && h.value >= 90){
            p.innerHTML = "Todo";
            return;
        }
	if (i.value < 60 && i.value > 30){
		if (b.value < 60 && b.value > 30){
			if (h.value < 60 && h.value > 30){
				p.innerHTML = "Panadero, alba&ntilde;il, barrendero."
			}else{
				p.innerHTML = "Futbolista, securata."
			}
		
		}else{
			p.innerHTML = "Modelo, actor de anuncios."
		}
	}else{
		if (b.value > 60 && b.value < 90){
			if (h.value > 60 && h.value < 90){
				p.innerHTML = "Maestro de artes marciales, m&uacute;sico."
			}else{
				p.innerHTML = "Inform&aacute;tico, profesor."
			}
		
		}else{
			p.innerHTML = "Maestro de artes marciales, m&uacute;sico."
		}
	}
	
}				
