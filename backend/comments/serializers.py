from rest_framework import serializers  
from .models import Comment
from .models import Reply


class CommentSerializer (serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['user', 'video_id', 'text', 'likes', 'dislikes']

class ReplySrializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['user', 'comments', 'text']