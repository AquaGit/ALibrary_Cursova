from django.db import models as m
from django.contrib.auth.models import User as DjangoUser

class Category(m.Model):
    name = m.CharField(max_length=100, db_index=True)
    
    class Meta:
        ordering = ['id']
 
    def __str__(self):
        return self.name


class Book(m.Model):
    title = m.CharField(max_length=70)
    review = m.TextField()
    author = m.CharField(max_length=70)
    created = m.DateTimeField(auto_now=True)
    photo = m.ImageField(upload_to="image")
    pdf = m.FileField(upload_to="pdf")
    category = m.ForeignKey('Category', on_delete=m.PROTECT, related_name='cctv')  
    user = m.ForeignKey(DjangoUser, verbose_name='Користувач', on_delete=m.CASCADE)
    
    class Meta:
        ordering = ['id']
 

    def __str__(self):
        return self.title

