i = 0;
rangeStatus = true;

setInterval(() => {
    document.getElementById("velgRange").value = i;
    document.getElementById("velgRange1").value = i;
    
    if (i == 255) {
        rangeStatus = false;
    } else if (i == 0) {
        rangeStatus = true;
    }
    
    if (rangeStatus == true) {
        i++
    } else {
        i--;
    }
    console.log(i);

}, 1);