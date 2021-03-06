/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arsw.weather.controllers;

import com.arsw.weather.services.WeatherService;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author 2123162
 */

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/weather")
public class WeatherController {
    
    @Autowired
    WeatherService ws;

    
    @RequestMapping(value="/{city}", method = RequestMethod.GET)  
    public ResponseEntity<?> manejador(@PathVariable String city){
 	try { 			
            return new ResponseEntity<>(ws.weatherInCity(city),HttpStatus.ACCEPTED);
 	} catch (Exception ex) {
            Logger.getLogger(WeatherController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("Error ",HttpStatus.NOT_FOUND);
 	}  
    }
    
}
