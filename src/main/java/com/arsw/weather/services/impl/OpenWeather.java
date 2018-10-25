/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arsw.weather.services.impl;

import com.arsw.weather.services.WeatherService;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.stereotype.Service;

/**
 *
 * @author 2123162
 */
@Service
public class OpenWeather implements WeatherService{

    private static final String USER_AGENT = "Mozilla/5.0";
    private static final String GET_URL = "http://api.openweathermap.org/data/2.5/weather?q=";   
    private static final String GET_URLEND = "&appid=63b8a5baeade1b60dce33b3f847ce983";  
    
    @Override
    public String weatherInCity(String city) {
        System.out.println(city);
        StringBuffer response = new StringBuffer();
        try {
            URL obj = new URL(GET_URL + city + GET_URLEND);
            HttpURLConnection con = (HttpURLConnection) obj.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("User-Agent", USER_AGENT);            
                        
            try (BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()))) {
                String inputLine;                
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
            }            
        } catch (MalformedURLException ex) {
            Logger.getLogger(OpenWeather.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(OpenWeather.class.getName()).log(Level.SEVERE, null, ex);
        }
        return response.toString();
    }
    
}
