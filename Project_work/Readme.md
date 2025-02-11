# Dota 2 Machine Learning Project

This project focuses on analyzing and predicting outcomes in Dota 2 matches using machine learning. It features an end-to-end pipeline, from data preprocessing to deploying a trained model via a backend API and an interactive web interface. The project is hosted online, enabling easy access and usability.

- **Visit the live demo**: [Dota 2 ML Project Website](https://machine-learning-frontend.onrender.com)

---

## Dataset Description

The original Dota 2 dataset comes without headers or column names, and many fields use raw IDs that are difficult to interpret. To address this, a preprocessing script (`dota_data_mapper.py`) was created and executed. 

### Preprocessing Steps:
1. **Mapping IDs**: 
   - Hero IDs, cluster IDs, game mode IDs, and game type IDs were mapped to meaningful names using metadata JSON files (`heroes.json`, `regions.json`, `mods.json`, and `lobbies.json`).
2. **Adding Column Names**: 
   - Columns were labeled for clarity, with individual columns for each hero in the match.
3. **Output**: The cleaned datasets (`dota2TrainFixed.csv` and `dota2TestFixed.csv`) are included in the repository.

This preprocessing ensures that the dataset is ready for machine learning tasks, making it easier to interpret and analyze.

---

## Machine Learning Pipeline

An end-to-end machine learning process is detailed in the `project_work.ipynb` Jupyter Notebook, covering the following steps:
1. **Data Exploration**: Insights and visualizations to understand the dataset.
2. **Feature Engineering**: Transforming data into a format suitable for modeling.
3. **Model Training**: Building and evaluating a machine learning model to predict match outcomes.
4. **Model Deployment**: Saving the trained model for integration into a backend service.

The notebook serves as a comprehensive guide to the machine learning process and can be used to reproduce the results.

---

## Backend API

The trained model is integrated into a FastAPI backend (`ml_api.py`) to provide predictions in real time. The backend:
- Accepts input data in JSON format.
- Processes the input using the trained model.
- Returns predictions to the client.

The backend is hosted on Render, and the source code for the API is available in this repository.

---

## Frontend Application

The project includes a web-based frontend built with React and Tailwind CSS. The frontend:
- Provides an intuitive interface for interacting with the model.
- Sends requests to the FastAPI backend and displays the results.

The frontend is also hosted on Render and accessible at the [Live Demo](https://machine-learning-frontend.onrender.com).

---

## How to Run Locally

### Set up the Python environment:
```bash
make venv
source .venv/bin/activate  # Or .venv\Scripts\activate on Windows
make install
```

### Start the backend server:
```bash
Kopiera kod
python ml_api.py
```
### Run the frontend locally:
```bash
cd client
npm install
npm run dev
```

### Hosting and Deployment
The backend API and frontend application are deployed on Render, ensuring smooth integration and public accessibility. Links to both services are provided at the beginning of this document.
