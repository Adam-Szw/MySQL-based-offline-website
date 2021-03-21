package co2201.repo;

import org.springframework.data.repository.CrudRepository;

import co2201.model.binaryblitz.Game;

public interface GameRepository extends CrudRepository<Game, Integer> {

}
