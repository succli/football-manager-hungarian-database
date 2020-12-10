from geopy.geocoders import Nominatim
import csv
import os

current_dir = os.path.dirname(__file__)
input_csv = 'cities-input.csv'
input_path = os.path.join(current_dir, input_csv)
output_csv = 'cities-output.csv'
output_path = os.path.join(current_dir, output_csv)

geolocator = Nominatim(user_agent='succli')

def get_city_data(name):
  country='Hungary'
  print('Processing city data: '+name[0])
  location = geolocator.geocode(name[0]+','+country)
  return [name[0], round(location.latitude, 3), round(location.longitude, 3), int(location.altitude)]

def main():
  with open(input_path, 'r', encoding='utf-8') as input_file:
    reader = csv.reader(input_file)
    data = list(reader)

  print('City list readed successfully from CSV file:', input_path)

  cities = map(get_city_data, data)

  print('Cities geocode fetched')

  if os.path.exists(output_path):
    os.remove(output_path)

  with open(output_path, 'w', encoding='utf-8', newline='') as output_file:
    csv.writer(output_file).writerows(cities)

  print('City list wrote successfully to CSV file:', output_path)

if __name__ == '__main__':
  main()