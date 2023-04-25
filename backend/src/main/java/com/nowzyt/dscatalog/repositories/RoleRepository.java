package com.nowzyt.dscatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nowzyt.dscatalog.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{

}
