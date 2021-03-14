package co2201.model.binaryblitz;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Game {
	
	@Id
	private Integer GameID;
	private String GameTitle;
	@OneToMany
	private List<Question> GameQuestions;
	
	public Integer getGameID() {
		return GameID;
	}
	public void setGameID(Integer gameID) {
		GameID = gameID;
	}
	public String getGameTitle() {
		return GameTitle;
	}
	public void setGameTitle(String gameTitle) {
		GameTitle = gameTitle;
	}
	public List<Question> getGameQuestions() {
		return GameQuestions;
	}
	public void setGameQuestions(List<Question> gameQuestions) {
		GameQuestions = gameQuestions;
	}
	
}
