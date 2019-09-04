package com.canopus.networthtracker.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

public class Currency {
    private final UUID id;

    @NotBlank
    private final String currency;

    public Currency(@JsonProperty("id") UUID id,
                 @JsonProperty("currency") String currency) {
        this.id = id;
        this.currency = currency;
    }

    public UUID getId() {
        return id;
    }

    public String getCurrency() { return currency; }
}
