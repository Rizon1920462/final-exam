function calculateincentive() {
    var name =document.getElementById("nameField").value;
    var age =document.getElementById("age").value;
    var bill =document.getElementById("Monthly Internet Bill").value;
    var device  =document.getElementById("device fees").value; 
    let name = "ABC Khan";
    let age = "65";
    let yearlyFees= "15000";
    let discount = "20%";


    if(a.value > 50 && y.value> 20000){
        incentiveAmount.innerText =  "Incentive amount "+ ((y.value * 20) / 100.00) * 12;
        return
      }else if(a.value > 30 && (y.value / 12) > 250){
        incentiveAmount.innerText =  "Incentive amount "+ ((y.value * 15) / 100.00) * 12;
        return
      }
      incentiveAmount.innerText = "No incentive"
    


}