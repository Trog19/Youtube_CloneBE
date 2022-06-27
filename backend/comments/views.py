import pkg_resources
from .models import Comment
from .serializers import CommentSerializer
from models import Reply
from .serializers import ReplySrializer
from rest_framework.decorators import api_view  
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404



# one endpoint that gets all comments associated with one video id passed in through path


@api_view(['GET', 'POST'])
def comment_list(request):
    comment = get_object_or_404(Comment)
    if request.method == 'GET':
        serializer = CommentSerializer(comment, many=True)
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
def reply_detail(request, pk):
    reply = 
