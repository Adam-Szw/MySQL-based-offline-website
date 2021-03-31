package co2201.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co2201.model.SystemUser;
import co2201.repo.SystemUserRepository;

@RestController
@CrossOrigin
public class CreateAccountRestController {
	@Autowired
	SystemUserRepository playerRepo;

	@Autowired
	private PasswordEncoder pe;

	//Request to create the new user and save to repo
	@GetMapping("/signIn/newUser")
	public ResponseEntity<?> saveNewUser(@RequestParam(name = "username") String username, @RequestParam(name = "firstname") String firstName, @RequestParam(name = "lastname") String lastName,@RequestParam(name = "email") String email,@RequestParam(name = "password") String password){
		if(username.equals(null) || firstName.equals(null) || lastName.equals(null) || email.equals(null) || password.equals(null))
		{
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		if(playerRepo.findByUsername(username).isPresent())
		{
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		SystemUser newUser = new SystemUser();
		newUser.setUsername(username);
		newUser.setFName(firstName);
		newUser.setLName(lastName);
		newUser.setEmail(email);
		newUser.setPassword(pe.encode(password));
		playerRepo.save(newUser);
		
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@GetMapping("/forgotPassword")
	public ResponseEntity<?> changePassword(@RequestParam(name = "username") String username,@RequestParam(name = "password") String password){
		if(playerRepo.findByUsername(username).isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		SystemUser currentUser = playerRepo.findByUsername(username).get();
		
		currentUser.setPassword(pe.encode(password));
		playerRepo.save(currentUser);
		
		return new ResponseEntity<>(HttpStatus.OK);
		
	}


}
