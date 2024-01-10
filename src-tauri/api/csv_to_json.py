import csv
import json

csv_file = './src-tauri/api/GRE_vocab.csv'
json_file = './src-tauri/api/word.json'

# Read CSV and convert to JSON
data = []
with open(csv_file, 'r', encoding="utf-8") as csvfile:
    csvreader = csv.DictReader(csvfile)

    search_string = ['n.', 'v.', 'a.', 'adv.', 'adj.']
    
    for row in csvreader:

        part_of_speech_list = row['part_of_speech'].split('/')

        for tense in part_of_speech_list:
            for i in search_string:
                index_start = tense.find(i)

                if(index_start != -1):
                
                    for index_end in range(index_start, len(tense)):
                        if tense[index_end] == '.':
                            substring = tense[index_start:index_end + 1]
                            if(len(substring) > 5):
                                break
                            new_row = row.copy()  # Create a new dictionary
                            new_row['part_of_speech'] = substring
                            data.append(new_row)   
         

# Write JSON
with open(json_file, 'w') as jsonfile:
    json.dump(data, jsonfile, indent=2)

print(f'Conversion complete. JSON file saved as {json_file}')