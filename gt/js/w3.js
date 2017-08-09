function getSpitzenvolumenstrom(LUsumme, LUgroesster, Dauerverbraucher) {
    var xF1 = 0.459;
    var xF2 = 0.598;

    var xF3 = 0.353;
    var xF4 = 0.257;

    if(LUsumme == 0 || LUgroesster == 0){
        return 0;
        
    }else if(LUsumme > 0 && LUsumme < 4) {
        return LUsumme/10;
    
    }else if (LUsumme == 4) {
        return Math.pow((LUsumme / 10),xF3) * xF1;
        
    }else if (LUsumme == 5) {
        if(LUgroesster > 0 && LUgroesster < 4) {
            return Math.pow((LUsumme / 10),xF3) * xF1;
        }else if (LUgroesster == 5){
            return LUsumme / 10;
        }
        
    }else if (LUsumme > 5 && LUsumme < 150) {
        if(LUgroesster > 0 && LUgroesster < 4) {
            return Math.pow((LUsumme / 10),xF3) * xF1;
        }else if (LUgroesster == 5) {
            return Math.pow((LUsumme / 10),xF4) * xF2;
        }
        
    }else if (LUsumme > 149 && LUsumme < 3001) {
        return Math.pow((LUsumme / 10),xF3) * xF1;
    
    }else{
        return false;
    }
}