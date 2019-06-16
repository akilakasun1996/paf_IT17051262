<% page import = "com.product.Item" %>
<% page import ="javax.sql. *" %>
<% page language="java" contentType ="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%
	Item item = new Item();
	String itemsGrid = "";
	String rudFeedBack = "";
	
	if(request.getParameter(hidMode) != null && request.getParameter("hidMode"). equalsIgnoreCase("save"))
	{
		rudFeedback = item.saveAnItem(request.getParameter("txtItemName"), request.getParameter("txtItemDesc"));
	}
	
	if(request.getParameter(hidMode) != null && request.getParameter("hidMode"). equalsIgnoreCase("update"))
	{
		rudFeedback = item.updateAnItem(request.getParameter("hidID"), request.getParameter("txtItemName")),
		request.getParameter("txtItemDesc"));

	}
	
	if(request.getParameter(hidMode) != null && request.getParameter("hidMode"). equalsIgnoreCase("remove"))
	{
		rudFeedback = item.deleteAnItem(request.getParameter("hidID"));

	}
	
	itemsGrid = item.getItems();
%>



<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<form id="formItems" action="items.jsp" method="post">
		<input id="hidMode" name="hidMode" type="hidden" value="save">
		<input id="hidID" name="hidID" type="hidden" value="0">
		Item Name <input id="txtItemName" type="text" name="txtItemName"> <br>
		Item Description <input id="txtItemDesc" type="text" name="txtItemDesc" > <br>
		<input id="btnSave" type="button" name="btnSave"  value="Save"> <br> <br>
		<div id="divStsMsgItem"><% out.println(rudFeedback); %> </div>
		<% out.println(itemsGrid); %> 
	</form> <br>
	
	
</body>
</html>