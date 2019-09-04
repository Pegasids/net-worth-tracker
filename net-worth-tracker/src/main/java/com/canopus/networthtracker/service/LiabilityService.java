package com.canopus.networthtracker.service;

import com.canopus.networthtracker.dao.LiabilityDao;
import com.canopus.networthtracker.models.Liability;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class LiabilityService {
    private final LiabilityDao liabilityDao;

    @Autowired
    public LiabilityService(@Qualifier("default") LiabilityDao liabilityDao) {
        this.liabilityDao = liabilityDao;
    }

    public int addLiability(UUID id, Liability liability) {
        return liabilityDao.insertLiability(id, liability);
    }

    public List<Liability> getAllLiabilities() {
        return liabilityDao.selectAllLiabilities();
    }

    public int deleteLiability(UUID id) {
        return liabilityDao.deleteLiabilityById(id);
    }

    public int updateLiability(UUID id, Liability newLiability) {
        return liabilityDao.updateLiabilityById(id, newLiability);
    }
}
