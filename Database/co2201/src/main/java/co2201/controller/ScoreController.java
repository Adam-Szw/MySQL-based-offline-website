package co2201.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import co2201.model.Score;
import co2201.repo.ScoreRepository;

@RestController
@CrossOrigin
public class ScoreController {
	
	@Autowired
	ScoreRepository ScoreRepo;
	
	@GetMapping("/Profile/GetUserStats/{id}")
	public List<Score> getUserStats(@PathVariable(name="id") Long id) {
		List<Score> ReturnData = new ArrayList<Score>();
		List<Score> UserScores = ScoreRepo.findAll();
		for (Score score: UserScores) {
			Score returnScore = new Score();
			if (score.getScoringPlayer().getId() == id) {
				returnScore.setGameName(score.getGameName());
				returnScore.setScore(score.getScore());
				returnScore.setId(score.getId());
				ReturnData.add(returnScore);
			}

		}
		return ReturnData;
	}
}

