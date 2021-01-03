from flask import views, render_template, redirect, url_for, session

class HomeViews(views.MethodView):
	def get(self):
		return render_template("index.html")

	def post(self):
		return render_template("index.html")