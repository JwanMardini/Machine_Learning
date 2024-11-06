# -*- coding: utf-8 -*-
"""
Created on Tue Nov 5 17:12:56 2024

@author: jwan9
"""
from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Load the model and encoder
dota2_model = pickle.load(open('dota2_model.sav', 'rb'))
encoder = pickle.load(open('encoder.sav', 'rb'))  # Pre-trained OneHotEncoder for categorical columns

class model_input(BaseModel):
    cluster_id: str
    game_mode: str
    game_type: str
    heroes: List[int]  # 113 hero indicators (1 for Team 1, -1 for Team 2, 0 if not selected)

def convert_input_to_input_list(input_data):
    categorical_features = [[input_data['cluster_id'], input_data['game_mode'], input_data['game_type']]]
    encoded_features = encoder.transform(categorical_features)[0]  
    # Step 2: Combine with hero indicators
    input_list = list(encoded_features) + input_data['heroes']
    
    print(input_list)
    return input_list

@app.post('/prediction')
def dota2_prediction(input_parameters : model_input):
    input_data = input_parameters.json()
    input_dictionary = json.loads(input_data)
    input_list = convert_input_to_input_list(input_dictionary)
    prediction = dota2_model.predict([input_list])
    
    if (prediction[0] == 1):
        return 'Team 1 will win'
    else:
        return 'Team 2 will win'

