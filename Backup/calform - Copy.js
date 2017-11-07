 /*var pageConstant = 250;
 var baseCost = 300;*/
 
 var pageConstant = 0;
 var baseCost = 0;
 
 
 //var responsivePrice = 1000;
 
 var pageAmountPrices= new Array();
 pageAmountPrices['pageAmount1']= 1000;
 pageAmountPrices["pageAmount2"]= 2000;
 pageAmountPrices["pageAmount3"]= 3000;
 pageAmountPrices["pageAmount4"]= 4000;
 pageAmountPrices["pageAmount5"]= 5000;
 
 var customDesignPrices= new Array();
 customDesignPrices['customDesign0']= 0;
 customDesignPrices["customDesign1"]= 1500;
 customDesignPrices["customDesign2"]= 200;
 
 var platPrices = new Array();
 platPrices["duda"]=500;
 platPrices["concrete5"]=1500;
 platPrices["wordpress"]=3000;
 
 var ecPrices = new Array();
 ecPrices["ecommerce1"]=0;
 ecPrices["ecommerce2"]=1500; // 1750
 ecPrices["ecommerce3"]=2500; //3000

 var SEOOnePrice = 400;
 var SEOTwoPrice = 400;
 var SEOThreePrice = 300;
 
 var extraOnePrice = 100;
 var extraTwoPrice = 700;
 var extraThreePrice = 1000;
 var extraFourPrice = 50;
 var extraFivePrice = 200;
 
 var responsiveClicked = false;
 
 
 function IsNumeric(input)
{
    return (input - 0) == input && (''+input).replace(/^\s+|\s+$/g, "").length > 0;
}

 function getpageAmountPrices()
{
    var pageAmountTotalPrice=0;
    var theForm = document.forms["calForm"];
    var selectedAmount = theForm.elements["pageAmount"];
    pageAmountTotalPrice = pageAmountPrices[selectedAmount.value];

    //finally we return cakeFillingPrice
    return pageAmountTotalPrice;
}

 function getCustomDesignPrices()
{
    var customDesignTotalPrice=0;
    var theForm = document.forms["calForm"];
    var selectedDesign = theForm.elements["customDesign"];
    customDesignTotalPrice = customDesignPrices[selectedDesign.value];

    //finally we return cakeFillingPrice
    return customDesignTotalPrice;
}

function getPlatPrices()
{  
    var platTotalPrice=0;
    var theForm = document.forms["calForm"];
    var selectedPlat = theForm.elements["question0"];
    for(var i = 0; i < selectedPlat.length; i++)
    {
        if(selectedPlat[i].checked)
        {
            platTotalPrice = platPrices[selectedPlat[i].value];
            break;
        }
    }
    return platTotalPrice;
}

function getECPrices()
{  
    var ecTotalPrice=0;
    var theForm = document.forms["calForm"];
    var selectedEC = theForm.elements["question1"];
    for(var i = 0; i < selectedEC.length; i++)
    {
        if(selectedEC[i].checked)
        {
            ecTotalPrice = ecPrices[selectedEC[i].value];
            break;
        }
    }
    return ecTotalPrice;
}
function getSEO1Price() {
    var seo1Price = 0;
    var theForm = document.forms["calForm"];
    var includeSEO1 = theForm.elements["seo1"];
  
    if (includeSEO1.checked) {
        seo1Price = SEOOnePrice;
    }
    return seo1Price;
}

function getSEO2Price() {
    var seo2Price = 0;
    var theForm = document.forms["calForm"];
    var includeSEO2 = theForm.elements["seo2"];
  
    if (includeSEO2.checked) {
        seo2Price = SEOTwoPrice;
    }
    return seo2Price;
}

function getSEO3Price() {
    var seo3Price = 0;
    var theForm = document.forms["calForm"];
    var includeSEO3 = theForm.elements["seo3"];
  
    if (includeSEO3.checked) {
        seo3Price = SEOThreePrice;
    }
    return seo3Price;
}

function getExtra1Price() {
    var extra1Price = 0;
    var theForm = document.forms["calForm"];
    var includeExtra1 = theForm.elements["extra1"];
  
    if (includeExtra1.checked) {
        extra1Price = extraOnePrice;
    }
    return extra1Price;
}

function getExtra2Price() {
    var extra2Price = 0;
    var theForm = document.forms["calForm"];
    var includeExtra2 = theForm.elements["extra2"];
  
    if (includeExtra2.checked) {
        extra2Price = extraTwoPrice;
    }
    return extra2Price;
}

function getExtra3Price() {
    var extra3Price = 0;
    var theForm = document.forms["calForm"];
    var includeExtra3 = theForm.elements["extra3"];
  
    if (includeExtra3.checked) {
        extra3Price = extraThreePrice;
    }
    return extra3Price;
}

function getExtra4Price() {
    var extra4Price = 0;
    var theForm = document.forms["calForm"];
    var includeExtra4 = theForm.elements["extra4"];
  
    if (includeExtra4.checked) {
        extra4Price = extraFourPrice;
    }
    return extra4Price;
}

function getExtra5Price() {
    var extra5Price = 0;
    var theForm = document.forms["calForm"];
    var includeExtra5 = theForm.elements["extra5"];
  
    if (includeExtra5.checked) {
        extra5Price = extraFivePrice;
    }
    return extra5Price;
}


function calculateTotal() {
	var grandTotal = baseCost + getCustomDesignPrices() + getpageAmountPrices() + getPlatPrices() + getECPrices() + getSEO1Price() + getSEO2Price() + getSEO3Price() + getExtra1Price() + getExtra2Price() + getExtra3Price() + getExtra4Price() + getExtra5Price();
    var divobj = document.getElementById('total');
    divobj.style.display = 'block';
	
	
    divobj.innerHTML = "$"+grandTotal*.75 + " to " + "$"+grandTotal;

}

window.onload = function() {
	var startTotal = baseCost + pageConstant + customDesignPrices["customDesign1"];
	startTotal = baseCost + getwebsitePagePrices() + getCustomDesignPrices() + getpageAmountPrices() + getPlatPrices() + getECPrices() + getSEO1Price() + getSEO2Price() + getSEO3Price() + getExtra1Price() + getExtra2Price() + getExtra3Price() + getExtra4Price() + getExtra5Price();
	
	
    var divobj = document.getElementById('total');
    divobj.style.display = 'block';
    divobj.innerHTML = "$"+(startTotal*.5) + " to " +"$"+startTotal;
};