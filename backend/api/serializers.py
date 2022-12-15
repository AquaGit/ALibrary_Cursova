from rest_framework import serializers

from rest_framework.serializers import FileField

from .models import Book as B
from .models import Category as C


class UploadSerializer(serializers.ModelSerializer):
    file_uploaded = FileField()
    
    class Meta:
        fields = ['file_uploaded']

class BookSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    
    class Meta:
        model = B
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    name = serializers.StringRelatedField()
    class Meta:
        model = C
        fields = ['id', 'name']
        
        
class BookCategorySerializer(serializers.ModelSerializer):

    cctv = BookSerializer(many=True, read_only=True)

    class Meta:
        model = C
        fields = (
            # "id",
            "name",
            "cctv",
        )

    

        

