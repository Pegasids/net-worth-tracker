package com.canopus.networthtracker.models;

import java.util.UUID;

public abstract class AccountingItem {

    public abstract UUID getId();
    public abstract String getDescription();
    public abstract Double getValue();
    public abstract String getCategory();
}
