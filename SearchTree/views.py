from django.shortcuts import render
from django.http import HttpResponse
from .models import regionInfo
from django.template import RequestContext
import datetime


# Create your views here.
def index(request):
    return render(request, "SearchTree/SearchTree.html")
    # return render(request, "SearchTree/Test.html")


def mongodb(request):
    return render(request, "SearchTree/mongo.html")

