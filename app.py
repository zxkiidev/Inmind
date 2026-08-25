from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

contacts_db = []

# Ruta para servir la página web
@app.route('/')
def home():
    return render_template('index.html')

# Endpoints de la API
@app.route('/api/contact', methods=['POST'])
def receive_contact():
    data = request.get_json()
    
    if not data or 'email' not in data or 'message' not in data:
        return jsonify({'status': 'error', 'message': 'Email y mensaje son obligatorios'}), 400
        
    contacts_db.append(data)
    print("Estado actual de contacts_db:", contacts_db)  
    return jsonify({'status': 'success', 'message': 'Mensaje recibido correctamente'}), 201

@app.route('/api/contact', methods=['GET'])
def list_contacts():
    return jsonify({'contacts': contacts_db}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)