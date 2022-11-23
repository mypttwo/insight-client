import React from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particles from "../particles2.json";

const Landing = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="container pt-4 ">
      {/* <Particles
        id="tsparticles"
        // url="particles.json"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particles}
      /> */}
      <div className="px-4 py-5 my-5 text-center">
        <img
          src={require("../whale2.png")}
          className="d-block mx-auto mb-4"
          width="60%"
          height="60%"
        />
        <h1 className="display-5 fw-bold">Ahab</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Hunt your whales</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
