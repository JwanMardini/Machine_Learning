import pandas as pd
import json

# Read the data from the CSV file
DATA = pd.read_csv('PRJ-003/dota2Test.csv', header=None, sep=',')

# df headers
df_header = ['team', 'cluster_id', 'game_mode', 'game_type'] + [f'hero{i}' for i in range(1, 114)]

# add headers to the dataframe
DATA.columns = df_header


def cluster_id_to_name():
    with open('regions.json') as f:
        regions_file = json.load(f)

    # Create a dictionary mapping cluster_id to region name
    regions_map = {region['id']: region['name'] for region in regions_file['regions']}

    # Use the map to replace cluster_id values in the entire column at once
    DATA['cluster_id'] = DATA['cluster_id'].map(regions_map).fillna(DATA['cluster_id'])


def game_mode_to_name():
    with open('mods.json') as f:
        game_modes_file = json.load(f)

    game_modes_map = {game_mode['id']: game_mode['name'] for game_mode in game_modes_file['mods']}

    DATA['game_mode'] = DATA['game_mode'].map(game_modes_map).fillna(DATA['game_mode'])


def game_type_to_name():
    with open('lobbies.json') as f:
        game_types_file = json.load(f)

    game_types_map = {game_type['id']: game_type['name'] for game_type in game_types_file['lobbies']}

    DATA['game_type'] = DATA['game_type'].map(game_types_map).fillna(DATA['game_type'])


def hero_id_to_name():
    with open('heroes.json') as f:
        heroes_file = json.load(f)

    # Create a dictionary to map hero IDs to their localized names
    hero_map = {f'hero{hero["id"]}': hero['localized_name'] for hero in heroes_file['heroes']}

    # Rename columns in DATA based on hero_map
    DATA.rename(columns=hero_map, inplace=True)


def main():
    cluster_id_to_name()
    game_mode_to_name()
    game_type_to_name()
    hero_id_to_name()

    # Save the data to a new CSV file
    DATA.to_csv('dota2TestFixed.csv', index=False)


if __name__ == '__main__':
    main()
