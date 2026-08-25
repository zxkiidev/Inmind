# Inmind AI — Plataforma Inteligente de Automación

Una landing page moderna, responsive e interactiva para **Inmind AI**, construida con HTML5, CSS3 y JavaScript vanilla en el frontend, respaldada por un servidor de la API REST desarrollado en Python con **Flask**.

---

## 🚀 Características

### Frontend
* **Hero Section:** Presentación de impacto con llamadas a la acción (CTA).
* **Características & Funcionalidades:** Grid con las ventajas clave de la plataforma.
* **Flujo de Trabajo:** Explicación paso a paso de cómo funciona el servicio.
* **Planes y Precios:** Tarjetas de suscripción destacadas por categorías.
* **Preguntas Frecuentes (FAQ):** Acordeón interactivo nativo.
* **Formulario de Contacto:** Envío asíncrono de mensajes a la API sin recargar la página (`fetch` API).
* **Diseño Responsive:** Adaptable a dispositivos móviles, tablets y monitores.

### Backend (API REST)
* **`POST /api/contact`:** Valida y procesa las peticiones del formulario de contacto.
* **`GET /api/contact`:** Retorna la lista de contactos registrados.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla ES6)
* **Backend:** Python 3.x, Flask, Flask-CORS

---

## 📁 Estructura del Proyecto

Inmind/
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── scripts.js
├── templates/
│   └── index.html
├── app.py
├── requirements.txt
└── .gitignore

⚙️ Instalación y Ejecución Local
Clona el repositorio:

Bash
git clone [https://github.com/tu-usuario/inmind-ai.git](https://github.com/tu-usuario/inmind-ai.git)
cd inmind-ai
Crea y activa un entorno virtual (opcional pero recomendado):

Bash
# En Windows
python -m venv venv
venv\Scripts\activate

# En macOS/Linux
python3 -m venv venv
source venv/bin/activate
Instala las dependencias:

Bash
pip install -r requirements.txt
Ejecuta la aplicación:

Bash
python app.py
Abre el navegador:
Ingresa a http://127.0.0.1:5000 para ver la aplicación en funcionamiento.

📡 Endpoints de la API
1. Guardar mensaje de contacto
Ruta: /api/contact

Método: POST

Headers: Content-Type: application/json

Cuerpo de la petición (JSON):

JSON
{
  "name": "Zadquiel",
  "email": "ejemplo@email.com",
  "message": "Hola, me interesa conocer más sobre la plataforma."
}
Respuesta Exitosa (201 Created):

JSON
{
  "status": "success",
  "message": "Mensaje recibido correctamente"
}
2. Obtener lista de contactos
Ruta: /api/contact

Método: GET

Respuesta Exitosa (200 OK):

JSON
{
  "contacts": [
    {
      "name": "Zadquiel",
      "email": "ejemplo@email.com",
      "message": "Hola, me interesa conocer más sobre la plataforma."
    }
  ]
}
📄 Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.