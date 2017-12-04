
   window.onload = loadEmployees;
   

    /*
    	@name loadEmployees
        @description loads initial list of employees on page load
        @params
        @returns dynamic table with initial list of employees
    */
	function loadEmployees()
	{
	  //build initial employee list
	   var employees = new Array();
           employees.push(["Suchi","Teegala","Female","suchi0215@gmail.com","918008333829","Active"]);
	 
      //Create a HTML Table element.
	    var table = document.getElementById("empTable");
	    table.border = "1";
 	   //Add the data rows.
    	for (var i = 0; i < employees.length; i++) 
	{
	        var row  = table.insertRow(-1);
        	for (var j = 0; j < 7; j++) 
		{
            		var cell = row.insertCell(-1);
                	if(j<6)
			{
        	    	cell.innerHTML = employees[i][j];
                        
                    	}
                	else
			{
	                  cell.innerHTML = "<input type='image' height='30' width='30' alt='info' src='Images/info.png' )>";
        	          cell.innerHTML = cell.innerHTML + "<input type='image' height='30' width='30' alt='edit' src= 'images/edit.png' onclick='edit(this);return false;'>";
                	  cell.innerHTML = cell.innerHTML + "<input type='image' src='images/delete.png' height='30' width='30'  onclick='removeRow(this);'>";
                	}
        	}
    	 
	}
	}

	
	function removeRow(src)
	{
	  /* src refers to the input button that was clicked.	*/			
        	var oRow = src.parentElement.parentElement;			
	        document.all("empTable").deleteRow(oRow.rowIndex);		
		alert("Employee record deleted sucessfully");
	}
  
    	 
	function edit(src)
	{
          var oRow = src.parentElement.parentElement;
          document.getElementById("txtfname").value = document.getElementById("empTable").rows[oRow.rowIndex].cells[0].innerHTML;
	  document.getElementById("txtlname").value = document.getElementById("empTable").rows[oRow.rowIndex].cells[1].innerHTML;
          document.getElementById("txtemail").value = document.getElementById("empTable").rows[oRow.rowIndex].cells[3].innerHTML;
          document.getElementById("txtphone").value = document.getElementById("empTable").rows[oRow.rowIndex].cells[4].innerHTML;
	  document.getElementById("txtfname").readOnly=true;
  	  document.getElementById("txtlname").readOnly=true;
          document.getElementById("btnsave").value = "Update"; 
            document.getElementById("btnsave").onclick = "Add('N')";
          ModalOpen();
	}

	function Update()
	{
	alert("update");
	}