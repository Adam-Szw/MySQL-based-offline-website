package co2201;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
	      .csrf().disable()
	      .authorizeRequests()
	        .antMatchers(HttpMethod.DELETE, "/games/**").authenticated()
	        .antMatchers("/signIn/**").anonymous();
		http.requiresChannel().anyRequest().requiresSecure()
		.and().formLogin()
			.loginPage("/")
			.usernameParameter("email")
			.loginProcessingUrl("/login")
			.defaultSuccessUrl("/games",true)
			.failureUrl("/signIn")
			.permitAll()
		.and().logout()
			.invalidateHttpSession(true)
			.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
			.logoutSuccessUrl("/")
			.permitAll()
		.and().authorizeRequests()
			.antMatchers("/games", "/profile", "/scoreboard", "/settings", "/games/getRole",
					"/games/userId", "/games/save**", "/scores**").hasAnyRole("USER","STAFF","ADMIN")
			.antMatchers("/public/**").permitAll()
			.anyRequest().authenticated()
		.and().exceptionHandling().accessDeniedPage("/");
		http.cors();
	}
	

    
	@Autowired 
	private UserDetailsService userDetailsService;

    @Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}
	
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

