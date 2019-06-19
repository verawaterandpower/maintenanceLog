//import {wellEquipment,chlorinatorEquipment} from './equipmentType.js';

$(document).ready(function(){

    $("#wellHouseTab").click(function(){
        console.log("Wellhouse Clicked")

        $("#WellHouseEquipment").show();
        $("#chlorinatorEquipment").hide();
    });
    $("#chlorinatorTab").click(function(){
        console.log("Chlorinator clicked")
        $("#WellHouseEquipment").hide();
        $("#chlorinatorEquipment").show();
    });
    $("#addWellEquip").click(function(){
        $("#wellEquipForm").modal('show');
    });
    function accordianToggle(targetID, collapseID){
        $(collapseID).toggle();
        $(targetID).toggle();
    }
});