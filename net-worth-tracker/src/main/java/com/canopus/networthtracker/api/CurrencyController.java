package com.canopus.networthtracker.api;

import com.canopus.networthtracker.models.Currency;
import com.canopus.networthtracker.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RequestMapping("api/currency")
@RestController
public class CurrencyController {

    private final CurrencyService currencyService;

    @Autowired
    public CurrencyController(CurrencyService currencyService) {
        this.currencyService = currencyService;
    }

    @PostMapping
    public void addCurrency(@Valid @NonNull @RequestBody Currency currency) {
        currencyService.addCurrency(currency);
    }

    @GetMapping
    public List<Currency> getCurrency() {
        return currencyService.getCurrency();
    }

    @PutMapping(path = "{id}")
    public void updateCurrency(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody Currency currencyToUpdate) {
        currencyService.updateCurrency(id, currencyToUpdate);
    }

}
