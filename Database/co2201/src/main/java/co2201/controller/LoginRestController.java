package co2201.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import co2201.repo.PlayerRepository;

@RestController
@CrossOrigin
public class LoginRestController {
	@Autowired
	PlayerRepository playerRepo;
	
	//TODO: this method will return the id of currently logged in player. idk how to implement this yet
	@GetMapping("/Login")
	public ResponseEntity<?> getLoginPlayerId()
	{	
		return new ResponseEntity<>(0, HttpStatus.OK);
	}
	
}
