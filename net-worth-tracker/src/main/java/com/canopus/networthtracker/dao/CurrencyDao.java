package com.canopus.networthtracker.dao;

import com.canopus.networthtracker.models.Currency;

import java.util.List;
import java.util.UUID;

public interface CurrencyDao {
    int insertCurrency(UUID id, Currency currency);

    default int insertCurrency(Currency currency) {
        UUID id = UUID.randomUUID();
        return insertCurrency(id, currency);
    }

    List<Currency> selectCurrency();

    int updateCurrency(UUID id, Currency currency);
}
