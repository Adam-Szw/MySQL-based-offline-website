package co2201.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import co2201.repo.binaryblitz.GameRepository;

@RestController
@CrossOrigin
public class BinaryBlitzRestController {
	
	@Autowired
	GameRepository grepo;
}
