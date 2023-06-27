from requests import post
from time import time
import random

random.seed(time())

resp = post('https://ec2-16-170-250-165.eu-north-1.compute.amazonaws.com/api.php', verify=False, data={
    'token': 'eyJraWQiOiJsSmpGb0tCNks0Q0pGYUlMK09iNWdlWk1RTUhUWkNVWmtzbXA0M00xV0FVPSIsImFsZyI6IlJTMjU2In0',
    'id': 2,
    'value': random.random() * 5 + 17.5
})

print(resp.content)