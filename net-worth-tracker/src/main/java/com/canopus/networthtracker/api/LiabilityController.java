package com.canopus.networthtracker.api;

import com.canopus.networthtracker.models.Liability;
import com.canopus.networthtracker.service.LiabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RequestMapping("api/liability")
@RestController
public class LiabilityController {

    private final LiabilityService liabilityService;

    @Autowired
    public LiabilityController(LiabilityService liabilityService) {
        this.liabilityService = liabilityService;
    }

    @PostMapping
    public void addLiability(@Valid @NonNull @RequestBody Liability liability) {
        liabilityService.addLiability(liability.getId(), liability);
    }

    @GetMapping
    public List<Liability> getAllLiabilities() {
        return liabilityService.getAllLiabilities();
    }

    @DeleteMapping(path = "{id}")
    public void deleteLiabilityById(@PathVariable("id") UUID id) {
        liabilityService.deleteLiability(id);
    }

    @PutMapping(path = "{id}")
    public void updateLiability(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody Liability liabilityToUpdate) {
        liabilityService.updateLiability(id, liabilityToUpdate);
    }
}
