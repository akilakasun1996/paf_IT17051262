package com.product;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;



public class ProductDAO {

	Connection con = null;
	
	public ProductDAO(){
		
		String url = "jdbc:mysql://localhost:3306/restdb";
		String user = "root";
		String password = "";
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection(url, user, password);
		}catch(Exception e){
			System.out.println(e);
		}	
	}
	
	
	
	public List<Product> getProducts(){
		
		List<Product> products = new ArrayList<>();
		
		String sql = "select* from item";
		
		try {
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while (rs.next()) {
				Product a = new Product();
				a.setId(rs.getInt(1));
				a.setName(rs.getString(2));
				a.setDescription(rs.getString(3));
				a.setPrice(rs.getInt(4));

				products.add(a);
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		return products;		
	}
	
	
	
	public Product getProduct(int id) {
			
		Product a = new Product();
		
		String sql = "select* from item where id="+id;
		
		try {
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql);
			if(rs.next()) {
				
				a.setId(rs.getInt(1));
				a.setName(rs.getString(2));
				a.setDescription(rs.getString(3));
				a.setPrice(rs.getInt(4));
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		return a;
	}

	
	
	
	public void create(Product a1) {
		
		String sql = "insert into item values (?,?,?,?)";
		
		try {
			PreparedStatement st = con.prepareStatement(sql);
				
			st.setInt(1, a1.getId());
			st.setString(2, a1.getName());
			st.setString(3, a1.getDescription());
			st.setInt(4, a1.getPrice());
			
			st.executeUpdate();
			
		} catch (Exception e) {
			System.out.println(e);
		}	
	}
	
	
	
	public void update(Product a1) {
		
		String sql = "update item set name=?,description=?,price=? where id=?";
		
		try {
			PreparedStatement st = con.prepareStatement(sql);
				
			st.setString(1, a1.getName());
			st.setString(2, a1.getDescription());
			st.setInt(3, a1.getPrice());
			st.setInt(4, a1.getId());
			
			st.executeUpdate();
			
		} catch (Exception e) {
			System.out.println(e);
		}	
	}

	public void delete(int id) {
		
		String sql = "delete from item where id=?";
		
		try {
			PreparedStatement st = con.prepareStatement(sql);
			st.setInt(1, id);
			st.executeUpdate();
			
		} catch (Exception e) {
			System.out.println(e);
		}	
	}

	
}
