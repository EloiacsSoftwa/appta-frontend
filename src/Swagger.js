import React from 'react';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const SwaggerConfig = () => (
  <SwaggerUI url="http://97.74.94.57:8080/inventory-test/swagger-ui/index.html" />
);

export default SwaggerConfig;