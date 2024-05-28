/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";

const Content = ({ temperature }) => {
    return (
      <content>
        <div className="text-9xl p-80 flex justify-center">
          <div>{temperature}&#8451;</div>
        </div>
      </content>
    );
  };

export default Content;