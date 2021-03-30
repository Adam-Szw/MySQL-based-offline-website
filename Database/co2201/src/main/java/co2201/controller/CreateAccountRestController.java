package co2201.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
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
	@PostMapping("/signIn/newUser")
	public ResponseEntity<?> saveNewUser(@RequestParam(name = "username") String username, @RequestParam(name = "firstname") String firstName, @RequestParam(name = "lastname") String lastName,@RequestParam(name = "password") String password){
		SystemUser newUser = new SystemUser();
		newUser.setUsername(username);
		newUser.setFName(firstName);
		newUser.setLName(lastName);
		newUser.setAdmin(true);
		newUser.setPassword(pe.encode(password));
		playerRepo.save(newUser);
		
		System.out.print(newUser.getUsername());
		
		return new ResponseEntity<>(HttpStatus.OK);
		
	}

}
