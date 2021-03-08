package co2201.repo;

import org.springframework.data.repository.CrudRepository;

import co2201.model.Player;

public interface PlayerRepository extends CrudRepository<Player, Long> {

}
