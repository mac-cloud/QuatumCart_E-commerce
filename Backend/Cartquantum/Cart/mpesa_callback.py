import json
import hashlib


def save_mpesa_callback_data(data):
    file_path = '/home/mac-aphid/Desktop/PROJECTS/QuantumCart/Backend/Cartquantum/mpesa_callback_data.json'

    try:
        #if isinstance(data, str):
        #    data = json.loads(data)
        #for item in data:
        #    if item.get('Name') == 'PhoneNumber':
        #        phone_number = item.get('Value')
#
        #        hashed_phone_number = hashlib.sha256(phone_number.encode('utf-8')).hexdigest()
        #        item['Value'] = hashed_phone_number

        # save data
        with open(file_path, 'a') as f:
            json.dump(data, f)
            f.write("\n")
        print("Callback data saved successfully")
    except Exception as e:
        print(f"Error saving callback data: {str(e)}")        
