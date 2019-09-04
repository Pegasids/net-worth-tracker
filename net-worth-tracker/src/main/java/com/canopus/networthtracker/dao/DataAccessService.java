package com.canopus.networthtracker.dao;

import com.canopus.networthtracker.models.Asset;
import com.canopus.networthtracker.models.Currency;
import com.canopus.networthtracker.models.Liability;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("default")
public class DataAccessService implements AssetDao, LiabilityDao, CurrencyDao {

    private static List<Asset> DB_Asset = new ArrayList<>();

    @Override
    public int insertAsset(UUID id, Asset asset) {
        DB_Asset.add(new Asset(id, asset.getDescription(), asset.getValue(), asset.getCategory()));
        return 1;
    }

    @Override
    public List<Asset> selectAllAssets() {
        return DB_Asset;
    }

    @Override
    public Optional<Asset> selectAssetById(UUID id) {
        return DB_Asset.stream()
                .filter(asset -> asset.getId().equals(id))
                .findFirst();
    }

    @Override
    public int deleteAssetById(UUID id) {
        Optional<Asset> assetMaybe = selectAssetById(id);
        if (assetMaybe.isEmpty()) {
            return 0;
        }
        DB_Asset.remove(assetMaybe.get());
        return 1;
    }

    @Override
    public int updateAssetById(UUID id, Asset update) {
        return selectAssetById(id)
                .map(asset -> {
                    int indexOfAssetToUpdate = DB_Asset.indexOf(asset);
                    if (indexOfAssetToUpdate >= 0) {
                        DB_Asset.set(indexOfAssetToUpdate, new Asset(id, update.getDescription(), update.getValue(), update.getCategory()));
                        return 1;
                    }
                    return 0;
                })
                .orElse(0);
    }

    private static List<Liability> DB_Liability = new ArrayList<>();

    @Override
    public int insertLiability(UUID id, Liability liability) {
        DB_Liability.add(new Liability(id, liability.getDescription(), liability.getValue(), liability.getCategory()));
        return 1;
    }

    @Override
    public List<Liability> selectAllLiabilities() {
        return DB_Liability;
    }

    @Override
    public Optional<Liability> selectLiabilityById(UUID id) {
        return DB_Liability.stream()
                .filter(liability -> liability.getId().equals(id))
                .findFirst();
    }

    @Override
    public int deleteLiabilityById(UUID id) {
        Optional<Liability> liabilityMaybe = selectLiabilityById(id);
        if (liabilityMaybe.isEmpty()) {
            return 0;
        }
        DB_Liability.remove(liabilityMaybe.get());
        return 1;
    }

    @Override
    public int updateLiabilityById(UUID id, Liability update) {
        return selectLiabilityById(id)
                .map(liability -> {
                    int indexOfLiabilityToUpdate = DB_Liability.indexOf(liability);
                    if (indexOfLiabilityToUpdate >= 0) {
                        DB_Liability.set(indexOfLiabilityToUpdate, new Liability(id, update.getDescription(), update.getValue(), update.getCategory()));
                        return 1;
                    }
                    return 0;
                })
                .orElse(0);
    }

    private static List<Currency> DB_Currency = new ArrayList<>();

    @Override
    public int insertCurrency(UUID id, Currency currency) {
        if (DB_Currency.size() == 0) {
            DB_Currency.add(new Currency(id, currency.getCurrency()));
            return 1;
        }
        return 0;
    }

    @Override
    public List<Currency> selectCurrency() {
        return DB_Currency;
    }

    public Optional<Currency> selectCurrencyById(UUID id) {
        return DB_Currency.stream()
                .filter(liability -> liability.getId().equals(id))
                .findFirst();
    }

    @Override
    public int updateCurrency(UUID id, Currency update) {
        return selectCurrencyById(id)
                .map(currency -> {
                    int indexOfCurrencyToUpdate = DB_Currency.indexOf(currency);
                    if (indexOfCurrencyToUpdate >= 0) {
                        DB_Currency.set(indexOfCurrencyToUpdate, new Currency(id, update.getCurrency()));
                        return 1;
                    }
                    return 0;
                })
                .orElse(0);
    }
}
