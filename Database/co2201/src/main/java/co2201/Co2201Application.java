package co2201;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import co2201.model.Player;
import co2201.repo.PlayerRepository;

@SpringBootApplication
public class Co2201Application implements ApplicationRunner {

	@Autowired
	PlayerRepository playerRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(Co2201Application.class, args);
	}

	@Override
	public void run(ApplicationArguments args) throws Exception {
		
		Player testPlayer = new Player("Enigma", "Adam", "Szwandziak");
		playerRepo.save(testPlayer);
	}

}
