from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def start(request):
    return render(request, 'cube/index.html', {'hexahedrons':range(30)})