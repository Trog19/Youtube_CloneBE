import pkg_resources
from .models import Comment
from .serializers import CommentSerializer
from .models import Reply
from .serializers import ReplySerializer
from rest_framework.decorators import api_view  
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404




@api_view(['GET', 'POST'])
def comment_list(request):
    video = get_object_or_404(Comment)
    if request.method == 'GET':
        serializer = CommentSerializer(video)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET', 'PUT', 'DELETE'])
def comment_detail(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'PUT':
        serializer = CommentSerializer(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    elif request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def get_video_comments(request, video_id):
    video_comments = Comment.objects.filter(video_id=video_id)
    serializer = CommentSerializer(video_comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

