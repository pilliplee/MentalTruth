import falcon
import json
import sys
from twee import MentalTruth

class get_score(object):

    def __init__(self):
        self.mental_truth = MentalTruth()
        print('hello')

    def on_get(self, req, resp):
        msg = {
            'works?': 'YEAH POST WORKS !!'
        }
        resp.body = json.dumps(msg)
        resp.status = falcon.HTTP_200
        print(resp.status)

    def on_post(self, req, resp):
        # print('post')
        # resp.body = json.dumps("yeah we can post")

        data = req.stream.read(req.content_length or 0)
        json_data = json.loads(data)

        twitter_handle = json_data['twitter_handle']

        result = self.mental_truth.iterate_twitter(twitter_handle)
        result = str(result)

        resp.status = falcon.HTTP_201
        msg = {
            'sentiment_polarity': result
        }

        resp.body = json.dumps(msg)