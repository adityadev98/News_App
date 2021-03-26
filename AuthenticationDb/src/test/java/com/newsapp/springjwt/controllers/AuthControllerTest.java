package com.newsapp.springjwt.controllers;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.newsapp.springjwt.models.User;
import com.newsapp.springjwt.security.services.UserDetailsImpl;
import com.newsapp.springjwt.security.services.UserDetailsServiceImpl;
//import com.example.demo.exception.BookNotFoundException;
//import com.example.demo.model.Author;
//import com.example.demo.model.Book;
//import com.example.demo.service.BookService;
@RunWith(SpringRunner.class)
@WebMvcTest(controllers = AuthController.class)
public class AuthControllerTest {
	//Sending request to controller
	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private UserDetailsServiceImpl service;
	private User user;
	private UserDetailsImpl userdetails;
	@Before
	public void setUp() throws Exception {
		user = new User("16BIT0066","aditya.dev@ibm.com","root123");
		userdetails=UserDetailsImpl.build(user);
	}
	@After
	public void tearDown() throws Exception {
	}
	@Test
	public void testGetUserSuccess() throws Exception {
		when(service.loadUserByUsername(Mockito.anyString())).
				thenReturn(userdetails);
		
		mockMvc.perform(post("/api/auth/signup"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.name", is("Testing with Mockito")))
				.andDo(print());
		
		verify(service,times(1)).loadUserByUsername(Mockito.anyString());
	
	}
	
	@Test
	public void testGetUserFailure() throws Exception {
		//When a call is given to service.getBook
		when(service.loadUserByUsername(Mockito.anyString())).
				thenThrow(UsernameNotFoundException.class);
		
		mockMvc.perform(post("/api/auth/signup"))
				.andExpect(status().isConflict())
				.andDo(print());
		
		verify(service).loadUserByUsername(Mockito.anyString());
	}
	
//	@Test
//	public void testAddBookSuccess() throws Exception{
//		//setup the service mock
//		when(service.saveBook(Mockito.any(User.class))).thenReturn(user);
//		
//		//send a post request using mockMVC
//		String bookJson = new ObjectMapper().writeValueAsString(user);
//		
//		mockMvc.perform(post("/books/saveBook")
//						.contentType(MediaType.APPLICATION_JSON)
//						.content(bookJson))
//		.andExpect(status().isCreated());
//		
//		//verify mock has been called
//		verify(service).saveBook(Mockito.any(Book.class));
//		verifyNoMoreInteractions(service);
//		
//	}
}
