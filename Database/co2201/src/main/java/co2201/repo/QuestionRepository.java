package co2201.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import co2201.model.binaryblitz.Question;

public interface QuestionRepository extends CrudRepository<Question, Integer> {
	public List<Question> findAll();
}
