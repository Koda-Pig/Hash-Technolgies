import React from "react";
import "./style.scss";

/**
 * @packages
 */
import { Helmet } from "react-helmet";

/**
 * @components
 */
import Navbar from "../../Components/Navbar/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="privacyPolicy__container">
      <Helmet>
        <title>Hash Technologies</title>
      </Helmet>

      {/**
       * @section => navbar
       */}
      <Navbar />

      {/**
       * @section => header
       */}
      <div className="privacyPolicy__header">
        <h1>Privacy Policy</h1>
        <div className="lastUpdated">Last updated</div>
        <div className="date">July 05, 2021</div>

        <i>
          Edge & Node Ventures, Inc. (together, “Edge & Node,” “we,” “us,” or
          “our”) is a software development company that creates and supports
          protocols and dApps that are building the decentralized future. This
          Privacy Notice is designed to help you understand how we collect, use,
          and share your personal information, and to help you understand and
          exercise your privacy rights.
        </i>
      </div>

      {/**
       * @section => scope
       */}
      <div className="privacyPolicy__scope">
        <h1>Scope</h1>

        <p>
          Edge & Node Ventures, Inc. (together, “Edge & Node,” “we,” “us,” or
          “our”) is a software development company that creates and supports
          protocols and dApps that are building the decentralized future. This
          Privacy Notice is designed to help you understand how we collect, use,
          and share your personal information, and to help you understand and
          exercise your privacy rights.
        </p>
      </div>

      {/**
       * @section => contactUs
       */}
      <div className="privacyPolicy__contactUs">
        <h1>Contact Us</h1>

        <p>
          If you have any questions about our privacy practices or this Privacy
          Notice, or to exercise your rights as detailed in this Privacy Notice,
          please contact us at:
        </p>

        <ul>
          <li>Hash Technologies</li>
          <li>Jahada Road, Hash Tower, Traffic Chowk</li>
          <li>Biratnagar, Nepal +9779849092326</li>
          <li>Hash Technologies</li>
          <li><b>legal@hashtechnologies.net</b></li>
        </ul>
      </div>
    </div>
  );
}
