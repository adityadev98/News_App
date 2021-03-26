package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.NewsBookmark;
import com.example.demo.repository.BookmarkRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/NewsBookmarks")
public class BookmarkController {
	static Optional<NewsBookmark> book;
	public BookmarkController() {
		// TODO Auto-generated constructor stub
	}

	@Autowired
	private BookmarkRepository repository;

	//Post
	//http://localhost:8081/NewsBookmarks/addNewsBookmarks
	@PostMapping("/addNewsBookmarks")
	public String addtoBookmark(@RequestBody NewsBookmark bookmark)
	{
		book=repository.findById(bookmark.getTitle());
		if(book.isPresent()==false) {
			repository.save(bookmark);
		}
		else {
			NewsBookmark bookMark = book.get();
			bookMark.getUserEmail().addAll(bookmark.getUserEmail());
			repository.save(bookMark);
		}
		System.out.println(bookmark);
		return "Added in Bookmarks";
	}
	//Get
	//http://localhost:8081/NewsBookmarks/getNewsBookmarks
	@GetMapping("/getNewsBookmarks")
	public List<NewsBookmark> getBookmark()
	{
		return repository.findAll();
	}
	
	//Delete
	//http://localhost:8081/NewsBookmarks/deleteBookmark
	@PostMapping("/deleteBookmark")
	public String deleteBookmark(@RequestBody NewsBookmark bookmark) {
		book=repository.findById(bookmark.getTitle());
		if(book.isPresent()==true) {
			NewsBookmark b = book.get();
			b.getUserEmail().removeAll(bookmark.getUserEmail());
			System.out.println("Bookmark Email: "+b.getUserEmail());
			System.out.println(b.getUserEmail().isEmpty());
			if(b.getUserEmail().isEmpty()) {
				repository.delete(b);
				return "Bookmark Deleted";
			}
			else {
				repository.save(b);
				return "Bookmark reduced by one";
			}
		}
		//System.out.println(bookmark);
		return "Deleted from Bookmarks";
		
	}
}
