package com.example.demo.service;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import com.example.demo.exception.BookmarkAlreadyExistsException;
import com.example.demo.model.NewsBookmark;
import com.example.demo.repository.BookmarkRepository;

@RunWith(MockitoJUnitRunner.class)
public class BookmarkServiceImplTest {
	@Mock
	private BookmarkRepository bookRepository;
	@InjectMocks
	private BookmarkServiceImpl service;
	NewsBookmark book;
	Optional<NewsBookmark> optBook;
	@Before
	public void setUp() throws Exception {
		List<String> email =(List<String>) new ArrayList<String>() { 
            { 
                add("srish.mahe@gmail.com");  
            } 
        }; 
		book = new NewsBookmark("abc","xyz","http:pwr.jpg","12-5-2020","aaaaa","http://abc.com",email);
		optBook = Optional.of(book);
	}
	@After
	public void tearDown() throws Exception {
	}
	@Test(expected = BookmarkAlreadyExistsException.class)
	public void testAddBookFailure() throws BookmarkAlreadyExistsException {
		when(bookRepository.findById(Mockito.anyString())).
				thenReturn(optBook);
		service.saveBook(book);
		verify(bookRepository).findById(Mockito.anyString());
	}
	@Test
	public void testAddBookSuccess() throws BookmarkAlreadyExistsException {
		// BookRepository repo = Mockito.mock(BookRepository.class);
		when(bookRepository.findById(Mockito.anyString())).
					thenReturn(Optional.empty());
		when(bookRepository.save(Mockito.any(NewsBookmark.class))).
					thenReturn(book);
		NewsBookmark addedBook = service.saveBook(book);
		assertEquals(book.getTitle(), addedBook.getTitle());
		
		verify(bookRepository).findById(Mockito.anyString());
		verify(bookRepository).save(Mockito.any());
	}
}