package co2201.model.binaryblitz;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Question {
	
	@Id
	private Integer QuestionID;
	private Integer Points;
	private Integer Time;
	private String Input;
	private String Type;
	
	public Integer getQuestionID() {
		return QuestionID;
	}
	public void setQuestionID(Integer questionID) {
		QuestionID = questionID;
	}
	public Integer getPoints() {
		return Points;
	}
	public void setPoints(Integer points) {
		Points = points;
	}
	public Integer getTime() {
		return Time;
	}
	public void setTime(Integer time) {
		Time = time;
	}
	public String getInput() {
		return Input;
	}
	public void setInput(String input) {
		Input = input;
	}
	public String getType() {
		return Type;
	}
	public void setType(String type) {
		Type = type;
	}

}
