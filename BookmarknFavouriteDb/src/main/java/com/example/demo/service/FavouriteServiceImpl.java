package com.example.demo.service;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.exception.BookmarkAlreadyExistsException;
import com.example.demo.exception.BookmarkNotFoundException;
import com.example.demo.exception.FavouriteAlreadyExistsException;
import com.example.demo.exception.FavouriteNotFoundException;
import com.example.demo.model.NewsBookmark;
import com.example.demo.model.NewsFavourite;
import com.example.demo.repository.BookmarkRepository;
import com.example.demo.repository.FavouriteRepository;
@Service
public class FavouriteServiceImpl implements FavouriteService {
	@Autowired
	private FavouriteRepository bp;
	
	@Override
	public NewsFavourite saveFav(NewsFavourite b)
			throws FavouriteAlreadyExistsException {
		Optional<NewsFavourite> o = bp.findById(b.getTitle());
	if(o.isPresent())
		throw new
			FavouriteAlreadyExistsException("Favourite title already exists");
	  NewsFavourite bk = bp.save(b);
		return bk;
	}
	@Override
	public NewsFavourite getBookmarkByTitle(String title)
			throws FavouriteNotFoundException {
		Optional<NewsFavourite> o = bp.findById(title);
		NewsFavourite b = null;
	if(o.isPresent())
			b = o.get();
	else
		throw new
			FavouriteNotFoundException ("title does not exists");
	
	  return b;
	}
}