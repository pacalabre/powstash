To Do:
git ignore done
Write Models
Add Mongo
Create Databases (Users, saved resorts)
Create and attach Sign Up button to database
Create and attach Sign In
Create and Style sign up page
If signed in, you see menu, if not you see sign up / login
Add ability to add resorts to My Resorts
Add ability to remove resorts from my resports
Add in new API
Hash the new API (dont add to github)
Add to Heroku


Stretch goals/add ons:
instagram API
trail map API
Add in google maps API
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
    mtn base:"200 inches",
    last 24 hrs: "2-3 inches",
    last 48 hrs: "4-6 inches",
    next 24 hrs: "1-2 inches",
    next 48 hrs: "3-4 inches"
  }
]

 array of strings, less than 15.

 http://api.worldweatheronline.com/premium/v1/ski.ashx?key=bc90f90bd0c24c27b4a231444162204&q=Mount+baker,wa&format=JSON
