# from django.db import models
from mongoengine import Document, fields

# Create your models here.

# class City(Document):
#     regionGrpCd = fields.StringField(max_length=10)
#     regionGrpNm = fields.StringField(max_length=10)
#     createDt = fields.DateField(auto_created=True)
#     updateDt = fields.DateField(auto_now=True)
#     userNo = fields.IntField()
#     regions = fields.ReferenceField('District')

# class District(Document):
#     regionCd = fields.StringField(max_length=10)
#     regionNm = fields.StringField(max_length=10)
#     regionGrpCd = fields.StringField(max_length=10)
#     createDt = fields.DateField(auto_created=True)
#     updateDt = fields.DateField(auto_now=True)
#     explainText = fields.StringField(max_length=100)
#     userNo = fields.IntField()
#     fileId = fields.IntField()
#     edbsregionCd = fields.StringField(max_length=100)


class regionInfo(Document):
    rowNum = fields.IntField()
    regionCd = fields.StringField(max_length=10)
    regionNm = fields.StringField(max_length=100)
    level = fields.IntField()
    upperRegionCd = fields.StringField()
    edbsRegionCd = fields.StringField()
    status = fields.StringField()
    description = fields.StringField()
    createDt = fields.DateField(auto_created=True)
    updateDt = fields.DateField(auto_now=True)
    userNo = fields.IntField()
    dongCd = fields.StringField()
    countLower = fields.StringField()
    regions = fields.ReferenceField('regionInfo')

    def __str__(self):
        return self.regionNm

