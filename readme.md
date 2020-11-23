# Krafty
## Experience the lifestyle<br><br>

<h3><b><u>Introduction</h3></b></u>
We all love doing shopping. This pandemic has made it difficult to go to a mall and shop. But no matter what, the style must go on and we respect that. So here we are, the best fashion centric e-commerce website with variety of choices. You choose from the best of the products and we deliver it to you, fast and safe right at your doorstep. <br><br>

<h3><b><u>Problem Statement</h3></b></u>
<li> The covid-19 pandemic has impacted the fashion industry. Their sales have dropped as malls are closed and people don't trust the authenticity of the other online sales
<li> Most of the e-commerce applications either try to show you a lot of advertisements after you see their products or track your data and use it to manipulate you.
<li> It is diificult for a user to store some products in the wishlist(cart) and buy them later on. 
<li> User interface of the e-commerce apps are complex and a new naive user finds him lost in the website with a lot of buttons to click.<br><br>


<h3><b><u>Solution</h3></b></u>
<li> So we come up with our own e-commerce app "Krafty". A simple, elegant website on which you can shop quickly and easily and browse through hundreds of products.
<li> We know that security of your account matters and so we came up with a user-friendly authentication system. Simple to sign up for new users or login for existing user.
<li> Products have simple two options, either add them to cart or buy them right away. An user friendly product display from which a user can select the product.
<li> An updatable cart system, where you can update the quantities of product, remove products or add new products and see changes in the total billing amount in real time.
<li> An easy to checkout option. Before checking out have a complete idea about the breakage of the billing amount, rate and amount of every product, with the shipping charges and tax information.<br><br>


<h3><b><u> Key Features </h3></b></u>
<li><b> Authentication</b><br>
Krafty has an amazing authentication system where a existing user can login to the same state where he left. Login requires just your email address and the password. New user can sign up with your email, other user information and create a new password through which user can login.

<li><b> Product Display</b><br>
Krafty has a user friendly product display system. Every product has perfect sized image of the products along with price of the product. User has an option to add that product into the cart or checkout by buying that single product.

<li><b> Interactive Cart </b><br>
Krafty has a interactive cart. User can change the quantity of the products in cart, remove the products, add new products and see the changes in the amount in real time. Cart saves the state of the user, so refreshing the page, closure of session does not impact the items within cart. User can logout and after logging again he can resume from same state. <br><br>

<h3><b><u> Note to the developers :</h3></b></u> 
<h3><b> To run/ Setup on your local system </b></h3>
<li> Clone this git repository using below command:

`git clone https://github.com/manjotsinghbagha/HackAce.git`

<li> Change your current directory by using the command:

`cd e-commerce`

<li> You must see two folders named and a readme file

`backend` <br>
`frontend` <br>
`readme.md`

<li> Create two sessions of the terminal in the vscode or from the folder "e-commerce"<br>

<u>Session 1</u>
<ol><li>In session one of the terminal change the current directory to "e-commerce/backend" by using the command :

`cd backend` <br>
<li>In session one of the terminal execute the following commands one at a time:

`npm install dependencies` <br>
`node app.js` <br>

<li> If everything is done perfectly than you must see amessage 

`Connected to db at port 3000` <br>
this means your database is connected and your backend is ready.</ol>

<u>Session 2</u>
<ol><li>In session two of the terminal change the current directory to "e-commerce/frontend" by using the command :

`cd frontend` <br>
<li>In session two of the terminal execute the following commands one at a time:

`npm install dependencies` <br>
`npm start` <br>

<li> If everything is done perfectly than you must see a message that your app is compiling and is visible at port localhost:4200 this means your angular is compiled and live and your frontend is ready.</ol>

2.) Download model to main directory from link: https://drive.google.com/drive/folders/1ItbzWmwGfkK4agVlVYYF7PrewPwPZwce?usp=sharing                                    
2.) Create a virtual environment in python and run following
```bash
pip install -r requirements.txt
python manage.py runserver
```
Congratulation you are all set :partying_face:

## Problem solved and Solution:

### Problem

1) COVID-19 : In the current scenario of COVID-19 it is extremly difficult to take your diseased pet to consult a vet. The more people come in contact, the more chances of you getting the disease. 
2) Unaffordable bills: All of us who have pets know that medical care for pets is highly costly and some people won't be able to afford that. High consultation charges makes monthly checkup of pets less probable and this is not even thought of.
3) Travelling pain: Your pet might not love the polluted air on city roads. Pets get irritated while owners are taking them outside to consult a vet. Pets need to rest if they are diseased.
4) While waiting for the turn, your pet will come in contact with certain another animals who might have  contagious disease and there is a chance that your pet might catch some serious disease due to it.
5) Monthly checkups for human are a known term, but by using our application people can do monthly checkup of their pets and that cost free.


### Solution:

VetAce is a web based app solution in which a user can:  
  1) Click the pic of pet.
  2) Upload to our website.  
  3) Our Web app uses AI that will predict the disease from the picture you uploaded.  
  4) As an output you will see the disease name, description of the disease, steps to take care of your pet, pre treatment steps, medicines that are needed to be given and somehyperlinks which you can refer to cure the disease.   
  5) If our AI thinks that the disease is pretty serious, it will suggest you to visit the vet as soon as possible.
  6) We have a subscription model, if you are our subscriber we will provide opinion of vet. 
 


### Machine learning part

We had trained a Multi Class Classifier Convolution neural network model over 5 broad categories (Hair loss, Loss of Apetite, Ticks, patches on body, watery eyes).  The model is trained over 75 epochs, Adam optimizer with 0.001 learning rate and used 6 layered CNN. We had trained 2 different models, one for Dogs and other for cats. Further we could scaled it to as many disease and animals as we want. In future we can train the machine learning model with more number of images so that the prediction accuracy of the model improves.  

Currently we can classify the diseases in animal in 5 categories but later on we can use more data and computational power to train a better model which can
classify more diseases with respect the different animals.  

Along with this application is full of information. It provides the user with all the information related to the diseases commonly found in domestic animal(cat and dog).  


## Market feasibility and Buisness model
This website/software can generate revenue through these models:

### Software as a service Model for Vet
The software or website will be given as a service to various veterinary doctor to track development and improvement in animals of their potential coutomers.
VET can look after them regularly with physical meeting and can provide with the best treatment possible. they can provide suggestions to owner how they can look after and cure the disease in minimal time. through our portal.  
We will use django-tenant-model to register every VET as a tenant and every tenant will have his/her private patients.  
This dieticians will be asked to pay for our service.

### Advertisement Model
Here we could advertise some shops from where pet goods, medicine or curing material could be bought and also could promote specific VET on basis of their subscription and requirement.

## Video link for demo
https://youtu.be/7Z6bN4EeqvM

## Screenshots
<div display=table; clear=both class="row">
<img src="screenshot/01.jpg">
<img src="screenshot/02.jpg">
<img src="screenshot/03.jpg">
<img src="screenshot/07.jpg">
<img src="screenshot/04.jpg">
<img src="screenshot/05.jpg">
<img src="screenshot/06.jpg">

</div>

### Made with love from:
<br>
Team CreatorsSquad

