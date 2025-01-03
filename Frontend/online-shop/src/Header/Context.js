import React from "react";
import { useUser } from "../SecurityFeatures/UserContext";

const Context = () => {
    const { user } = useUser();

    //get current hour
    const currentHour = new Date().getHours();

    // determine the greeting based on time
    let greeting = "Welcome to our site!";
    if (currentHour >= 6 && currentHour < 12) {
        greeting = "Hi 👋, Good morning";
    } else if (currentHour >=12 && currentHour < 18 ){
        greeting = "Hi 👋, Good afternoon";
    } else if (currentHour >= 18 || currentHour < 6) {
        greeting = "Hi 👋,  Good evening";
    }

    return (
        <div>
          <header>
            <h1>
              {user
                ? `${greeting}, 👋 welcome`
                : greeting}
            </h1>
          </header>
          <main>
            {/* Your main content */}
          </main>
        </div>
      );
    };
export default Context;