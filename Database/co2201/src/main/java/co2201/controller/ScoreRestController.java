package co2201.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
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
		SystemUser user = userRepo.findById(id).orElse(null);
		Long x = null;
		for (Long i = 0L; i < 5000; i++) {
			if (i == user.getId()) {
				x = i;
				break;
			}
		}
		List<Score> ReturnData = new ArrayList<Score>();
		List<Score> UserScores = scoreRepo.findAll();
		for (Score score: UserScores) {
			Score returnScore = new Score();
			if (x!=score.getScoringPlayer().getId()) {
				returnScore.setGameName(score.getGameName());
				returnScore.setScore(score.getScore());
				returnScore.setId(user.getId());
				returnScore.setScoringDatetime(score.getScoringDatetime());
				ReturnData.add(returnScore);
				returnScore.setId(x);
				ReturnData.add(returnScore);
				returnScore.setId(score.getScoringPlayer().getId());
				ReturnData.add(returnScore);
			}

		}
		return ReturnData;
	}
	
	@GetMapping("/Profile/GetVisitorStats/{userName}")
	public List<Score> getVisitorStats(@PathVariable(name="userName") String username) {
		List<Score> ReturnData = new ArrayList<Score>();
		List<Score> UserScores = scoreRepo.findAll();
		for (Score score: UserScores) {
			Score returnScore = new Score();
			if (score.getScoringPlayer().getUsername() == username) {
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
	protected class PlayerDetails {
		long id = 0;
		int rank = 0;
		String userName = null;
		float highScore = 0.0f;
		float averageScore = 0.0f;
		int attemptCount = 0;
		ArrayList<Score> allScores = new ArrayList<Score>();
	}
	
	
	@GetMapping("/scores")
	public ResponseEntity<?> getUserScores(Principal principal, @RequestParam(name = "gameName") String game,
			@RequestParam(name = "ownerSort") String ownerSort, @RequestParam(name = "showCount") int showCount,
			@RequestParam(name = "scoreSort") String scoreSort)
	{
		
		//check if we want any information at all
		if(game=="0")
		{
			return new ResponseEntity<>(HttpStatus.OK);
		}
		
		//check if user has access to these settings
		SystemUser user = userRepo.findByUsername(principal.getName()).get();
		if(showCount!=10 || !scoreSort.equals("hi-score"))
		{
			if(!user.getStaff()&&!user.getAdmin())
			{
				return new ResponseEntity<>(HttpStatus.FORBIDDEN);
			}
		}
		
		if(user.getStaff()||user.getAdmin())
		{
			//TODO - add button to redirect to user profile
		}
		
		//List of details that will be converted to string
		ArrayList<PlayerDetails> details = new ArrayList<PlayerDetails>();
		
		
		//Construct a string to disassemble by JS
		String data = "";
		
		//Find out whose scores to show
		switch(ownerSort)
		{
		case "all":
			for(SystemUser userItem : userRepo.findAll())
			{
				PlayerDetails d = new PlayerDetails();
				d.id = userItem.getId();
				d.userName = userItem.getFName()+" "+userItem.getLName();
				details.add(d);
			}
			break;
		case "friends":
			for(long l : user.getFriendsIds())
			{
				PlayerDetails d = new PlayerDetails();
				d.id = l;
				d.userName = userRepo.findById(l).get().getFName()+" "+userRepo.findById(l).get().getLName();
				details.add(d);
			}
			PlayerDetails d = new PlayerDetails();
			d.id = user.getId();
			d.userName = user.getFName()+" "+user.getLName();
			details.add(d);
			break;
		case "user":
			PlayerDetails d1 = new PlayerDetails();
			d1.id = user.getId();
			d1.userName = user.getFName()+" "+user.getLName();
			details.add(d1);
			break;
		}
		
		//What game to pick scores from?
		for(PlayerDetails detail : details)
		{
			for(Score score : userRepo.findById(detail.id).get().getScores())
			{
				if(score.getGameName().compareTo(game)==0)
				{
					detail.allScores.add(score);
				}
			}
		}
		
		//Collect the data
		for(PlayerDetails detail : details)
		{
			float totalScore = 0.0f;
			for(Score score : detail.allScores)
			{
				detail.attemptCount++;
				totalScore += score.getScore();
				if(score.getScore() > detail.highScore)
				{
					detail.highScore = score.getScore();
				}
			}
			detail.averageScore = detail.attemptCount!=0? totalScore/detail.attemptCount : 0;
		}
		
		//How to sort the scores?
		switch(scoreSort)
		{
		case "hi-score":
			//default - pick only best score from each user for that game
			Collections.sort(details, new Comparator<PlayerDetails>() {
				@Override
				public int compare(PlayerDetails d1, PlayerDetails d2) {
					return ((Float)(d2.highScore)).compareTo((Float)(d1.highScore));
				}
			});
			
			break;
		case "low-score":
			//pick only best score from each user for that game, showing weakest users first
			Collections.sort(details, new Comparator<PlayerDetails>() {
				@Override
				public int compare(PlayerDetails d1, PlayerDetails d2) {
					return ((Float)(d1.highScore)).compareTo((Float)(d2.highScore));
				}
			});
			break;
		case "avg-score":
			//pick only average score for that game of all attempts, showing weakest users
			Collections.sort(details, new Comparator<PlayerDetails>() {
				@Override
				public int compare(PlayerDetails d1, PlayerDetails d2) {
					return ((Float)(d1.averageScore)).compareTo((Float)(d2.averageScore));
				}
			});
			break;
		case "attempt-count":
			//pick users with lowest attempt counts
			Collections.sort(details, new Comparator<PlayerDetails>() {
				@Override
				public int compare(PlayerDetails d1, PlayerDetails d2) {
					return ((Integer)(d1.attemptCount)).compareTo((Integer)(d2.attemptCount));
				}
			});
			break;
		}
		
		//truncate results
		ArrayList<PlayerDetails> resultDetails = new ArrayList<PlayerDetails>();
		for(int i=0; i<details.size(); i++)
		{
			if(showCount <=0 )
			{
				break;
			}
			else
			{
				showCount--;
				details.get(i).rank = i+1;
				resultDetails.add(details.get(i));
			}
		}
		
		//convert results into string
		for(PlayerDetails detail : resultDetails)
		{
			data+=detail.rank+"|"+detail.userName+"|"+detail.highScore+"|"+detail.averageScore+
					"|"+detail.attemptCount+"\n";
		}
		
		return new ResponseEntity<>(data, HttpStatus.OK);
	}
}
