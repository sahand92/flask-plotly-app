from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    # Example pandas DataFrame
    data = {'Name': ['John', 'Anna', 'Peter', 'Linda'],
            'Age': [28, 25, 32, 35]}
    df = pd.DataFrame(data)

    # Convert DataFrame to JSON string
    json_data = df.to_json(orient='records')

    # Pass JSON data to template
    return render_template('index.html', json_data=json_data)

if __name__ == '__main__':
    app.run(debug=True)