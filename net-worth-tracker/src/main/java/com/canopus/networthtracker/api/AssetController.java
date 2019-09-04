package com.canopus.networthtracker.api;

import com.canopus.networthtracker.models.Asset;
import com.canopus.networthtracker.service.AssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RequestMapping("api/asset")
@RestController
public class AssetController {

    private final AssetService assetService;

    @Autowired
    public AssetController(AssetService assetService) {
        this.assetService = assetService;
    }

    @PostMapping
    public void addAsset(@Valid @NonNull @RequestBody Asset asset) {
        assetService.addAsset(asset.getId(), asset);
    }

    @GetMapping
    public List<Asset> getAllAssets() {
        return assetService.getAllAssets();
    }

    @DeleteMapping(path = "{id}")
    public void deleteAssetById(@PathVariable("id") UUID id) {
        assetService.deleteAsset(id);
    }

    @PutMapping(path = "{id}")
    public void updateAsset(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody Asset assetToUpdate) {
        assetService.updateAsset(id, assetToUpdate);
    }
}
