package com.project.educapp.exceptions;

import com.project.educapp.util.MessageUtils;

public class NotFoundException extends RuntimeException {
    public NotFoundException() {
        super(MessageUtils.RECORDS_NOT_FOUND);
    }
}
