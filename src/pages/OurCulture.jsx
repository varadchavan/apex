import React from "react";
import Nav from "./Nav";

export default function OurCulture() {
  return (
    <div className="flex min-w-screen flex-col min-h-screen bg-gray-50">
      <Nav />
      <div className="flex flex-col items-center p-10">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Our Culture</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl text-center leading-relaxed">
          At our company, we foster innovation, collaboration, and personal growth. We believe in creating a workplace where everyone feels valued and empowered.
        </p>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <img className="w-full" src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  srcset="" />
            <p className="text-gray-700 leading-relaxed">
              Our mission is to revolutionize the industry by providing top-notch services with a strong focus on customer satisfaction and innovation.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Values</h2>
                       <img className="w-full" src="https://plus.unsplash.com/premium_photo-1682437249470-f852445f3a06?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  srcset="" />

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Integrity & Transparency</li>
              <li>Innovation & Excellence</li>
              <li>Collaboration & Teamwork</li>
              <li>Customer-Centric Approach</li>
            </ul>
          </div>
        </div>

        {/* Team Culture */}
        <div className="max-w-5xl mt-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Life at Our Company</h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We believe in a work environment that promotes creativity and well-being. From team outings to flexible work policies, we ensure our employees have the best experience.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900">Flexible Hours</h3>
              <p className="text-gray-600">Work on your own terms with our remote and flexible work policies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900">Growth Opportunities</h3>
              <p className="text-gray-600">We invest in training and mentorship programs for your career growth.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900">Team Bonding</h3>
              <p className="text-gray-600">Frequent team-building activities, retreats, and celebrations.</p>
            </div>
          </div>
        </div>

        {/* Careers Section */}
        <div className="max-w-5xl mt-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Join Our Team</h2>
          <p className="text-lg text-gray-600 mt-4 mb-8 leading-relaxed">
            Ready to be part of something great? Explore our career opportunities and grow with us.
          </p>
          <a
            href="/careers"
            className="px-6 py-3 bg-indigo-200  rounded-lg shadow-md hover:bg-indigo-300 transition-transform transform hover:scale-105 mx-auto"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
}