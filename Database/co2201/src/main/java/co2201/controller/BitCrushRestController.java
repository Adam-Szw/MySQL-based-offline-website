package co2201.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co2201.model.Player;
import co2201.model.Score;
import co2201.repo.PlayerRepository;

@RestController
@CrossOrigin
public class BitCrushRestController {

	@Autowired
	PlayerRepository playerRepo;
	
	
	@GetMapping("/games/BitCrush")
	public ResponseEntity<?> saveScore(@RequestParam(name = "playerId") Long id, @RequestParam(name = "gameName") String game, @RequestParam(name = "gameScore") float score)
	{
		Score newScore = new Score(game, score);
		Player player = playerRepo.findById(id).get();
		newScore.setScoringPlayer(player);
		player.getScores().add(newScore);
		playerRepo.save(player);
		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
