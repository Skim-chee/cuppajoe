// Configuration for Jest and Enzyme
// Read docs here: http://airbnb.io/enzyme/docs/installation/react-16.html
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
