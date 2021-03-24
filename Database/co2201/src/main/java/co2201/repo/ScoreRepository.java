package co2201.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import co2201.model.Score;

public interface ScoreRepository extends CrudRepository<Score, Long> {
	public List<Score> findAll();
}
