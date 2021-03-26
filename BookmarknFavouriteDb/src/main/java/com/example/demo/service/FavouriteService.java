package com.example.demo.service;

import com.example.demo.exception.BookmarkAlreadyExistsException;
import com.example.demo.exception.BookmarkNotFoundException;
import com.example.demo.exception.FavouriteAlreadyExistsException;
import com.example.demo.exception.FavouriteNotFoundException;
import com.example.demo.model.NewsBookmark;
import com.example.demo.model.NewsFavourite;

public interface FavouriteService {
	public NewsFavourite saveFav(NewsFavourite b)
			throws FavouriteAlreadyExistsException;

	public NewsFavourite getBookmarkByTitle(String title) 
			throws FavouriteNotFoundException;
	
}