
To Do:
git ignore --done
Write Models --done
Add Mongo --done
Create Databases (Users, saved resorts) --done
Create and attach Sign Up button to database --done
Create and attach Log In page -done
Create and Style sign up page -- done


Add in new API's:
  - yelp
  - geolocation

Add ability to add resorts to My Resorts
Add ability to remove resorts from my resorts

If signed in, you see menu, if not you see sign up / login

Add to Heroku

Stretch goals/add ons:
Add in google maps API - distance



flickr API
find closest resort

Add tags

models :

Users:

id: integer
firstname : string - less than 20
lastname: string - less than 30
email : string - longer than 8
password :  password - longer than 4, less than 12


User-resorts:
id: integer
resorts: [
  {
    mtn name: "Mount Baker",
    current temp: "integer"
    temp high: "integer",
    temp low: "integer",
    Icon: "url",
    Weather Desc: "string",
    total snow: float
  }
]

 array of strings, less than 15.

 http://api.worldweatheronline.com/premium/v1/ski.ashx?key=bc90f90bd0c24c27b4a231444162204&q=Mount+baker,wa&format=JSON
