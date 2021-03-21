package co2201.repo;

import org.springframework.data.repository.CrudRepository;

import co2201.model.SystemUser;

public interface SystemUserRepository extends CrudRepository<SystemUser, Long> {
	SystemUser findByUsername(String username);
}
