import React from "react";

// Create the WelcomeTitle React component
function WelcomeTitle({ primary = false, user = "Peter" }) {
  // Determine the element to use
  const Tag = primary ? "h1" : "h2";

  // Determine the text to display
  const text = user !== undefined ? `Welcome ${user}!` : "Welcome!";

  return <Tag>{text}</Tag>;
}

// Export the component
export default WelcomeTitle;
