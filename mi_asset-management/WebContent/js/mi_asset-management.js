var iter;
function getrequest(){
	
var name1,name2,name3;
$.ajax({
	type:"GET",
	url:"http://localhost:8080/mi_asset-management/rest/assets",
	cache:false,
	dataType:"xml",
	success:function(xml){
		$(xml).find('assets_infoes').each(function(){
			$(this).find("Assets_info").each(function(){
				//console.log(asset_info[0].find("_asset_number"));
				$(this).find("_asset_number").each(function(){
					 name1=$(this).text();
				//	console.log(name1);

				});
 
				$(this).find("_mobile_ID").each(function(){
					 name2=$(this).text();
				//	console.log(name2);

				});

				$(this).find("_color").each(function(){
					 name3=$(this).text();
					//console.log(name3);

				});


          $("#fill").append('<tr><td>'+name1+'</td>+<td>'+name2+'</td>+<td>'+name3+'</td></tr>')
            name2=name3=name1=" ";


			});
			
		});
	}
});
}

		
		/*

		success:function(xml){
			var columns=['_asset_number','_mobile_ID','_color'];
			var values = new values(columns.length); //creating a array of column length
			$(xml).find('assets_infoes').each(function(){
			$(this).find("Assets_info").each(function(){
                var length_value=columns.length;
				for(i=0;i<length_value;i++)
				{
					$(this).find(columns[i]).each(function(){
						values[i]=$(this).text();
					});

					$("#fill").append('<tr><td>'+values[i]+'</td></tr>');
				}
				values.fill(" ");
				



		}

	}
})*/




/*	 code generated by postman


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:8080/mi_asset-management/rest/assets",
  "dataType":"xml",
  "method": "GET",
  "headers": {
   // "cache-control": "no-cache",
   // "postman-token": "3da342c4-f4f7-3b51-cd02-0f17f8279637"
  } 
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
*/

//$(document).ready(function(){
	
function delete_request(){
//	alert("inside"); 
var table = $('#fill');
iter=0;
 
//alert("heck1")
	

 table.find('tr').each(function(){
 	var trow=$(this);
 //	alert(iter);
 	
 		trow.append('<td><input type="checkbox" name="cb'+iter+'"/></td>');
 	iter+=1;
 });

 checkbox_checked_event_catch();
 

//alert("outside");

//});
}


/*sample code
if(cb0.checked){
	for(i=0;i<=iter;i++)
	{
	   ('ch'+i).checked=true;  
	}
}

*/

function checkbox_checked_event_catch(){
	while(true)
	{
		
	}
}