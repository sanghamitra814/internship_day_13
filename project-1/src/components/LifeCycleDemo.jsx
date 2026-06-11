import React, { useEffect } from "react";

function LifecycleDemo({ count }) {
  useEffect(() => {
    console.log("LifecycleDemo: mounted");
    return () => {
      console.log("LifecycleDemo: unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("LifecycleDemo: updated - count:", count);
  }, [count]);
}

export default LifecycleDemo;
