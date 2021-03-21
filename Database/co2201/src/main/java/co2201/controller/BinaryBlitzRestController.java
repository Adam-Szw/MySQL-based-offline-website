package co2201.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co2201.model.Player;
import co2201.model.Score;
import co2201.model.binaryblitz.Question;
import co2201.repo.PlayerRepository;
import co2201.repo.binaryblitz.GameRepository;
import co2201.repo.binaryblitz.QuestionRepository;

@RestController
@CrossOrigin
public class BinaryBlitzRestController {
	
	@Autowired
	GameRepository grepo;
	
	@Autowired
	QuestionRepository qrepo;
	
	@Autowired
	PlayerRepository prepo;
	
	
	//The save question section of the class
	@GetMapping("/games/BinaryBlitz")
	public ResponseEntity<?> saveQuestion(@RequestParam(name = "QuestionID") Integer id, @RequestParam(name = "Points") Integer points, @RequestParam(name = "Time") Integer time, @RequestParam(name = "Input") String input, @RequestParam(name = "Type") String type)
	{
		//Creates the question and adds the attribute data
		Question question = new Question();
		question.setInput(input);
		question.setPoints(points);
		question.setQuestionID(id);
		question.setType(type);
		question.setTime(time);
		qrepo.save(question);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	//The get question section of the class
	@GetMapping("/games/BinaryBlitz/custom")
	public List<List<String>> getQuestions() {
		//Creates a return questions list
		List<List<String>> ReturnQuestions = new ArrayList<List<String>>();
		List<Question> gameQuestions = qrepo.findAll();
		for (Question question: gameQuestions) {
			//Gets the question's data and adds it to a list
			ArrayList<String> questionline = new ArrayList<String>();
			questionline.add(question.getQuestionID().toString());
			questionline.add(question.getType());
			questionline.add(question.getInput());
			questionline.add(question.getPoints().toString());
			questionline.add(question.getTime().toString());
			ReturnQuestions.add(questionline);
		}
		return ReturnQuestions;
	}
	
	//This section of the program is to delete a question
	@DeleteMapping("/games/BinaryBlitz/{id}")
	public ResponseEntity<?> deleteQuestion(@PathVariable Integer id) {
		//If the question exists it is deleted
		Question question = qrepo.findById(id).orElse(null);
		if (question == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		qrepo.delete(question);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	//This section of the program is to save a user score
	@GetMapping("/games/BinaryBlitz/saveScore")
	public ResponseEntity<?> saveScore(@RequestParam(name = "playerId") Long id, @RequestParam(name = "gameName") String game, @RequestParam(name = "gameScore") float score)
	{
		//Creates a new score variable
		Score newScore = new Score(game, score);
		//Gets the player who completed the game
		Player player = prepo.findById(id).get();
		//Adds the score to their account
		newScore.setScoringPlayer(player);
		player.getScores().add(newScore);
		prepo.save(player);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	//This is the update section of the class
	@GetMapping("/games/BinaryBlitz/update")
	public ResponseEntity<?> updateQuestion(@RequestParam(name = "QuestionID") Integer id, @RequestParam(name = "Points") Integer points, @RequestParam(name = "Time") Integer time, @RequestParam(name = "Input") String input, @RequestParam(name = "Type") String type)
	{
		//Looks for the questions
		Question question = qrepo.findById(id).orElse(null);
		if (question == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		else {
			//Edits the question values
			question.setInput(input);
			question.setPoints(points);
			question.setQuestionID(id);
			question.setType(type);
			question.setTime(time);
			qrepo.save(question);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
