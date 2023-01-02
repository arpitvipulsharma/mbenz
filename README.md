# Software Factory Coding Challenge Solution by Arpit

## Introduction
Hi, I hope you are doing well and had a good start to the new year. First of all, Many thanks for providing the interesting task. It was nice to go through it. I really appreciate your help in explaining the problem :pray:. I am trying to summarize this journey here. If needed, feel free to reach me with questions.

## Assumptions
* For this task, I kept a limited number of users from page 1 and page 2.

## Prerequisite for solution to work
* Github Account(Github actions, Github pages)

## Deployment steps
![myfile](https://user-images.githubusercontent.com/52455330/139071980-91302a8a-37b1-4196-803e-f91b1de2ee5b.gif)
* Please follow this repository to get idea for the deployment with Github actions.
* For testing the solution, please try to reach the following URL:
[here](https://arpitvipulsharma.github.io/mbenz/)


## Important Points
* I have used here Github for end-to-end solutions. GitHub actions and Github pages are really helpful here.

## Approach to solution
* Initially, I kept the problem statement very small, just fetching the data from API and inserting it in html. I tried it on my local system.
* After finishing the basic code, I jumped over the Github actions and Github pages. It was the easiest part for me as I have experience with CI/CD tools and other cloud-native tools.
* At last, I approached the Unit test part. It was most difficult for me as I don't have much experience with TDD. I know that writing the test should be 1st step that helps you to write code much better. I was doing other way around:grimacing:. 
* Following URLs helped me in this journey :)
    * https://stackoverflow.com/questions/68049447/how-to-call-for-json-output-from-an-api-into-html
    * https://www.w3schools.com/html/html_tables.asp
    * https://bobbyhadz.com/blog/javascript-map-is-not-a-function
    * https://medium.com/@danieljimgarcia/publishing-static-sites-to-github-pages-using-github-actions-8040f57dfeaf
    * https://xa1.at/jest-plain-webpage/
    * https://javascript.plainenglish.io/testing-vanilla-javascript-with-jest-8a7eaca80d40
    * https://medium.com/swlh/jest-and-github-actions-eaf3eaf2427d
    * https://mattermost.com/blog/get-started-with-javascript-unit-testing/
    * https://github.com/rstacruz/mocha-jsdom/issues/36
    * https://stackoverflow.com/questions/16633246/code-coverage-with-mocha
    * https://zditect.com/blog/53818755.html
    * https://stackoverflow.com/questions/16633246/code-coverage-with-mocha

    
## Problem faced during the solution
* During writing the unit test, got stuck with HTML DOM Document(referenceerror: document is not defined). Here I used jsdom library to solve the issue.
* Initially, I started writing the unit test with jest, but I got stuck with importing the modules(SyntaxError: Cannot use import statement outside a module). Unfortunately, even after trying out several things, it didn't work for me. I had to switch to the mocha framework. 

## Improvements
* Need to remove commas from the tables.
* Need to check some dynamic ways to fetch json apis.
* Unit test still need improvements regarding 100% coverage.

## Duration
* ~6 Hours

# Thank you 
![alt text](./EAVWeTEU0AA3ini.jpg)