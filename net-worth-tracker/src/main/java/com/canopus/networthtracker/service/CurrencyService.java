package com.canopus.networthtracker.service;

import com.canopus.networthtracker.dao.CurrencyDao;
import com.canopus.networthtracker.models.Currency;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CurrencyService {

    private final CurrencyDao currencyDao;

    @Autowired
    public CurrencyService(@Qualifier("default") CurrencyDao currencyDao) {
        this.currencyDao = currencyDao;
    }

    public int addCurrency(Currency currency) {
        return currencyDao.insertCurrency(currency);
    }

    public List<Currency> getCurrency() {
        return currencyDao.selectCurrency();
    }

    public int updateCurrency(UUID id, Currency newCurrency) {
        return currencyDao.updateCurrency(id, newCurrency);
    }
}
