package co2201.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class StaffMember extends User {

	@Id
	private long id;
	private static long nextId = 0;
	
	private long StaffIDNumber;
	
	private String Username;
	private String FName;
	private String LName;
	private String bio;
	private long phoneNumber;
	private String email;
	
	public StaffMember()
	{
		this.id = StaffMember.getNextId();
	}
	public StaffMember(String Username, String FName, String LName)
	{
		this.id = StaffMember.getNextId();
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
	public long getStaffIDNumber() {
		return StaffIDNumber;
	}
	public void setStaffIDNumber(long staffIDNumber) {
		StaffIDNumber = staffIDNumber;
	}
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
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
	public static long getNextId() {
		return nextId++;
	}
	
	
}
