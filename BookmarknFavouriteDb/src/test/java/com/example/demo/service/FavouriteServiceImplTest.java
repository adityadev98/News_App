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
import com.example.demo.exception.FavouriteAlreadyExistsException;
import com.example.demo.model.NewsBookmark;
import com.example.demo.model.NewsFavourite;
import com.example.demo.repository.BookmarkRepository;
import com.example.demo.repository.FavouriteRepository;

@RunWith(MockitoJUnitRunner.class)
public class FavouriteServiceImplTest {
	@Mock
	private FavouriteRepository favRepository;
	@InjectMocks
	private FavouriteServiceImpl service;
	NewsFavourite fav;
	Optional<NewsFavourite> optFav;
	@Before
	public void setUp() throws Exception {
		List<String> username =(List<String>) new ArrayList<String>() { 
            { 
                add("16BIT0066");  
            } 
        }; 
		fav = new NewsFavourite("abc","xyz","http:pwr.jpg","12-5-2020","aaaaa","http://abc.com",username);
		optFav = Optional.of(fav);
	}
	@After
	public void tearDown() throws Exception {
	}
	@Test(expected = FavouriteAlreadyExistsException.class)
	public void testAddBookFailure() throws FavouriteAlreadyExistsException {
		when(favRepository.findById(Mockito.anyString())).
				thenReturn(optFav);
		service.saveFav(fav);
		verify(favRepository).findById(Mockito.anyString());
	}
	@Test
	public void testAddFavSuccess() throws FavouriteAlreadyExistsException {
		// BookRepository repo = Mockito.mock(BookRepository.class);
		when(favRepository.findById(Mockito.anyString())).
					thenReturn(Optional.empty());
		when(favRepository.save(Mockito.any(NewsFavourite.class))).
					thenReturn(fav);
		NewsFavourite addedFav = service.saveFav(fav);
		assertEquals(fav.getTitle(), addedFav.getTitle());
		
		verify(favRepository).findById(Mockito.anyString());
		verify(favRepository).save(Mockito.any());
	}
}