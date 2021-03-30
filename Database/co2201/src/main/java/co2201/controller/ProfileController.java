package co2201.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
public class ProfileController {
	
	@Autowired
	SystemUserRepository userRepo;
	
	@Autowired
	private PasswordEncoder pe;
	
	@GetMapping("/profile/usernames")
	public ResponseEntity<?> getAllUsernames() {
		List<SystemUser> users = userRepo.findAll();
		List<String> usernames = new ArrayList<String>();
		for (SystemUser user: users) {
			usernames.add(user.getUsername());
		}
		return new ResponseEntity<>(usernames, HttpStatus.OK);
	}
	
	//Gets the logged in player username
	@GetMapping("/profile/username")
	public ResponseEntity<?> getUsername(Principal principal){
		Optional<SystemUser> user = userRepo.findByUsername(principal.getName());
		System.out.print(user.get().getUsername());
		return new ResponseEntity<>(user.get().getUsername(), HttpStatus.OK);		
	}
	
	@GetMapping("/profileVisitor/username")
	public ResponseEntity<?> getVistorUser(@RequestParam(name = "userName") String username) {
		SystemUser user = userRepo.findByUsername(username).get();
		return new ResponseEntity<>(user.getUsername(), HttpStatus.OK);
	}
	
	//Gets the logged in player name
	@GetMapping("/profile/status")
	public ResponseEntity<?> getStatus(Principal principal){
		Optional<SystemUser> user = userRepo.findByUsername(principal.getName());
		return new ResponseEntity<>(user.get().getStatus(),HttpStatus.OK);	
	}
	
	@GetMapping("/profileVisitor/status")
	public ResponseEntity<?> getVistorStatus(@RequestParam(name = "userName") String username) {
		SystemUser user = userRepo.findByUsername(username).get();
		return new ResponseEntity<>(user.getStatus(), HttpStatus.OK);
	}
	
	//Gets the logged in player name
	@GetMapping("/profile/name")
	public ResponseEntity<?> getName(Principal principal){
		Optional<SystemUser> user = userRepo.findByUsername(principal.getName());
		return new ResponseEntity<>(user.get().getFName()+" "+user.get().getLName(),HttpStatus.OK);
		
	}
	
	@GetMapping("/profileVisitor/name")
	public ResponseEntity<?> getVistorName(@RequestParam(name = "userName") String username) {
		SystemUser user = userRepo.findByUsername(username).get();
		return new ResponseEntity<>(user.getFName()+" "+user.getLName(), HttpStatus.OK);
	}
	
	//Gets the logged in player phone number
	@GetMapping("/profile/phone")
	public ResponseEntity<?> getPhoneNo(Principal principal){
		Optional<SystemUser> user = userRepo.findByUsername(principal.getName());
		return new ResponseEntity<>(user.get().getPhoneNumber(),HttpStatus.OK);
	}
	
	@GetMapping("/profileVisitor/phone")
	public ResponseEntity<?> getVistorPhone(@RequestParam(name = "userName") String username) {
		SystemUser user = userRepo.findByUsername(username).get();
		return new ResponseEntity<>(user.getPhoneNumber(), HttpStatus.OK);
	}
	
	//Gets the logged in player email
	@GetMapping("/profile/email")
	public ResponseEntity<?> getEmail(Principal principal){
		Optional<SystemUser> user = userRepo.findByUsername(principal.getName());
		return new ResponseEntity<>(user.get().getEmail(),HttpStatus.OK);
	}
	
	@GetMapping("/profileVisitor/email")
	public ResponseEntity<?> getVistorEmail(@RequestParam(name = "userName") String username) {
		SystemUser user = userRepo.findByUsername(username).get();
		return new ResponseEntity<>(user.getEmail(), HttpStatus.OK);
	}
	
	//Gets the logged in player bio
	@GetMapping("/profile/bio")
	public ResponseEntity<?> getBio(Principal principal){
		Optional<SystemUser> user = userRepo.findByUsername(principal.getName());
		return new ResponseEntity<>(user.get().getBio(),HttpStatus.OK);
	}
	
	@GetMapping("/profileVisitor/bio")
	public ResponseEntity<?> getVistorBio(@RequestParam(name = "userName") String username) {
		SystemUser user = userRepo.findByUsername(username).get();
		return new ResponseEntity<>(user.getBio(), HttpStatus.OK);
	}
	
	//Saves the logged in player new password
	@GetMapping("/profile/savePassword")
	public ResponseEntity<?> saveUserPassword(@RequestParam(name = "userId") Long id, @RequestParam(name = "password") String password){
		SystemUser user = userRepo.findById(id).get();
		user.setPassword(pe.encode(password));
		userRepo.save(user);
		
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	//Saves the logged in player details
	@GetMapping("/profile/saveDetails")
	public ResponseEntity<?> saveUserDetails(@RequestParam(name = "userId") Long id, @RequestParam(name = "phoneNo") long phonenum,@RequestParam(name = "email") String email){
		SystemUser user = userRepo.findById(id).get();
		if(email.equals("n")) {
			user.setPhoneNumber(phonenum);
			userRepo.save(user);
			return new ResponseEntity<>(HttpStatus.OK);
			
		}
		if(phonenum == 0) {
			user.setEmail(email);
			userRepo.save(user);
			return new ResponseEntity<>(HttpStatus.OK);	
		}
		
		else {
			user.setEmail(email);
			user.setPhoneNumber(phonenum);
			userRepo.save(user);
			return new ResponseEntity<>(HttpStatus.OK);	
		}
		
		
	}
	
	//Saves the logged in player bio
	@GetMapping("/profile/saveBio")
	public ResponseEntity<?> saveUserBio(@RequestParam(name = "userId") Long id, @RequestParam(name = "bio") String bio){
		SystemUser user = userRepo.findById(id).get();
		
		user.setBio(bio);
		
		userRepo.save(user);
		
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	//Saves the logged in player bio
	@GetMapping("/profile/saveStatus")
	public ResponseEntity<?> saveUserStatus(@RequestParam(name = "userId") Long id, @RequestParam(name = "status") String status){
	SystemUser user = userRepo.findById(id).get();
			
		user.setStatus(status);
			
		userRepo.save(user);
			
		return new ResponseEntity<>(HttpStatus.OK);
			
	}
}
