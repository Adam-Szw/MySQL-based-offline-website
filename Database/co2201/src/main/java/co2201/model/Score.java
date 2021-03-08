package co2201.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Score {

	@Id
	private long id;
	private static long nextId = 0;
	
	private String gameName;
	private float score;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="Score_Owner_ID")
	private Player scoringPlayer;
	
	public Score() 
	{
		this.id = Score.getNextId();
	}
	public Score(String gameName, float score)
	{
		this.id = Score.getNextId();
		this.gameName = gameName;
		this.score = score;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getGameName() {
		return gameName;
	}
	public void setGameName(String gameName) {
		this.gameName = gameName;
	}
	public float getScore() {
		return score;
	}
	public void setScore(float score) {
		this.score = score;
	}
	public Player getScoringPlayer() {
		return scoringPlayer;
	}
	public void setScoringPlayer(Player scoringPlayer) {
		this.scoringPlayer = scoringPlayer;
	}
	public static long getNextId() {
		return nextId++;
	}
	
}
