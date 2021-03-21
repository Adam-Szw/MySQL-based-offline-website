package co2201;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import co2201.model.SystemUser;
import co2201.repo.SystemUserRepository;

@SpringBootApplication
public class Co2201Application implements ApplicationRunner {

	@Autowired
	SystemUserRepository playerRepo;
	
	@Autowired
	private PasswordEncoder pe;
	
	public static void main(String[] args) {
		SpringApplication.run(Co2201Application.class, args);
	}

	@Override
	public void run(ApplicationArguments args) throws Exception {
		
		SystemUser testUser = new SystemUser("Enigma", "Adam", "Szwandziak");
		testUser.setAdmin(true);
		testUser.setPassword(pe.encode("password"));
		playerRepo.save(testUser);
		
		SystemUser testUser2 = new SystemUser("EnigmaB", "Adam", "Szwandziak");
		testUser2.setAdmin(true);
		testUser2.setPassword(pe.encode("password"));
		playerRepo.save(testUser2);
	}

}
