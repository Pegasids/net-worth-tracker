package com.canopus.networthtracker.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.UUID;

public class Liability extends AccountingItem{
    private final UUID id;

    @NotNull
    private final String description;
    @NotNull
    private final Double value;
    @NotBlank
    private final String category;

    public Liability(@JsonProperty("id") UUID id,
                 @JsonProperty("description") String description,
                 @JsonProperty("value") Double value,
                 @JsonProperty("category") String category) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.category = category;
    }

    public UUID getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Double getValue() { return value; }

    public String getCategory() { return category; }
}
