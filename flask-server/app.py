# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from keras.models import load_model
import cv2
import numpy as np
from io import BytesIO
from PIL import Image
import base64

app = Flask(__name__)
CORS(app)

model = load_model('./emotion_detection_model_v1.h5')

IMG_HEIGHT = 48
IMG_WIDTH = 48
CLASS_LABELS = ['Angry', 'Disgust', 'Fear', 'Happy', 'Neutral', 'Sad', 'Surprise']
face_cascade = cv2.CascadeClassifier('/Users/camelot/project_fea/opencv-4.x/data/haarcascades/haarcascade_frontalface_default.xml')

def process(img):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)
    for (x, y, w, h) in faces:
        face_region = gray[y:y+h, x:x+w]
        face_region_resized = cv2.resize(face_region, (IMG_WIDTH, IMG_HEIGHT))
        face_region_resized = face_region_resized / 255.0
        face_region_resized = np.expand_dims(face_region_resized, axis=0)
        face_region_resized = np.expand_dims(face_region_resized, axis=3)
        pred = model.predict(face_region_resized)
        emotion = CLASS_LABELS[np.argmax(pred)]
        return emotion
    return None

@app.route('/predict', methods=['POST'])
def predict():
    message = request.get_json(force=True)
    encoded = message['image']
    decoded = base64.b64decode(encoded.split(',')[1])
    image = Image.open(BytesIO(decoded))
    image = np.array(image)
    emotion = process(image)
    return jsonify({'emotion': emotion})

if __name__ == '__main__':
    app.run(debug=True)
