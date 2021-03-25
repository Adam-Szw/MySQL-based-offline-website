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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co2201.model.Score;
import co2201.model.SystemUser;
import co2201.repo.ScoreRepository;
import co2201.repo.SystemUserRepository;

@CrossOrigin
@RestController
public class ScoreRestController {
	
	@Autowired
	SystemUserRepository userRepo;
	
	@Autowired
	ScoreRepository scoreRepo;

	//------------------FOR PROFILE--------------------
	@GetMapping("/Profile/GetUserStats/{id}")
	public List<Score> getUserStats(@PathVariable(name="id") Long id) {
		List<Score> ReturnData = new ArrayList<Score>();
		List<Score> UserScores = scoreRepo.findAll();
		for (Score score: UserScores) {
			Score returnScore = new Score();
			if (score.getScoringPlayer().getId() == id) {
				returnScore.setGameName(score.getGameName());
				returnScore.setScore(score.getScore());
				returnScore.setId(score.getId());
				returnScore.setScoringDatetime(score.getScoringDatetime());
				ReturnData.add(returnScore);
			}

		}
		return ReturnData;
	}
	
	//------------------FOR SCOREBOARD--------------------
	/*@GetMapping("/scores/user")
	public ResponseEntity<?> getUserScores(Principal principal, @RequestParam(name = "gameName") String game,
			@RequestParam(name = "ownerSort") String ownerSort, @RequestParam(name = "showCount") int showCount,
			@RequestParam(name = "scoreSort") String scoreSort)
	{
		boolean riskAssesment = false;
		
		//check if user has access to these settings
		SystemUser user = userRepo.findByUsername(principal.getName());
		if(showCount!=0 || scoreSort!="0")
		{
			if(!user.getStaff()&&!user.getAdmin())
			{
				return new ResponseEntity<>(HttpStatus.FORBIDDEN);
			}
			else
			{
				riskAssesment = true;
			}
		}
	
		//Construct a string to disassemble by JS
		String data = "";
		
		//Find out whose scores to show
		ArrayList<Long> playersToFilter = new ArrayList<Long>();
		switch(ownerSort)
		{
		case "all":
			for(SystemUser userItem : userRepo.findAll())
			{
				playersToFilter.add(userItem.getId());
			}
		case "friends":
			playersToFilter.addAll(user.getFriendsIds());
			playersToFilter.add(user.getId());
		case "user":
			playersToFilter.add(user.getId());
		}
		
		//What game to pick scores from?
		ArrayList<Score> scoresToFilter =  new ArrayList<Score>();
		for(SystemUser player : userRepo.findAllById(playersToFilter))
		{
			for(Score score : player.getScores())
			{
				if(score.getGameName()=="gameName")
				{
					scoresToFilter.add(score);
				}
			}
		}
		
		//What scores to pick from each user?
		switch(scoreSort)
		{
		case "0":

		case "hi-score":
			
		case "avg-score":
			
		case "attempt-count":
			
		case "correct-answers":
		}
		
		return new ResponseEntity<>(data, HttpStatus.OK);
	}*/
}
