package com.example.demo.service;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.exception.BookmarkAlreadyExistsException;
import com.example.demo.exception.BookmarkNotFoundException;
import com.example.demo.model.NewsBookmark;
import com.example.demo.repository.BookmarkRepository;
@Service
public class BookmarkServiceImpl implements BookmarkService {
	@Autowired
	private BookmarkRepository bp;
	
	@Override
	public NewsBookmark saveBook(NewsBookmark b)
			throws BookmarkAlreadyExistsException {
		Optional<NewsBookmark> o = bp.findById(b.getTitle());
	if(o.isPresent())
		throw new
			BookmarkAlreadyExistsException("Bookmark title already exists");
	  NewsBookmark bk = bp.save(b);
		return bk;
	}
	@Override
	public NewsBookmark getBookmarkByTitle(String title)
			throws BookmarkNotFoundException {
		Optional<NewsBookmark> o = bp.findById(title);
		NewsBookmark b = null;
	if(o.isPresent())
			b = o.get();
	else
		throw new
			BookmarkNotFoundException("title does not exists");
	
	  return b;
	}
}