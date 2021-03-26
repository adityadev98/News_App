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
import com.example.demo.model.NewsFavourite;
import com.example.demo.repository.BookmarkRepository;
import com.example.demo.repository.FavouriteRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/newsFavourite")
public class FavouriteController {
	static Optional<NewsFavourite> fav;
	public FavouriteController() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	private FavouriteRepository repository;

	//Post
	//http://localhost:8081/newsFavourite/addnewsFavourite
	@PostMapping("/addnewsFavourite")
	public String addtoFavourite(@RequestBody NewsFavourite favourite)
	{
		//count=repository.findAll().size()+1;
		//bookmark.setId(count);
		//fav=repository.findById(null)
		fav=repository.findById(favourite.getTitle());
		if(fav.isPresent()==false) {
			repository.save(favourite);
		}else {
			NewsFavourite favouriteN = fav.get();
			//favouriteN.getUsername().addAll(favourite.getUsername());
			favouriteN.getUsername().addAll(favourite.getUsername());

			repository.save(favouriteN);
		}
		System.out.println(favourite);
		return "Added in favourites";
	}
	
	//Get
	//http://localhost:8081/newsFavourite/getnewsFavourite	
	@GetMapping("/getnewsFavourite")
	public List<NewsFavourite> getFavourite(String username)
	{
		return repository.findAll();
	}
	
	@PostMapping("/deleteFavourite")
	public String deleteFavourite(@RequestBody NewsFavourite favourite) {
		fav=repository.findById(favourite.getTitle());
		if(fav.isPresent()==true) {
			NewsFavourite f = fav.get();
			f.getUsername().removeAll(favourite.getUsername());
			System.out.println("Bookmark Email: "+f.getUsername());
			System.out.println(f.getUsername().isEmpty());
			if(f.getUsername().isEmpty()) {
				repository.delete(f);
				return "Favourite Deleted";
			}
			else {
				repository.save(f);
				return "Favourite reduced by one";
			}
		}
		//System.out.println(bookmark);
		return "Deleted from Favourites";
	}
}
