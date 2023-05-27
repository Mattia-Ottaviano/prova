from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)

# Stringa di connessione al DB
app.config["MONGO_URI"] = "mongodb+srv://ottavianomattia:scrivania0921!1509@cluster0.jjjyhjc.mongodb.net/ninjaturtle" #Importante qui va specificato il nome del DB

mongo = PyMongo(app)
# Per rispondere alle chiamate cross origin
CORS(app)

@app.route('/all', methods=['GET'])
def get_all_addresses():
    tombino = mongo.db.tombino
    output = []
    for s in tombino.find().limit(100):
        output.append({"lat": s["lat"], "lng":s["lng"]})
                            
    return jsonify(output)

# Checks to see if the name of the package is the run as the main package.
if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run()