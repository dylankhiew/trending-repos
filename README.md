# Trending Repo App

This project is a React Native project which allow users to check out the trending Github repos at the moment. Here are some of the features of the app:

- Shows 25 of the most trending GitHub repos.
- Loading state when it's fetching the repos.
- Error state is shown when the endpoint is down/failed to fetch. Users can click on the Retry button to re-attempt to fetch the repos.
- List of items will be shown, and when clicked can be expanded to further show more details (forks, stars and language used)
- Supports for landscape and potrait mode
- Offline support (once the data has been fetched, it will persist for two hours)
- Supports pull to refresh to force fetch the trending repos.

#### Developer Note:

- This project was initialised with Expo and uses TypeScript.
- Since it was built with extensibility in mind, the state management that I went with is Redux as well as Redux Saga as the middleware. All information like the trending repos, last updated date is stored and persisted in the async storage.
- React Navigation is used as well for proper navigation in the future.
- ESLint is configured to ensure that the project is kept up to date to coding practices.
- Jest is setup for snapshot testing of the `/components` folder as well as the Redux state, reducers and selectors for an expected predictability.

---

### Running Locally

1. After cloning the repo, we should install the dependencies:

```
npm install
```

2. Then, we can get it running:
```
npx expo start
```

3. To run the test script, we can use:
```
npm run test
```

3. For lint checking, we can use:
```
npm run lint
```

---

### Showcase

<img src="https://user-images.githubusercontent.com/16792330/223107955-be8a4f13-9e64-4bc7-b6fa-5d8a0dd09cba.gif" width=350 />


#### Loading state
<img src="https://user-images.githubusercontent.com/16792330/223104944-bcd425a3-7ed2-49bc-b0ef-73772bb31740.png" width=350 />


#### Error state

<img src="https://user-images.githubusercontent.com/16792330/223106545-249451f3-583f-4ca0-9280-30e3458ae35c.png" width=350 />

#### Content

<img src="https://user-images.githubusercontent.com/16792330/223106910-4298479d-ea80-40a3-916c-5eea18840c19.png" width=350 />

#### Item expanded

<img src="https://user-images.githubusercontent.com/16792330/223107051-06014aa8-b70d-4ecd-be45-0322026dfdb5.png" width=350 />

---

### Thoughts and Limitation

1. To achieve the accordion list, I added a library called `react-native-accordion-list-view`, but there was a limitation to that library. I was not able to add the shadow styling for when an item is expanded (there was no way to determine whether a specific item is expanded or not) as well as on tap feedback. I've tried wrapping the View with TouchableHighlight but errors were popping up.
2. As for the pull-to-refresh functionality, initially I was using refreshControl, but there was no way to configure a custom icon for that, so I went ahead with a custom pull-to-refresh method.
3. Initially I wanted to use libraries for the skeleton loader, but due to most of having the shimmer effect (which requires react-native-linear-gradient, which is not supported in Expo unfortunately), I decided to just implement the component myself, without the shimmer.
4. Do note that while the landscape orientation works, it causes the styling of the list view to be off.
5. The code coverage took a huge chunk of Language section, as it seems to be printing the coverage to HTML.
6. There was a function for sorting the list but since it is not in the requirements, I decided to leave it out.

<img width="322" alt="Screenshot 2023-03-06 at 8 27 06 PM" src="https://user-images.githubusercontent.com/16792330/223110207-5657932f-eb09-41bb-bc44-045328a01f0b.png">
