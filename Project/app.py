from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('main.html')

@app.route('/rotto')
def rotto():
    return render_template('Jiung.html')

@app.route('/user/<user_name>/<int:user_id>')
def user(user_name, user_id):
    return f'Hello, {user_name}({user_id})!'

@app.route("/main")
def main():
    return render_template("Jiung.html")

if __name__ == '__main__':
    app.run(debug=True, port="8080")
