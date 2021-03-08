package co2201.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Player {

	@Id
	private long id;
	private static long nextId = 0;
	
	private String Nickname;
	private String FName;
	private String LName;
	
	@OneToMany(mappedBy="scoringPlayer", fetch=FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
	private List<Score> scores;
	
	public Player()
	{
		this.id = Player.getNextId();
	}
	public Player(String Nickname, String FName, String LName)
	{
		this.id = Player.getNextId();
		this.Nickname = Nickname;
		this.FName = FName;
		this.LName = LName;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNickname() {
		return Nickname;
	}
	public void setNickname(String nickname) {
		Nickname = nickname;
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
	
}