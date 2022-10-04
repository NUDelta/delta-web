import React from 'react';
import Container from "./Container.jsx";

export const App = () => (
  <div>
    <Container className="mt-4">
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="w-1/2 m-auto bg-yellow pt-2 pb-2 rounded-lg">
          <img  src="https://delta-lab.nyc3.cdn.digitaloceanspaces.com/delta-lab/delta-web/static/logo.png" alt="Delta Lab"/>
          <h1 className="font-mono  text-center text-black text-2xl mt-10">
            Our new Delta Lab website is under construction! Check back soon...
          </h1>
        </div>
      </div>
    </Container>
  </div>
);
