package co2201.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@CrossOrigin
public class HubController {

	@GetMapping("/")
	public String showMainPage()
	{	
		return "Central/mainPage";
	}
	
	@GetMapping("/signIn")
	public String showSigninPage()
	{	
		return "Central/signIn";
	}
	
	@GetMapping("/games")
	public String showGamesPage()
	{	
		return "Central/games";
	}
	
	@GetMapping("/profile")
	public String showProfilePage()
	{	
		return "Central/profile";
	}
	
	@GetMapping("/scoreboard")
	public String showScoreboardPage()
	{	
		return "Central/scoreboard";
	}
	
	@GetMapping("/settings")
	public String showSettingsPage()
	{	
		return "Central/settings";
	}
	
	@GetMapping("/about")
	public String showAboutPage()
	{	
		return "Central/about";
	}
	
	@GetMapping("/Games/BitCrush")
	public String showBitcrush()
	{	
		return "Games/BitCrush/BitCrush";
	}
	
	@GetMapping("/Games/BinaryBlitz")
	public String showBinaryBlitz()
	{	
		return "Games/BinaryBlitz/BinaryBlitz";
	}
	
}
