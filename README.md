# Weather NAPP #
The Weather NAPP app is a **weather website** developed in Vue.js that displays weather data for a selected location using an external API. The application follows the criteria and requirements specified in the selection test for the position of Frontend programmer.

#### Note to reader ####

This document provides a detailed description of the structure and components of the Weather NAPP application. If you have any other questions or need more details about a specific aspect of the app, don't hesitate to ask.

### Index
1. [Project requirements](#project-requirements)
2. [How to run the aplication](#how-to-run)
3. [APIs and Libraries](#apis-and-libraries)
4. [Design](#design)
5. [Main Files](#main-files)
6. [Other Files](#other-files)

    6.1. [Views](#views)

    6.2. [Router](#router)

    6.3. [Controllers](#controllers)

    6.4. [Assets](#assets)

    6.5. [Components](#components)

8. [Summary](#summary)




## Project requirements: ##
1. Use an API that provides weather data
2. The location must be easy to change
3. A page will be displayed with the detailed prediction for the next 24 hours
4. A page with the weekly prediction will be displayed
5. A modal must be displayed that notifies the user that they have reached the limit of free to use after 5 searches, showing link for premium subscription

### Bonus track ###
1. Customizable app theme
2. Responsive design
3. There is a packaging script for the deployment of the application

## How to run ##
I have provided the application with a startup script, you only need to execute the script "initScript.sh" to see the application running.


´´´ bash
./initScript.sh
´´´

When you're done viewing the app, just press Ctrl + C to exit the preview.

## APIs and Libraries
### Used APIs:

IP Geolocation - IPWHOIS.io

WeatherAPI.com - Realtime Weather and Forecast Weather API

### Used libraries:

Bootstrap Icons

public-ip

## Design
### UX/UI

This is a modern and minimalist user interface designed to provide essential information to the user at a glance. The concept is to streamline information so that users can find intuitively what they need in less than 10 seconds. This is achieved primarily through the use of symbols and colors that are mentally associated with specific information.

### Theme Customization - Light/Dark Mode
- **Automatic Theme Selection**: It automatically adapts to light or dark themes based on user preferences (`prefers-color-scheme: dark`). This ensures a pleasant and personalized visual experience.

### Responsive Design
- **Optimized for Mobile and Desktop Devices**: The application is responsive, delivering a consistent and visually appealing user experience across various screen sizes, including mobile devices and desktops.

## Main Files

### 1. **index.html**

The `index.html` file serves as the main entry point for the application. Contains document metadata and links to necessary libraries, such as Bootstrap Icons. Additionally, it sets the main container (`<div id="app"></div>`) and loads the main script (`main.ts`) to start the Vue.js application.

### 2. **App.vue**

The `App.vue` file is the main component of the application. From this file we can highlight:

- **Imported Components**: Imports various components, including `HeaderComponent`, `FooterComponent`, `NavBar`, and `ModalComponent` for use in the application.

- **Modal Logic**: Uses Vue 3 Composition API to handle the modal logic. Displays a modal when the number of searches reaches the limit of 5. The modal includes a message indicating that the free search limit has been exceeded.

- **Structure and Styles**: Defines the main structure of the application, including header, sections and footer. Styles are defined in a modular way and are applied specifically to the elements of the component.

## Other files

### Summary 
#### **External Components**

- **HeaderComponent.vue**: This component represents the header of the application.
- **FooterComponent.vue**: This component represents the footer of the application.
- **NavBar.vue**: This component represents the application's navigation bar.
- **ModalComponent.vue**: This component represents the modal that is shown to the user when the free search limit is exceeded.

#### **Controllers**

- **menu-controller.ts**: This controller manages the open/close state of the navigation menu (`opened`).
- **weather-api.ts**: This controller handles calls to the weather data API and keeps track of the number of searches performed (`searchs`).

### Views

#### **HomeView.vue**

The `HomeView.vue` file defines the main view of the application. The current weather forecast and hourly and weekly forecasts are highlighted here. The keys are the following:

- **Imported Components**: Imports the `CurrentWeather`, `HourlyWeather`, and `WeeklyWeather` components to display current, hourly, and weekly weather information respectively.

- **Structure and Styles**: The main view is structured with a main container (`<main>`) that contains the `CurrentWeather` and `HourlyWeather` components for large devices (`big-screen`). Additionally, the `WeeklyWeather` component is displayed on all devices. CSS is used to handle the visibility of components depending on the screen size. The `HourlyWeather` and `WeeklyWeather` components are hidden on small screens (`display: none`) and shown on large screens (`display: unset`) for a responsive experience.

#### **HourView.vue**

The `HourView.vue` file displays only the `HourlyWeather` component. This view focuses on providing hourly weather forecasts to users. The structure has been simplified to show this specific information.

- **Imported Components**: Imports the `HourlyWeather` component to display hourly weather forecasts to users.

- **Structure and Styles**: The view is made up only of the `HourlyWeather` component. The structure has been simplified to focus on displaying hourly weather forecasts. The styles and layout have been adjusted to the needs of this specific view.

#### **SubscriptionView.vue**

The file `SubscriptionView.vue` represents the view that will be shown to users (currently under construction, as it is not a requirement for this project). This view contains a message indicating that the page is under construction and provides a button to return to the home page.

- **Content and Styles**: The view displays a construction icon, a message indicating that the subscription page is under construction, and a button that redirects users back to the home page. Styles have been applied to center the content vertically and provide an attractive design to the button.

#### **WeekView.vue**

The `WeekView.vue` file displays the `WeeklyWeather` component, allowing users to view the weather forecasts for the entire week.

- **Imported Components**: Import the `WeeklyWeather` component to display weekly weather forecasts to users.

- **Structure and Styles**: The view consists solely of the `WeeklyWeather` component, which provides a detailed view of the weather forecasts for the week. The styles have been adjusted to the needs of this specific view to ensure a clear and easy-to-understand presentation of the weekly information.

### Router

#### **index.ts**

The `index.ts` file in the `router` folder defines application routes using Vue Router. Now, the routes are configured to display the different views of the application: `HomeView`, `HourView`, `WeekView`, and `SubscriptionView`. These routes allow users to easily navigate between different sections of the application.

- **Import and Configuration of Routes**: Imports the views `HomeView`, `HourView`, `WeekView`, and `SubscriptionView` and associates them with specific routes. Each route has a name and an associated URL route.

### Controllers

#### **menu-controller.ts**

The `menu-controller.ts` file now exports the `opened` variable, which is used to control the state of the menu (navBar) in all views. Changing the value of `opened` opens or closes the navigation menu in all application views.

#### **weather-api.ts**

The `weather-api.ts` file contains logic to interact with the Weather Forecast API and obtain the user's location using their IP. It also handles location updating and provides weather data.

- **API Functions**: Contains functions like `fetchWeather(location: string)` to get weather data and `getLocation()` to get the user's location through the public IP.

- **Reactive Variables and Controllers**: Exports reactive variables such as `location`, `loading`, `error`, `weather` and `searchs`, which are used in the application to display weather information and control the status of the application. search.

- **Automatic Location Update**: Use the `updateLocation()` function to keep the user's location updated.


With these controller features and route settings, the app can handle user navigation, retrieve weather data, and display updated information based on the user's location.

### Assets

#### **base.css**

The `base.css` file defines the color palette used in the application and sets CSS variables for various elements. The variables `--color-background`, `--color-text`, `--color-accent`, etc., are used to maintain a consistent color palette throughout the application.

- **Custom Color Palette**: CSS variables have been defined for the main colors and have been used throughout the application to ensure coherence and visual consistency.

- **Dark and Light Themes**: Specific variables have been established for dark and light themes. The app automatically adjusts based on user preference (`prefers-color-scheme: dark`) to ensure a pleasant viewing experience.

#### **main.css**

The `main.css` file imports the `base.css` file and defines specific styles for different weather conditions and temperatures (for example, sun, clouds, rain, snow, night, minimum and maximum temperatures). It also sets styles for links (`a`) and defines responsive layout rules for larger screens (over 1024px wide).

- **Styles for Weather Conditions**: Specific styles have been defined for different weather conditions, such as sun, clouds, rain, snow and night. This allows weather conditions to be visually represented in the user interface.

- **Styles for Minimum and Maximum Temperatures**: The `min` and `max` styles have been defined to visually represent the minimum and maximum temperatures respectively.

- **Link Styles**: Link decorations (`text-decoration: none`) have been removed to improve readability and specific styles have been defined for links within the application.

- **Responsive Design**: Responsive design rules for large screens (more than 1024px wide) have been defined to adjust the appearance of the application on larger devices.


### Components

#### **ContainerComponent.vue**

The `ContainerComponent.vue` component represents a flexible container used as a wrapper for other elements in the user interface. This component is used to provide a uniform and consistent layout throughout the application.

- **Container Style**: The container has CSS styles defined to set the background, text color, border radius, padding and other properties. Additionally, flexbox is used to center elements both horizontally and vertically.

#### **CurrentWeather.vue**

The `CurrentWeather.vue` component represents the current weather information section in the user interface. It contains details about the current temperature, city, country, humidity and wind speed. This component also handles loading and error states.

- **Redirect Functions**: A `redirectToHourly` function has been defined that redirects the user to the hourly forecast view when clicking on the component.

- **Styles and Responsive Design**: Styles have been defined for different screen sizes and responsive design rules have been applied to improve appearance on large and small devices.

#### **FooterComponent.vue**

The `FooterComponent.vue` component represents the footer of the application, which offers users the option to enhance their experience through premium subscription. Includes a message and a button that redirects users to the subscription page.

- **Container Style**: The footer container has CSS styles defined to set the background, text color, border radius, padding and other properties. Flexbox is also used to align elements both horizontally and vertically.

- **Subscription Button**: A button has been defined that redirects users to the subscription page when clicked.

#### **HeaderComponent.vue**

The `HeaderComponent.vue` component represents the top navigation bar of the application. Allows users to open the menu and search for locations. It also counts the number of searches performed.

- **Search Functionality**: The search input captures the model value and uses it as the location for weather queries. Clicking the search button or pressing "Enter" performs the search.

- **Styles and Responsive Design**: Styles have been defined for different screen sizes. The navigation bar looks different on large and small devices for an improved user experience.

#### **HourlyComponent.vue**

The `HourlyComponent.vue` component displays hourly weather information in the application. It presents the time, an icon representative of the weather and temperature for each hour of the day.

- **Content Structure**: Loops are used to display hourly weather information. Each element has an icon, temperature and respective time.

- **Styles and Responsive Design**: Styles have been defined to ensure proper presentation on different devices. Elements are aligned and spaced appropriately to improve readability and visual appearance.

#### **IconComponent.vue**

The `IconComponent.vue` component is responsible for displaying weather icons corresponding to the current weather conditions, hourly and daily. It is used to provide a visual representation of the weather in different parts of the application.

- **Props and Conditions**: The provided properties are used to determine which icon to display based on weather conditions. Conditions include "Clear", "Sunny", "Cloudy", "Rain" and "Snow".

- **Different Sizes**: Different font sizes are defined for the icons, allowing larger icons to be displayed for the current weather condition and smaller sizes for hourly and daily forecasts.

#### **ModalComponent.vue**

The `ModalComponent.vue` component represents a modal in the application. This modal is used to display additional information or to redirect users to the premium subscription page.

- **Structure and Styles**: A modal container is used that is centered on the screen. The content of the modal is displayed in a separate container. When the user clicks "GO PREMIUM!", an event is emitted to close the modal.

- **Router-link**: `router-link` is used to redirect users to the subscription page when they click the button.

#### **NavBar.vue**

The `NavBar.vue` component represents the application's side navigation bar. Contains links to the main sections of the app, including the home page, hourly forecast and weekly forecast.

- **Link Styles and Functionality**: Links are displayed as icons along with the text. Clicking a link closes the side menu for a better user experience.

- **Responsive Styles**: Styles have been defined to adapt to different screen sizes, ensuring a consistent appearance on large and small devices.

#### **WeeklyWeather.vue**

The `WeeklyWeather.vue` component is used to display the weekly weather forecast. Shows weather details for the next few days, including the maximum and minimum temperature, along with corresponding weather icons.

- **Automatic Data Update**: Like other components, this component is responsible for automatically updating the location and weather data.

- **Interface Structure**: Weather details are displayed in a grid layout, with each day of the week displaying its corresponding weather icon, maximum and minimum temperature. Elements are arranged in a column for small devices and in a row for larger devices, ensuring a consistent user experience across different screen sizes.

- **Responsive Styles**: Specific styles have been defined for devices with a maximum screen height of 700px. When these conditions are met, elements are placed in a row instead of a column, taking advantage of the available horizontal space.


# Summary

## Use of APIs
Weather NAPP employs external APIs to fetch precise weather data. The application interacts with a meteorological forecast API to display up-to-date weather information for the user's location.

## Application Functionality
- **Detailed Views**: The application provides detailed views for the current, hourly, and weekly weather forecasts.
- **Search Limitation**: It enforces a limit of 5 free searches, displaying a warning modal to the user upon reaching this limit.
- **Intuitive Navigation**: Users can seamlessly navigate between hourly and weekly forecast views and access detailed information about the current weather.

## Libraries/Frameworks Used and Best Practices
- **Vue.js 3**: Utilizes Vue.js as the core framework, leveraging the Composition API and advanced features of the framework.
- **Vue Router**: Implements Vue Router for seamless navigation between different views, enabling users to explore the application intuitively.
- **Consistent and Attractive Styles**: Utilizes modular CSS to maintain a consistent color palette, define responsive styles, and ensure an engaging user interface.

## Effectiveness of the Proposal
- **Compliance with Requirements**: The application meets all the specified requirements in the technical test, including key functionalities, responsive design, and theme customization.
- **Interactivity and User Experience**: Offers an interactive and engaging user experience, allowing users to easily access detailed weather information and navigate intuitively between different views.