## Sample Application

### Running

    npm install

    # starts the webpack-dev-server
    npm run dev

    # produces build/bundle.js for production
    npm run build

    # run the tests
    npm test

### Notes

* I chose not to implement Redux for this exercise, as the state is straightforward enough to manage, and the app is shallow enough that passing state & mutators down to child components is simple and obvious.
* Used as few deps as reasonable
* Implemented styles via emotion's `styled components`. This was my first experience with this.
* There is a basic integration test to confirm that data appears in the preview - checks a text field and the image field.
* The form is defined by a naive form schema. There are unit tests for the schema tools. Could have used a library for this but again, wanted to use as few deps as possible for this simple application. In a real-world scenario this solutions is obviously frail :P
* There is no validation; simple app, limited feature set..
