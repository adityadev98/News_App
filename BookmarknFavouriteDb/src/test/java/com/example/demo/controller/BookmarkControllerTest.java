package com.example.demo.controller;

//import static org.mockito.Mockito.times;
//import static org.mockito.Mockito.verify;
//import static org.mockito.Mockito.verifyNoMoreInteractions;
//import static org.mockito.Mockito.when;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.junit.After;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.example.demo.exception.BookmarkNotFoundException;
//import com.example.demo.model.NewsBookmark;
//import com.example.demo.service.BookmarkService;

//@RunWith(SpringRunner.class)
//@WebMvcTest(controllers = BookmarkController.class)
public class BookmarkControllerTest {
//	//Sending request to controller
//	@Autowired
//	private MockMvc mockMvc;
//	@MockBean
//	private BookmarkService service;
//	private NewsBookmark book;
//	@Before
//	public void setUp() throws Exception {
//		List<String> email =(List<String>) new ArrayList<String>() { 
//            { 
//                add("srish.mahe@gmail.com");  
//            } 
//        }; 
//		book = new NewsBookmark("abc","xyz","http:pwr.jpg","12-5-2020","aaaaa","http://abc.com",email);
//	}
//	@After
//	public void tearDown() throws Exception {
//	}
//	@Test
//	public void testGetBookSuccess() throws Exception {
//		when(service.getBookmarkByTitle(Mockito.anyString())).
//				thenReturn(book);
//		
//		mockMvc.perform(get("/NewsBookmarks/getNewsBookmarks/'abc'"))
//				.andExpect(status().isOk())
//				.andDo(print());
//		
//		verify(service,times(1)).getBookmarkByTitle(Mockito.anyString());
//	
//	}
//	
//	@Test
//	public void testGetBookFailure() throws Exception {
//		
//		//When a call is given to service.getBook
//		when(service.getBookmarkByTitle(Mockito.anyString())).
//				thenThrow(BookmarkNotFoundException.class);
//		
//		mockMvc.perform(get("/NewsBookmarks/getNewsBookmarks/'abcd'"))
//				.andExpect(status().isConflict())
//				.andDo(print());
//		
//		verify(service).getBookmarkByTitle(Mockito.anyString());
//	
//	}
//	
//	@Test
//	public void testAddBookSuccess() throws Exception{
//		//setup the service mock
//		when(service.saveBook(Mockito.any(NewsBookmark.class))).thenReturn(book);
//		
//		//send a post request using mockMVC
//		String bookJson = new ObjectMapper().writeValueAsString(book);
//		
//		mockMvc.perform(post("/NewsBookmarks/addNewsBookmarks/'abcd'")
//						.contentType(MediaType.APPLICATION_JSON)
//						.content(bookJson))
//		.andExpect(status().isCreated());
//		
//		//verify mock has been called
//		verify(service).saveBook(Mockito.any(NewsBookmark.class));
//		verifyNoMoreInteractions(service);
//		
//	}
}
