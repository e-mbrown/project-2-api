# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Incomplete

## Project Description

This portion of the project is an api that will handle the image data storage. It will catergorize by type, which is its own schema, and deliver the image based on request sent.

## Google Sheet

Include link to your google sheet here.  Here is the sample [Suresh had used in class](x) 

## Time/Priority Matrix 

Include a full list of features that have been [prioritized](https://res.cloudinary.com/doaftkgbv/image/upload/v1583773146/ValueVSComplexity_u2inhx.png) based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Have 4 schemas in the model folder
- Have a seed.js file that populates with around 4 artworks of each type
- CRUD routers and controllers
	-Find by specific type 
- Use muller and express to allow for uploading of files
- interact with simple GUI




#### PostMVP 

- Add a user model and functionality
 - Gui for image 
- interact with Complex Gui

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Schemas | H | 3.5hr | 1hr 16mins |  1hr 16mins |
| Seed.js | M | 2.5hr | -hr 36mins | -hr 36mins|
| Routers + Controllers | H | 5hr | 1hr | 1hr|
| Testing Routes | H | 6hr| 2hr 59mins | 2hr 59mins |
| Learn and set up Multer | M | 4hr | 2hr | 2hr |
| Testing Upload Feature | H | 4hrs| 2hr | 2hr |
| Using AWS with Heroku | H | 4hr | 6hr | 6hr|
| Total | H | 29.0hrs| 15hrs 51mins | 15hrs 51mins |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Add Schema | L | 1hr | -hr | -hr|
|Interaction with complex gui | L | 6hr | -hr | -hr|
| Total | H | 7hrs| -hrs | -hrs |

## Additional Libraries
Muller.js
aws-sdk
ejs
Express
Mongoose
Morgan
## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
//Its not a lot but making this work made my whole project possible.
discriminatorKey: 'artType'
const comicexport = Pieces.discriminator('Comic', comicSchema)
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### I didnt have many issues
**ERROR**: Pieces.discriminator() is not a function                             
**RESOLUTION**: I spelled discriminator wrong, and had to rename the key.

