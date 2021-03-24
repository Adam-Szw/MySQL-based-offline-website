package co2201.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import co2201.model.Score;
import co2201.repo.ScoreRepository;

@Controller
@CrossOrigin
public class ScoreController {
	
	@Autowired
	ScoreRepository ScoreRepo;
	
	/*@GetMapping("/Profile/GetUserStats/{id}")
	public List<Score> getUserStats(@PathVariable(name="id") Long id) {
		List<Score> UserScores = ScoreRepo.findByscore_owner_id(id);
		
		return UserScores;
	}*/
}
