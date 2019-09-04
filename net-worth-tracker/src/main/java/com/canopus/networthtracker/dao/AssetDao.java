package com.canopus.networthtracker.dao;

import com.canopus.networthtracker.models.Asset;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface AssetDao {

    int insertAsset(UUID id, Asset asset);

    default int insertAsset(Asset asset) {
        UUID id = UUID.randomUUID();
        return insertAsset(id, asset);
    }

    List<Asset> selectAllAssets();

    Optional<Asset> selectAssetById(UUID id);

    int deleteAssetById(UUID id);

    int updateAssetById(UUID id, Asset asset);
}

