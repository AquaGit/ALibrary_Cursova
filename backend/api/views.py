import random
from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
# from rest_framework.pagination import PageNumberPagination

# from django.shortcuts import render
# from rest_framework.views import APIView

from .permissions import IsAdminOrReadOnly, IsOwnerOrReadOnly
from .serializers import BookCategorySerializer, BookSerializer, CategorySerializer
from .models import Book, Category


# class BookViewSet(viewsets.ModelViewSet):
#     queryset = Book.objects.all()
#     serializer_class = BookSerializer   


# class BookAPIListPaginations(PageNumberPagination):
#     page_size = 5
#     page_size_query_param = 'page_size'
#     max_page_size = 10000

class CategoryAPIList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAdminOrReadOnly, )
    
    def get_queryset(self):
        pk = self.kwargs.get("pk")
        
        if not pk:
            return Category.objects.all()[::]
        
        return Category.objects.filter(pk=pk)


class BookAPIList(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = (IsAdminOrReadOnly, )
    # pagination_class = BookAPIListPaginations
    
    def get_queryset(self):
        pk = self.kwargs.get("pk")
        
        if not pk:
            return Book.objects.all()[::]
        
        return Book.objects.filter(pk=pk)
        
        

class BookAPIUpdate(generics.RetrieveUpdateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = (IsOwnerOrReadOnly, )


class BookAPIDestroy(generics.RetrieveDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = (IsAdminOrReadOnly, )

class BooksByCategoryView(generics.ListAPIView):
    serializer_class = BookCategorySerializer
    queryset = Category.objects.all()
    
    def get_queryset(self):
        pk = self.kwargs.get("pk")
        
        if not pk:
            return Category.objects.all()[::]
        
        return Category.objects.filter(pk=pk)