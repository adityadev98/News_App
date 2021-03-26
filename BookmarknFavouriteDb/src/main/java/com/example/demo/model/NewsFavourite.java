package com.example.demo.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection= "NewsFavouriteDb2")
public class NewsFavourite {
	@Id
	private String title;
	private String author;
	private String urlToImage;
	private String publishedAt;
	private String description;
	private String url;
	private List<String> username;
	
	public NewsFavourite() {}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getUrlToImage() {
		return urlToImage;
	}

	public void setUrlToImage(String urlToImage) {
		this.urlToImage = urlToImage;
	}

	public String getPublishedAt() {
		return publishedAt;
	}

	public void setPublishedAt(String publishedAt) {
		this.publishedAt = publishedAt;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public List<String> getUsername() {
		return username;
	}

	public void setUsername(List<String> username) {
		this.username = username;
	}

	public NewsFavourite(String title, String author, String urlToImage, String publishedAt, String description,
			String url, List<String> username) {
		super();
		this.title = title;
		this.author = author;
		this.urlToImage = urlToImage;
		this.publishedAt = publishedAt;
		this.description = description;
		this.url = url;
		this.username = username;
	}

	@Override
	public String toString() {
		return "NewsFavourite [title=" + title + ", author=" + author + ", urlToImage=" + urlToImage
				+ ", publishedAt=" + publishedAt + ", description=" + description + ", url=" + url + ", username="
				+ username + "]";
	}
	
}
