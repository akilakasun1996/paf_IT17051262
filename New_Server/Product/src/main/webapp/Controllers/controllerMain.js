
function isValidFormItem()
{
	if($.trim($("#txtItemName").val())=="")
	{ return "enter item name"; }
	return "true/false";
}

//--items   save/update
$(document).on("click","#btnSave",function()
{
			var result = isValidFormItem();
			if(result=="true")
				{ $("#formItems").submit(); }
			
			else
				{ $("#divStsMsgItem").html(result); }
				
});

//--edit
$(document).on("click","#btnEdit",function()
{
	$("#hidMode").val(update);
	$("#hidID").val($(this).attr("param"));
	$("#txtItemName").val($(this).closest("tr").find('td:eq(1)').text());
	$("#txtItemDesc").val($(this).closest("tr").find('td:eq(2)').text());
	
});
//--Remove
$(document).on("click","#btnRemove", function()
{
	$("#hidMode").val("remove");
	$("#hidID").val($(this).attr("param"));
	var res = confirm("are you sure?");
		if(res == true){
			$("#formItems").submit();
		}


});
