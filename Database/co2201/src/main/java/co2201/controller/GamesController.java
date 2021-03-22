package co2201.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co2201.model.Score;
import co2201.model.SystemUser;
import co2201.model.binaryblitz.Question;
import co2201.repo.QuestionRepository;
import co2201.repo.SystemUserRepository;

@RestController
@CrossOrigin
public class GamesController {

	@Autowired
	SystemUserRepository userRepo;
	
	@Autowired
	QuestionRepository questionRepo;
	
	@GetMapping("/games/userId")
	public ResponseEntity<?> getLoginuserId(Principal principal)
	{	
		SystemUser user = userRepo.findByUsername(principal.getName());
		return new ResponseEntity<>(user.getId(), HttpStatus.OK);
	}
	
	@GetMapping("/games/save")
	public ResponseEntity<?> saveScore(@RequestParam(name = "userId") Long id, @RequestParam(name = "gameName") String game, @RequestParam(name = "gameScore") float score)
	{
		Score newScore = new Score(game, score);
		SystemUser user = userRepo.findById(id).get();
		newScore.setScoringPlayer(user);
		user.getScores().add(newScore);
		userRepo.save(user);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
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
		questionRepo.save(question);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	//The get question section of the class
	@GetMapping("/games/BinaryBlitz/custom")
	public List<List<String>> getQuestions() {
		//Creates a return questions list
		List<List<String>> ReturnQuestions = new ArrayList<List<String>>();
		List<Question> gameQuestions = questionRepo.findAll();
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
		@RequestMapping(value="/games/BinaryBlitz/{id}", method= RequestMethod.DELETE)
		public ResponseEntity<?> deleteQuestion(@PathVariable Integer id) {
			//If the question exists it is deleted
			Question question = questionRepo.findById(id).orElse(null);
			if (question == null) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			questionRepo.delete(question);
			return new ResponseEntity<>(HttpStatus.OK);
		}
	
}
