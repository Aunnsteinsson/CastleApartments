from . import views
from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView


urlpatterns = [
    path('login/', LoginView.as_view(template_name= 'users/login.html'), name='login-page'),
    path('about-us/', views.about_us, name='about-us'),
    path('password-reset/', views.reset_password, name='password-reset'),
    path('staff/', views.front_page_staff, name='front-page-staff'),
    path('my-profile/', views.my_profile, name='my-profile'),
    path('admin/', views.front_page_admin, name='front-page-admin'),
    path('register/', views.register, name='register'),
    path('search-history/', views.search_history, name='search-history'),
    path('logout', LogoutView.as_view(next_page='login/'), name='logout'), #TODO: breyta next page ef ekki virkar
    #path('my-properties/<int:id>/', views.my_property, name="edit_property"),
    path('edit/', views.edit, name="edit"),
    path('<int:id>/', views.seller_profile, name="seller_profile"),
    path('notifications/', views.notification, name="notifications"),
    path('my-inbox/', views.my_inbox, name="my-inbox"),
    path('accept_offer/<int:id>', views.accept_offer, name="accept"),
    path('delete_castle/<int:id>', views.delete_castle, name="delete_castle"),
    path('verify_castle/<int:id>', views.verify_castle, name="verify_castle"),
    path('message/<int:id>', views.read_message, name="read_message"),

]
