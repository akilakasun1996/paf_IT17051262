package com.product;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("products")
public class ProductResourse{
	
	ProductDAO dao = new ProductDAO();
	
	@GET
	@Produces({MediaType.APPLICATION_XML,MediaType.APPLICATION_JSON})
	public List<Product> getProducts() {
					
		return dao.getProducts();
	}
	
	
	@GET
	@Path("product/{id}")
	@Produces({MediaType.APPLICATION_XML,MediaType.APPLICATION_JSON})
	public Product getProduct(@PathParam("id") int id) {
					
		return dao.getProduct(id);
	}

	
	@POST
	@Path("product")
	@Consumes({MediaType.APPLICATION_XML,MediaType.APPLICATION_JSON})
	public String createProduct(Product a1) {

		Product a = dao.getProduct(a1.getId());
		
		if(a.getId()==0) {
			dao.create(a1);		
			return "Successfully added the product";
		}else {
			return "Product is allready exist";
		}
	}
	
	
	@PUT
	@Path("product")
	@Consumes({MediaType.APPLICATION_XML,MediaType.APPLICATION_JSON})
	public String updateProduct(Product a1) {
		
		Product a = dao.getProduct(a1.getId());
		
		if(a.getId()==0) {
			return "Product is not exist";
		}else {
			dao.update(a1);
			return "Successfully updated";
		}
	}
	
	
	@DELETE
	@Path("product/{id}")
	public String deleteProduct(@PathParam("id") int id) {
		
		Product a = dao.getProduct(id);
		
		if(a.getId()==0) {
			return "Product is not exist";
		}else {
			dao.delete(id);
			return "Successfully deleted";
		}
		
	}
}
