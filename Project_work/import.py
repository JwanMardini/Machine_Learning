import pandas as pd
import json 

# Read the data from the CSV file
data = pd.read_csv('PRJ-003/dota2Train.csv', header=None, sep=',')

# df headers
df_header = ['team', 'cluster_id', 'game_mode', 'game_type'] + [f'hero{i}' for i in range(1, 114)]

# add headers to the dataframe
data.columns = df_header

# print the first few rows of the data
# pd.set_option('display.max_columns', None)
# print(data.head())

with open('regions.json') as f:
    regions_file = json.load(f)

regions = regions_file['regions']

# print the cluster_id and the region name
for cluster in data['cluster_id'].unique():
    for region in range(len(regions)):
        if cluster == regions[region]['id']:
            print(f'{cluster}, {regions[region]["name"]}')
