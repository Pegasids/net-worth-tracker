package com.canopus.networthtracker.dao;

import com.canopus.networthtracker.models.Liability;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface LiabilityDao {
    int insertLiability(UUID id, Liability liability);

    default int insertLiability(Liability liability) {
        UUID id = UUID.randomUUID();
        return insertLiability(id, liability);
    }

    List<Liability> selectAllLiabilities();

    Optional<Liability> selectLiabilityById(UUID id);

    int deleteLiabilityById(UUID id);

    int updateLiabilityById(UUID id, Liability liability);
}
