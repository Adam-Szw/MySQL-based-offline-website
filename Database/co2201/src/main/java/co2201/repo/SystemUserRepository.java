package co2201.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import co2201.model.SystemUser;

public interface SystemUserRepository extends CrudRepository<SystemUser, Long> {
	Optional<SystemUser> findByUsername(String username);
	List<SystemUser> findAll();
	SystemUser findByEmail(String email);
}
