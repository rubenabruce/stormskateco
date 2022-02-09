# Storm Skate Co

Storm Skate Co is an e-commerce store specialising in street clothing made with React.js, Redux, Node.js, Firebase and more.

Live version hosted at - [Storm Skate Co](https://storm-skate-co.herokuapp.com/) - please be aware that its a sleeping server so will take few seconds to turn on.

## Contents

1. [ Introduction ](#introduction)
2. [ Technologies ](#technologies)
3. [ Setup ](#setup)
4. [ Features ](#features)
5. [ Status ](#status)

## Introduction

Storm Skate Co is a local street clothing company based in Brighton. They first started creating highly edited skate videos and are now producing clothing at a local scale, however they want to become more global. Storm fits a very specific aesthetic, making use of high contrast, glitching effects and a nostalgic, almost retro feel. From talking to the clients they made it clear that they wanted the website build upon the "Storm" aesthetic.

My goals were to:

- Create an aesthetic, intuitive UI whilst following the styles of Storm
- Cater to all users with a robust UX
- Optimise code and assets in order for fast loading times
- Have great communication with clients
- Implement good practises with clean readable, reusable code

## Technologies

Languages, libraries and tools I used:

- Javascript
- React.js - 17.0.2
- Redux - 4.1.2
- Node.js - 9.11.1
- Express.js - 4.17.2
- Styled-components - 5.3.3
- Stripe - 8.195.0
- Firebase - Firestore and storage - 9.6.0
- Reselect - 4.1.5
- Other small libraries/dependencies

## Setup

To run this project locally, install and using npm:

```
$ cd /stormskateco
$ npm install
$ npm run dev
```

This will concurrently start the server and the client side code.

## Features

- Loader and error boundary

  When routing a page it will go through an error boundary which will catch any routing errors and direct the user to a custom 404 page which encourages the user to navigate back to main site.

  The loader wheel appears when retrieving the files/assets for a page since I have lazy loaded all pages in order to aid performance.

- Homepage

  The client asked for a striking first impression, something which both fits their aesthetic whilst leaving an impact on the customer. After a bit of to and fro we decided on the current homepage, I mentioned the performance loss from all the videos on the homepage however decided it was worth the compromise. I had to do a lot of work with the assets through optimisation and compression. I tried to take inspiration from they're skate videos and used they're technique of inverting when the mouse hovered over the assets.

- Shop-page

  The client asked for a clean and simple UI for the shop-page which is why I came up with a simple 3 column grid without any extra features such as filtering and sorting. The clients said that they'll sell through drops so there won't be huge amounts of clothes on the website at any point.

- Item-page

  Similarly with the shop-page, the client asked for a clean and simple UI.

  I used a component called `react-awesome-slider` to present the images in a simple and effective manner.

  I continued the inverting technique for buttons and inputs through the item details page to improve UX whilst sticking to the "Storm" aesthetic. I made the item details section sticky to aid UX. The quantity selector and size selector a reusable components. The button is also a reusable component.

  Below the item yet just in view is the "other garms" section which refers the customer to other Storm products to ease the navigation of the site and perhaps aid sales.

- Cart-slider

  The cart slider uses a black background to be in stark contrast with the shop page to follow "storm" aesthetic. It is only accessible when there is either something in the cart and it must be in one of the shop pages. The cart tab also indicates how many items are in the cart. This is done through Redux.

  Within the cart slider it contains the cart item which give the options to increase or decrease the quantity or to remove entirely. Underneath the cart items is the checkout button which send the data from the cart to the Stripe checkout API which then responds with redirecting the user to the URL of the checkout session.

- Video page

  Simple and effective. This page uses a dark theme to focus the customer on the videos. In the future I will set up an API call through the YouTube API which will get all videos from a certain playlist on their YouTube channel and display them in order on this page.

- Header

  The header continues with the spinning assets to add dynamic movement to the page whilst keeping the retro feel. The header inverts when on any shop page and reverts when on the video page. Its a simple header with only three links as the client desired.

- Footer

  Storm has quite a following on Instagram and YouTube which they use to interact with customers so I thought it necessary to link it in the footer. Again a simple component but effective and fitting with the aesthetic.

- Stripe checkout

  I used the prebuilt checkout that Stripe offers to deal with the payment flow since it has been tried, tested and is very secure. It's a relatively simple process of sending the data from the client to the server which then creates a session with Stripe who responds with a redirection URL which takes the user to the checkout page. From there stripe securely handles collecting the card and shipping details. After all details are collected, Stripe will receive the transaction and report it's status. From there you can use a webhook to deal with the status whether that be forwarding customer to success page or letting them know that their card failed.

## Status

This project can be found at [Storm Skate Co](https://storm-skate-co.herokuapp.com/) - please be aware that its a sleeping server so will take few seconds to turn on.

This website is almost finished and will be hosted live in production. I have been in discord with Storm and believe there will be more future additions.
