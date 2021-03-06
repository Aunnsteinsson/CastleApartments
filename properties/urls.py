from . import views
from django.urls import path

urlpatterns = [
    path('', views.properties, name="properties-index"),
    path('search/', views.properties, name="properties-index"),
    path('<int:id>/', views.get_property_by_id, name="property_details"),
    path('<int:id>/payment-info/', views.payments, name="payments"),
    path('<int:id>/review-order/', views.review_order, name="review_order"),
    path('<int:id>/make-offer/', views.make_offer, name="make_offer"),
    path('create/', views.create, name="create_property"),
    path('<int:id>/edit/', views.edit_property, name="edit_property"),
    path('<int:id>/contact-info-buy/', views.contact_info_buy, name="contact_info_buy"),
    path('<int:id>/photos', views.edit_photo, name="edit_photo"),
    path('delete_photo/<int:id>', views.delete_photo, name="delete_photo"),
    path('delete_offer/<int:id>', views.delete_offer, name="delete_offer"),
    path('receipt/<int:id>', views.receipt, name="receipt"),
]