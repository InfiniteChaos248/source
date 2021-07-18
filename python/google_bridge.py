#import library
import gspread
#Service client credential from oauth2client
from oauth2client.service_account import ServiceAccountCredentials
# Print nicely
import pprint
#Create scope
scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
#create some credential using that scope and content of key.json
creds = ServiceAccountCredentials.from_json_keyfile_name('key.json',scope)
#create gspread authorize using that credential
client = gspread.authorize(creds)
#Now will can access our google sheets we call client.open on StartupName
sheet = client.open('tracker').worksheet('event')
pp = pprint.PrettyPrinter()
#Access all of the record inside that
result = sheet.get_all_values()
pp.pprint(result)