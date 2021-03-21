package co2201.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class SystemUser {
	
	@Id
	private long id;
	private static long nextId = 0;
	
	private String username;
	private String FName;
	private String LName;
	private String bio;
	private long phoneNumber;
	private String email;
	
	private Boolean admin = false;	//admins have access to special functionalities and can give/revoke staff privilige to users
	private Boolean staff = false;	//staff have access to special functionalities
									//if both false then default player
	
	private String password;
	
	@OneToMany(mappedBy="scoringPlayer", fetch=FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
	private List<Score> scores;
	
	public SystemUser()
	{
		this.id = getNextId();
	}
	public SystemUser(String Username, String FName, String LName)
	{
		this.id = getNextId();
		this.username = Username;
		this.FName = FName;
		this.LName = LName;
	}
	public SystemUser(String Username, String FName, String LName, String bio, long phoneNumber, String email)
	{
		this.id = getNextId();
		this.username = Username;
		this.FName = FName;
		this.LName = LName;
		this.bio = bio;
		this.phoneNumber = phoneNumber;
		this.email = email;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String Username) {
		this.username = Username;
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
	public Boolean getAdmin() {
		return admin;
	}
	public void setAdmin(Boolean admin) {
		this.admin = admin;
	}
	public Boolean getStaff() {
		return staff;
	}
	public void setStaff(Boolean staff) {
		this.staff = staff;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
