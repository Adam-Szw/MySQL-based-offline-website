package co2201.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Player extends User {

	@Id
	private long id;
	private static long nextId = 0;
	
	private String Username;
	private String FName;
	private String LName;
	private String bio;
	private long phoneNumber;
	private String email;
	
	@OneToMany(mappedBy="scoringPlayer", fetch=FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
	private List<Score> scores;
	
	public Player()
	{
		this.id = Player.getNextId();
	}
	public Player(String Username, String FName, String LName)
	{
		this.id = Player.getNextId();
		this.Username = Username;
		this.FName = FName;
		this.LName = LName;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return Username;
	}
	public void setUsername(String Username) {
		this.Username = Username;
	}
	public String getFName() {
		return FName;
	}
	public void setFName(String fName) {
		FName = fName;
	}
	public String getLName() {
		return LName;
	}
	public void setLName(String lName) {
		LName = lName;
	}
	public List<Score> getScores() {
		return scores;
	}
	public void setScores(List<Score> scores) {
		this.scores = scores;
	}
	public static long getNextId() {
		return nextId++;
	}
	public String getBio() {
		return bio;
	}
	public void setBio(String bio) {
		this.bio = bio;
	}
	public long getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
}