from flask import views
from flask import redirect, url_for
from flask import render_template

class IndexView(views.MethodView):
    def get(self):
        return render_template(
            "index.html"
        )

    def post(self):
        return redirect(
            url_for("index")
        )