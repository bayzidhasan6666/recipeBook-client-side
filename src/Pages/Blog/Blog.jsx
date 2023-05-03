import React from 'react';
import { useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Blog = () => {
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="py-5   min-h-screen flex flex-col items-center justify-center space-y-5">
      <div className="bg-gray-800 rounded-md shadow-lg p-8 w-full md:w-10/12 lg:w-6/12">
        <h1 className="text-3xl font-serif font-bold mb-4 text-center text-red-400 ">
          Differences between uncontrolled and controlled components?
        </h1>
        <p className="text-lg leading-7 text-gray-300 ">
          The main difference between uncontrolled and controlled components is
          that controlled components have their state managed by another
          component or the application itself, while uncontrolled components
          manage their state independently. Controlled components offer greater
          flexibility and control over the user interface, but are more complex
          to build and maintain. Uncontrolled components, on the other hand, are
          simpler and easier to use, but offer less control over the user
          interface.
        </p>
      </div>
      <div className="bg-gray-800 rounded-md shadow-lg p-8 w-full md:w-10/12 lg:w-6/12">
        <h1 className="text-3xl font-serif font-bold mb-4 text-center text-red-400 ">
          How to validate React props using PropTypes?
        </h1>
        <p className="text-lg leading-7 text-gray-300 ">
          PropTypes is a library in React that allows you to type check the
          props passed to a component. This is a useful way to catch errors in
          your code and provide more helpful error messages to other developers
          using your code.
        </p>
        <p className="text-lg leading-7 text-gray-300 ">
          PropTypes is a library in React that allows you to type check the
          props passed to a component. This is a useful way to catch errors in
          your code and provide more helpful error messages to other developers
          using your code.
        </p>
        <p>
          By using PropTypes to validate your props, you can catch errors early
          and provide more helpful error messages to other developers using your
          code. This can make your code more reliable and easier to maintain in
          the long run.
        </p>
      </div>
      <div className="bg-gray-800 rounded-md shadow-lg p-8 w-full md:w-10/12 lg:w-6/12 ">
        <h1 className="text-3xl font-serif font-bold mb-4 text-center text-red-400">
          The difference between nodejs and express js.?
        </h1>
        <p className="text-lg leading-7 text-gray-300 ">
          Node.js provides a runtime environment for running JavaScript code
          outside of the browser, while Express.js is a web application
          framework built on top of Node.js that provides a set of tools and
          features for building web applications. You can use Node.js without
          Express.js to build server-side applications, but using Express.js can
          make it easier and more efficient to build web applications with
          Node.js.
        </p>
      </div>
      <div className="bg-gray-800 rounded-md shadow-lg p-8 w-full md:w-10/12 lg:w-6/12">
        <h1 className="text-3xl font-serif font-bold mb-4 text-center text-red-400 ">
          What is a custom hook, and why will you create a custom hook?
        </h1>
        <p className="text-lg leading-7 text-gray-300 ">
          Custom hook is a function that starts with the prefix use and allows
          you to share logic between components. Custom hooks allow you to
          extract and reuse code that is shared across multiple components,
          making it easier to maintain and reason about your code.
        </p>
        <p>
          You might create a custom hook for a number of reasons. One common use
          case is to extract complex logic from a component and encapsulate it
          in a custom hook, which can then be shared and reused across multiple
          components. This can help to reduce code duplication and make your
          components more concise and easier to reason about.
        </p>
      </div>
    </div>
  );
};

export default Blog;
