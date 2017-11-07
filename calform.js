 
 var Q1Option = new Array();
 Q1Option["q1a1"] = 1;
 Q1Option["q1a2"] = 0;

 var Q2Option = new Array();
 Q2Option["q2a1"] = 1;
 Q2Option["q2a2"] = 0;

 var Q3Option = new Array();
 Q3Option["q3a1"] = 1;
 Q3Option["q3a2"] = 0;

 var Q4Option = new Array();
 Q4Option["q4a1"] = 1;
 Q4Option["q4a2"] = 0;
 
 
 function IsNumeric(input)
{
    return (input - 0) == input && (''+input).replace(/^\s+|\s+$/g, "").length > 0;
}

function getQ1Answer()
{  
    var Q1Answer = 0;
    var theForm = document.forms["calForm"];
    var selectedQ1 = theForm.elements["question1"];
    for(var i = 0; i < selectedQ1.length; i++)
    {
        if(selectedQ1[i].checked)
        {
            Q1Answer = Q1Option[selectedQ1[i].value];
            break;
        }
    }
    return Q1Answer;
}

function getQ2Answer()
{  
    var Q2Answer = 0;
    var theForm = document.forms["calForm"];
    var selectedQ2 = theForm.elements["question2"];
    for(var i = 0; i < selectedQ2.length; i++)
    {
        if(selectedQ2[i].checked)
        {
            Q2Answer = Q2Option[selectedQ2[i].value];
            break;
        }
    }
    return Q2Answer;
}

function getQ3Answer()
{  
    var Q3Answer = 0;
    var theForm = document.forms["calForm"];
    var selectedQ3 = theForm.elements["question3"];
    for(var i = 0; i < selectedQ3.length; i++)
    {
        if(selectedQ3[i].checked)
        {
            Q3Answer = Q3Option[selectedQ3[i].value];
            break;
        }
    }
    return Q3Answer;
}

function getQ4Answer()
{  
    var Q4Answer = 0;
    var theForm = document.forms["calForm"];
    var selectedQ4 = theForm.elements["question4"];
    for(var i = 0; i < selectedQ4.length; i++)
    {
        if(selectedQ4[i].checked)
        {
            Q4Answer = Q4Option[selectedQ4[i].value];
            break;
        }
    }
    return Q4Answer;
}



function calculateTotal() {
	var grandTotal = getQ1Answer() + getQ2Answer() + getQ3Answer() + getQ4Answer();
    var divobj = document.getElementById('total');
    var clientRating = "0";
    divobj.style.display = 'block';
	
    if(grandTotal == 4) 
        {
            clientRating = "A";
        }
    else 
        if(grandTotal == 3) 
            {
                clientRating = "B";
            }
    else 
        if(grandTotal == 2) 
            {
                clientRating = "C";
            }
    else 
        if(grandTotal == 1) 
            {
                clientRating = "D";
            }
    else 
        if(grandTotal == 0) 
            {
                clientRating = "F";
            }
	
    divobj.innerHTML =   clientRating;

}