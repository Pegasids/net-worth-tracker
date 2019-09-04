package com.canopus.networthtracker.service;

import com.canopus.networthtracker.dao.AssetDao;
import com.canopus.networthtracker.models.Asset;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AssetService {

    private final AssetDao assetDao;

    @Autowired
    public AssetService(@Qualifier("default") AssetDao assetDao) {
        this.assetDao = assetDao;
    }

    public int addAsset(UUID id, Asset asset) {
        return assetDao.insertAsset(id, asset);
    }

    public List<Asset> getAllAssets() {
        return assetDao.selectAllAssets();
    }

    public int deleteAsset(UUID id) {
        return assetDao.deleteAssetById(id);
    }

    public int updateAsset(UUID id, Asset newAsset) {
        return assetDao.updateAssetById(id, newAsset);
    }
}
