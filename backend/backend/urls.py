from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import TokenVerifyView, TokenRefreshView, TokenObtainPairView
# from rest_framework import routers
from api.views import BookAPIDestroy, BookAPIList, BookAPIUpdate, CategoryAPIList, BooksByCategoryView
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/alibrary-auth/', include('rest_framework.urls')),
    path('api/books/', BookAPIList.as_view()),
    path('api/book/<int:pk>/', BookAPIList.as_view()),
    path('api/books/<int:pk>/', BookAPIUpdate.as_view()),
    path('api/book_delete/<int:pk>/', BookAPIDestroy.as_view()),
    
    path('api/category/<int:pk>/', BooksByCategoryView.as_view()),  
    
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)