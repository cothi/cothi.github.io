from flask import Flask, render_template
import ssl

app = Flask(__name__)


@app.route('/')
def index():
    pagetitle = "whoami"
    return render_template("index.html",mytitle=pagetitle,mycontent="Hello World")

@app.route('/career')
def career():
    pagetitle = "whoami"
    profileTitle = "</> HELLO WORLD"
    return render_template("career.html",mytitle=pagetitle, hello=profileTitle)
    
if __name__ == '__main__':

    
    app.run(host='0.0.0.0', port=80, debug=True)

