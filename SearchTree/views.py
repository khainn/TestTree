from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, "SearchTree/SearchTree.html")
    # return render(request, "SearchTree/Test.html")