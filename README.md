# Team20-Itinerary-Generator
CS4550 Final Team Project for creating itineraries using Yelp API

**The problem we are trying to solve:**

Planning a trip involves a great deal of planning and thought. Many people cannot afford to use travel agencies for booking their vacations, and instead use multiple tools to begin their planning and research process, such as Expedia, TripAdvisor, Yelp, etc. When aggregating data from multiple sources like this, it can be challenging to weigh all the reviews and use this information to plan their day-to-day activities. We plan to design an itinerary generating application that allows people to simply enter the duration of the trip they are planning, along with the kinds of activities they hope to do such as attractions to visit/entertainment/food and dining preferences/etc. Our application will consolidate all of the results and design an itinerary for users, based on such preferences.  


**Target Users:**

*Adult*

One target user of our application is an Adult who would like to plan a vacation. This can range from a college student planning a trip with friends to a working professional who might be trying to plan a trip for their family. College students are typically 18-22 in age, and might come into this application with a lower budget in mind than a working professional. College students might use our application for planning a trip itinerary with their friends. This might be a spring break trip or a long weekend trip to a new destination. They might want to create an itinerary for a 3-day trip and 1) get recommendations for various cheap drinking/dining options and 2) view the most highly rated attractions at their destination. On the other hand, working professionals may range in socioeconomic status and in ages, ranging from 30 - 60. Their trip-planning needs and interests might vary quite a bit from a college student, but essentially they would be using our application to plan a trip itinerary for their family. Working professionals typically have a set number of vacation days in a year, and tend to take them off in chunks if planning a family vacation. They might want to create an itinerary for a 7-day vacation and 1) get recommendations for family-style restaurants and dining options and 2) view the most highly rated family-friendly attractions at their destination. 

*Agent*

Another target user of our application is an Agent (who will have a different view from an Adult described above). An agent might be someone affiliated with a travel agency or external company that assists in travel bookings or scheduling itineraries. An agent is likely a working professional, and needs to be able to accomplish a number of tasks with our application. Agents need to be able to create a profile and obtain the results of one’s entries in the User form where they specify what they are looking for out of the trip they are using this website to help plan. 


**Overall strategy:**

The two major workflows involve a user that is logged in, and another user that is not logged in. The two views we will be considering include a consumer (adult, college student, etc.) view and a travel agent/travel company/business view. 
* Consumer View
   * A logged in user has a:
      * Name
      * Age
      * Location
      * Profile Picture
      * Email Address
      * Social Media Information
      * Favorites/Saved (saved itineraries)
   * The logged in user will be able to:
      * Search for an itinerary
      * Save itineraries to favorites
      * Print/email/share itineraries
   * The not-logged-in user will be able to:
      * Search for an itinerary
   * The search function will take in:
      * A location (trip destination) 
      * Start and end date
      * Number of activities the user wants to per day based on the user preferences below
      * User preferences:
         * Shopping
         * Nightlife
         * Sightseeing
         * Food
   * The search result will return:
      * An itinerary with:
         * Length of schedule based on days the user provided
         * Restaurants per day
         * Activities per day
         * Sharing and saving to favorites capabilities for logged in users
* Travel Agent View
   * A logged in user has a:
      * Name
      * Phone Number
      * Email Address
      * Company/Agency Name (that they might be affiliated with)
      * Profile Picture
   * A logged in user will be able to:
      * The ability to see itineraries created by users
      * Book those itineraries for the users
      * Contact users if they have any questions
      * Edit itineraries
      * Search users
   * A non-logged in user will be able to:
      * Do nothing (an agent who is not logged in should not have view access to any other user’s trip preferences) 
   * The search function will take in:
      * User ID or Username of customer
   * The search will return:
      * Itineraries linked with that user


**Web API we will use:**

The web API in use will be the Yelp API. This API can be accessed by signing up for a yelp account, which will then give us an API key to use to access the endpoint. We hope to use the location data to associate a recommended activity with a particular place or city. We also hope to use the activity (restaurant, bar, etc) title, description, and rating to generate an itinerary with top-rated activities. 


**Link to GitHub repo:**

https://github.com/rucha2398/Team20-Itinerary-Generator



