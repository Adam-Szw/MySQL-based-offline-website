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

import co2201.model.binaryblitz.Question;
import co2201.repo.binaryblitz.GameRepository;
import co2201.repo.binaryblitz.QuestionRepository;

@RestController
@CrossOrigin
public class BinaryBlitzRestController {
	
	@Autowired
	GameRepository grepo;
	
	@Autowired
	QuestionRepository qrepo;
	
	@GetMapping("/games/BinaryBlitz")
	public ResponseEntity<?> saveQuestion(@RequestParam(name = "QuestionID") Integer id, @RequestParam(name = "Points") Integer points, @RequestParam(name = "Time") Integer time, @RequestParam(name = "Input") String input, @RequestParam(name = "Type") String type)
	{
		Question question = new Question();
		question.setInput(input);
		question.setPoints(points);
		question.setQuestionID(id);
		question.setType(type);
		question.setTime(time);
		qrepo.save(question);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/games/BinaryBlitz/custom")
	public List<List<String>> getQuestions() {
		List<List<String>> ReturnQuestions = new ArrayList<List<String>>();
		List<Question> gameQuestions = qrepo.findAll();
		for (Question question: gameQuestions) {
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
	
	
	@DeleteMapping("/games/BinaryBlitz/{id}")
	public ResponseEntity<?> deleteQuestion(@PathVariable Integer id) {
		return null;
	}
}
