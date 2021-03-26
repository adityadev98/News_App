package com.example.demo.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection= "NewsBookmarkDatabase3")
public class NewsBookmark {

	@Id
	private String title;
	private String author;
	private String urlToImage;
	private String publishedAt;
	private String description;
	private String url;
	private List<String> userEmail;
	
	public NewsBookmark() {
		// TODO Auto-generated constructor stub
	}

	public NewsBookmark(String title, String author, String urlToImage, String publishedAt, String description,
			String url, List<String> userEmail) {
		super();
		this.title = title;
		this.author = author;
		this.urlToImage = urlToImage;
		this.publishedAt = publishedAt;
		this.description = description;
		this.url = url;
		this.userEmail = userEmail;
	}


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

	public List<String> getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(List<String> userEmail) {
		this.userEmail = userEmail;
	}

	@Override
	public String toString() {
		return "NewsBookmark [ title=" + title + ", author=" + author + ", urlToImage=" + urlToImage
				+ ", publishedAt=" + publishedAt + ", description=" + description + ", url=" + url + ", userEmail="
				+ userEmail + "]";
	}

	
}
