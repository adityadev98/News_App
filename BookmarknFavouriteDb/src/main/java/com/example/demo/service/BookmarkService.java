package com.example.demo.service;

import com.example.demo.exception.BookmarkAlreadyExistsException;
import com.example.demo.exception.BookmarkNotFoundException;
import com.example.demo.model.NewsBookmark;

public interface BookmarkService {
	public NewsBookmark saveBook(NewsBookmark b)
			throws BookmarkAlreadyExistsException;

	public NewsBookmark getBookmarkByTitle(String title) 
			throws BookmarkNotFoundException;
	
}
