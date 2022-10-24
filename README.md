
# FM: News

## App Design

This is expo app. 

```
fm-news
|--assets // contains all the assets for the app (images, fonts, and so forth)
|--hooks // contains all the custom hooks
|--navigation // contains files related to navigation
|--screens // contains all the screens for the app
|--types // contains all the necessary types for the api)
|--services // contains services for APIs 
|--utils // contains common code
|--README.md

```



## Steps to run the project
1. Install the dependencies via
```shell
yarn install
```
2. Run the project by
```shell
yarn start
```
> Since this is an expo managed project, you could 
> either run the app on a real device by 
> scanning the QR code or follow the instructions 
> from the above command to run with simulator/emulator

## Optimizations opportunities

1. Could use FastImage for lazy loading images
2. Using FlashList by shopify will give better performance for list view screen
3. Can use useCallback and useMemo hook where necessary
4. We might also need state management libraries in future based on the complexity 
