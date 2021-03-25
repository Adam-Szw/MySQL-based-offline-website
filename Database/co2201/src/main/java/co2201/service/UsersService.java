package co2201.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import co2201.model.SystemUser;
import co2201.repo.SystemUserRepository;


@Service
public class UsersService implements UserDetailsService {

	@Autowired
	private SystemUserRepository userRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		SystemUser systemUser = userRepo.findByUsername(username).get();

		if (systemUser == null)
			throw new UsernameNotFoundException("User not found");
		
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority("ROLE_PLAYER"));
		if(systemUser.getStaff())
		{
			authorities.add(new SimpleGrantedAuthority("ROLE_STAFF"));
		}
		if(systemUser.getAdmin())
		{
			authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
		}

		return new User(systemUser.getUsername(), systemUser.getPassword(), true, 
				true, true, true, authorities);
	}

}
